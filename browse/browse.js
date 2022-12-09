///Scroll to top button
let scrollBtn = document.getElementById("totopBtn");

function topFunction() {
  document.documentElement.scrollTop = 0;
}
document.addEventListener("DOMContentLoaded", () => {
  // Dropdown toggle
  $(".dropdown-toggle").click(function (e) {
    $(this).next(".dropdown").slideToggle();
    $(".dropdown-toggle-i").css("display", "inline-block");
  });
  $(document).click(function (e) {
    var target = e.target.classList.contains("dropdown-toggle");
    if (!target) {
      $(".dropdown").slideUp();
    }
  });
  $(".filterOption_dropdown-toggle").click(function (e) {
    $(this).next(".filterOption_dropdown").slideToggle();
  });

  const dropdowninmob = $(".dropdowninmob");
  $(".dropdown-togg").click(function (e) {
    if (dropdowninmob.is(":visible")) {
      dropdowninmob.hide();
      $(".overlayy").hide();
    } else {
      dropdowninmob.show();
      $(".overlayy").show();
    }
    $(".dropdown-togg-i").css("display", "inline-block");
  });

  $(document).click(function (e) {
    var target = e.target.classList.contains("dropdown-togg");
    if (!target) {
      $(".dropdowninmob").slideUp();
    }
  });

  $(".category_content--list").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 300,
    focusOnSelect: true,
    prevArrow: $(".btn-prev"),
    nextArrow: $(".btn-next"),
    responsive: [
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".btn-search").click(() => {
    $(".btn-search").css("display", "none");
    $(".dbn-menu-mobile").css("display", "none");
    $(".overlay").css("display", "block");
  });
  $(".btn-close").click(() => {
    $(".overlay").css("display", "none");
    $(".dbn-menu-mobile").css("display", "block");
    $(".btn-search").css("display", "block");
  });
  var menuLayout = document.getElementById("menu-layout");
  $("#menu-button").click(() => {
    if (menuLayout.style.transform == "translateX(100%)") {
      menuLayout.style.transform = "translateX(0px)";
    } else {
      menuLayout.style.transform = "translateX(100%)";
    }
  });
});
(function (document) {
  var dropdown = $("#dropdown-toggle");
  var dropdownMb = $("#dropdown-togg");
  var open = false;
  dropdown.click(function () {
    const icon = $("#dropdown-toggle").children()[0];
    if (open) {
      icon.className = "ti-angle-down dropdown-toggle-i";
    } else {
      icon.className = "ti-angle-down dropdown-toggle-i open";
    }
    $(document).click(function (e) {
      const target = e.target.classList.contains("dropdown-toggle");
      if (!target) {
        icon.className = "ti-angle-down dropdown-toggle-i";
      }
    });
    open = !open;
  });
  dropdownMb.click(function () {
    const icon = $("#dropdown-togg").children()[0];
    if (open) {
      icon.className = "ti-angle-down dropdown-togg-i";
    } else {
      icon.className = "ti-angle-down dropdown-togg-i open";
    }
    $(document).click(function (e) {
      const target = e.target.classList.contains("dropdown-togg");
      if (!target) {
        icon.className = "ti-angle-down dropdown-togg-i";
      }
    });
    open = !open;
  });

  const catoryItem = $(".filterOption_content-item");
  catoryItem.click((e) => {
    const icon = e.target.querySelector("i");
    if (open) {
      icon.className = "ti-angle-down dropdown-toggle-ii";
    } else {
      icon.className = "ti-angle-down dropdown-toggle-ii open";
    }
    open = !open;
  });
})(document);
