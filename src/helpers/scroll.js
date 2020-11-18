function featuredHandler() {
  window.addEventListener("scroll", function() {
    var element = document.getElementById("featured")
    var bodyRect = document.body.getBoundingClientRect(),
      elemRect = element.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top

    if (elemRect.top < 200) {
      // codigo si el elemento ya llego al top de la pantalla
      document.querySelector(".navbar").style.background = "#222220"
      document.querySelector(
        ".navbarMenuBurger .menuBurgerLineOne"
      ).style.background = "#fcc6c6"
      document.querySelector(
        ".navbarMenuBurger .menuBurgerLineTwo"
      ).style.background = "#fcc6c6"
      document.querySelector(".brand__logo h1").style.color = "#fcc6c6"
      document.querySelector(".explore").style.color = "#fcc6c6"
      document.querySelectorAll(".storiesLink a svg g path")[0].style.fill =
        "#FFC6C6"
      document.querySelectorAll(".storiesLink a svg g path")[1].style.fill =
        "#FFC6C6"
    } else {
      document.querySelector(".navbar").style.background = "#adaea5"
      document.querySelector(
        ".navbarMenuBurger .menuBurgerLineOne"
      ).style.background = "#222220"
      document.querySelector(
        ".navbarMenuBurger .menuBurgerLineTwo"
      ).style.background = "#222220"
      document.querySelectorAll(".storiesLink a svg g path")[0].style.fill =
        "#222220"
      document.querySelectorAll(".storiesLink a svg g path")[1].style.fill =
        "#222220"
      document.querySelector(".brand__logo h1").style.color = "#222220"
      document.querySelector(".explore").style.color = "#222220"
      document.querySelector(".scrollIcon path").style.fill = "#f4f4f4"
      document.querySelector(".scrollIcon line").style.stroke = "#f4f4f4"
    }
  })
}
