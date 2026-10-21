/* Script condiviso da tutte le pagine: apre e chiude il menù a tutto schermo
   ("prompts" nella navbar). Il menù è il blocco <div id="menu"> presente
   in ogni pagina; qui si aggiunge/toglie la classe "is-open". */
(function () {
  var menu = document.getElementById('menu');
  if (!menu) return;

  var lastFocus = null;

  function openMenu() {
    lastFocus = document.activeElement;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('menu-is-open'); // blocca lo scroll della pagina
    var closeBtn = menu.querySelector('[data-menu-close]');
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('menu-is-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-menu-open]'), function (el) {
    el.addEventListener('click', openMenu);
  });
  Array.prototype.forEach.call(menu.querySelectorAll('[data-menu-close]'), function (el) {
    el.addEventListener('click', closeMenu);
  });
  // se si sceglie la pagina in cui ci si trova già, il menù si chiude
  menu.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (a && a.pathname === window.location.pathname) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
})();

/* Hover "persistente" sulla navbar: quando si clicca una voce della navbar e si
   arriva alla pagina successiva, il browser non applica l'hover finché il mouse
   non si muove. Qui ricordiamo la posizione del mouse al clic (sessionStorage)
   e, nella nuova pagina, se sotto il mouse c'è una voce della navbar la
   teniamo "in hover" (classe is-held) fino al primo vero movimento. */
(function () {
  var KEY = 'navHoverPoint';
  var SEL = '.site-header a, .site-header button';

  document.addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    if (!(e.target.closest && e.target.closest(SEL))) return;
    try { sessionStorage.setItem(KEY, JSON.stringify({ x: e.clientX, y: e.clientY })); } catch (err) {}
  });

  var raw = null;
  try { raw = sessionStorage.getItem(KEY); sessionStorage.removeItem(KEY); } catch (err) {}
  if (!raw) return;
  var pt;
  try { pt = JSON.parse(raw); } catch (err) { return; }

  var el = document.elementFromPoint(pt.x, pt.y);
  var item = el && el.closest && el.closest(SEL);
  if (!item) return;

  item.classList.add('is-held', 'no-transition');
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { item.classList.remove('no-transition'); });
  });

  function release(e) {
    // ignora i "finti" movimenti che il browser genera da solo dopo il caricamento
    if (Math.abs(e.clientX - pt.x) < 3 && Math.abs(e.clientY - pt.y) < 3) return;
    item.classList.remove('is-held');
    document.removeEventListener('mousemove', release);
  }
  document.addEventListener('mousemove', release);
})();
