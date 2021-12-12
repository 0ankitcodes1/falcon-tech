function borderEffectOn(e) {
  var span1, span2, span3, span4;
  span1 = e.querySelector("#span-1");
  span2 = e.querySelector("#span-2");
  span3 = e.querySelector("#span-3");
  span4 = e.querySelector("#span-4");

  span2.style.height = "10px";
  span2.style.width = "100%";

  span3.style.height = "100%";
  span3.style.width = "10px";

  span1.style.height = "100%";
  span1.style.width = "10px";
  span4.style.height = "10px";
  span4.style.width = "100%";

  // setTimeout(function() {
  //   span1.style.height = "100%";
  //   span1.style.width = "10px";
  //   span4.style.height = "10px";
  //   span4.style.width = "100%";
  // }, 200);
}

function borderEffectOff(e) {
  var span1, span2, span3, span4;
  span1 = e.querySelector("#span-1");
  span2 = e.querySelector("#span-2");
  span3 = e.querySelector("#span-3");
  span4 = e.querySelector("#span-4");

  span1.style.height = "0";
  span1.style.width = "0";
  span4.style.height = "0";
  span4.style.width = "0";
  

  setTimeout(function() {
    span2.style.height = "0";
    span2.style.width = "0";
    span3.style.height = "0";
    span3.style.width = "0";
  }, 200);
}


function navigationBar(e) {
  var sideNavbarContainer, mainNavbar, card1, card2, card3, card4, card5;

  sideNavbarContainer = document.querySelector(".sidenavbar-container");
  mainNavbar = document.querySelector("#main-navbar");

  card1 = document.querySelector(".navbar-cards-1");
  card2 = document.querySelector(".navbar-cards-2");
  card3 = document.querySelector(".navbar-cards-3");
  card4 = document.querySelector(".navbar-cards-4");
  card5 = document.querySelector(".navbar-cards-5");

  e.classList.toggle("close-menu");
  if (e.classList.contains("close-menu")) {
    // show side nav here
    mainNavbar.classList.remove("bg-white");
    mainNavbar.classList.add("bg-dark");
    sideNavbarContainer.classList.add("show-sidenavbar");
    
    card1.classList.add("animated__left");
    card2.classList.add("animated__left_2");
    card4.classList.add("animated__right_2");
    card5.classList.add("animated__right");
  }
  else {
    
    // hide side nav here
    sideNavbarContainer.classList.remove("show-sidenavbar");
    mainNavbar.classList.add("bg-white");
    mainNavbar.classList.remove("bg-dark");

    card1.classList.remove("animated__left");
    card2.classList.remove("animated__left_2");
    card4.classList.remove("animated__right_2");
    card5.classList.remove("animated__right");
  }
}