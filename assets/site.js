/* Continuous LMS toolkit: highlights the section in view in the "On this page" list. */
(function () {
  var links = document.querySelectorAll('.toc a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var heads = [];
  links.forEach(function (a) { var h = document.getElementById(a.getAttribute('href').slice(1)); if (h) heads.push(h); });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id); });
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  heads.forEach(function (h) { io.observe(h); });
})();
