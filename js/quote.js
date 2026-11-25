/* LUTU site script. Every price comes from /config/pricing.json — never hard-code one here. */
(function () {
  'use strict';

  var AR   = document.documentElement.dir === 'rtl';
  var P    = null;   // pricing.json
  var SITE = null;   // site.json

  var T = AR ? { onRequest: 'السعر عند الطلب' }
             : { onRequest: 'Price on request' };

  function money(n) {
    return (P.currencySymbol || '$') + Math.round(n).toLocaleString('en-US');
  }

  /* ---- pack cards ---- */
  function renderPacks() {
    var ld = P.launchDiscount;
    var on = ld && ld.enabled && ld.percent > 0;

    /* the launch rate applies only to the packs named in appliesTo */
    function discounts(key) {
      if (!on) return false;
      var list = ld.appliesTo;
      return !list || !list.length || list.indexOf(key) !== -1;
    }

    document.querySelectorAll('[data-pack-price]').forEach(function (el) {
      var key  = el.getAttribute('data-pack-price');
      var pack = P.packs && P.packs[key];
      if (!pack || !pack.price) { el.textContent = T.onRequest; return; }

      if (discounts(key)) {
        var now = pack.price * (1 - ld.percent / 100);
        el.innerHTML = '<s class="pack__was">' + money(pack.price) + '</s> ' + money(now);
      } else {
        el.textContent = money(pack.price);
      }
    });

    document.querySelectorAll('[data-pack-note]').forEach(function (el) {
      var key  = el.getAttribute('data-pack-note');
      var pack = P.packs && P.packs[key];
      var note = (AR && ld && ld.forFirstBrandsTextAr) ? ld.forFirstBrandsTextAr
               : (ld && ld.forFirstBrandsText);
      if (discounts(key) && pack && pack.price && note) {
        el.textContent = note;
      } else {
        el.textContent = '';
      }
    });
  }

  /* ---- add-on prices, from the same config the packs use ---- */
  function renderAddons() {
    var map = {
      extraDay: function () {
        var c = (P.options.days.choices || []).filter(function (x) { return x.id === '2'; })[0];
        return c && c.price;
      },
      extraVideos10: function () {
        var a = P.addons.extraVideos;
        return a && a.pricePerBlock ? a.pricePerBlock * (10 / a.blockSize) : 0;
      },
      arabic: function () { return P.addons.arabic && P.addons.arabic.price; }
    };

    document.querySelectorAll('[data-addon-price]').forEach(function (el) {
      var fn = map[el.getAttribute('data-addon-price')];
      var v  = fn ? fn() : 0;
      el.textContent = v ? money(v) : T.onRequest;
    });
  }

  /* ---- season banner ---- */
  function renderBanner() {
    var sb = document.getElementById('season-banner');
    var sd = document.getElementById('season-date');
    if (!sb || !SITE.seasonBanner) return;
    if (!SITE.seasonBanner.enabled) { sb.hidden = true; return; }
    if (sd && SITE.seasonBanner.bookByDate) {
      var tpl = AR ? SITE.seasonBanner.textAr : SITE.seasonBanner.textEn;
      sd.textContent = ' ' + tpl.replace('{date}', SITE.seasonBanner.bookByDate);
    }
  }

  /* ---- boot ---- */
  Promise.all([
    fetch('/config/pricing.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }),
    fetch('/config/site.json',    { cache: 'no-cache' }).then(function (r) { return r.json(); })
  ]).then(function (res) {
    P = res[0]; SITE = res[1];
    renderPacks();
    renderAddons();
    renderBanner();
  }).catch(function (e) {
    /* config failed to load — the HTML already reads 'Price on request', so nothing breaks */
    if (window.console) console.warn('LUTU: pricing config unavailable', e);
  });

  /* ---- analytics events (no-ops until Plausible is enabled) ---- */
  function track(name, props) {
    if (window.plausible) window.plausible(name, { props: props || {} });
  }
  window.lutuTrack = track;

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="https://wa.me/"]') : null;
    if (a) track('whatsapp_click', { where: a.getAttribute('data-where') || 'page' });
    var ls = e.target.closest ? e.target.closest('.lang-switch') : null;
    if (ls) track('language_switch', { to: ls.getAttribute('hreflang') || '' });
  });

})();
