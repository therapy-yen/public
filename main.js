// Mobile menu toggle + footer year. The page works fully without this script.
(function () {
  var toggle = document.querySelector('.menu-toggle')
  var nav = document.getElementById('site-nav')

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open))
    nav.classList.toggle('is-open', open)
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true')
    })

    // Close after choosing a link, and on Escape
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false)
    })
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false)
        toggle.focus()
      }
    })
  }

  var year = document.getElementById('year')
  if (year) year.textContent = String(new Date().getFullYear())
})()
