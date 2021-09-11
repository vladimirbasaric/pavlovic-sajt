// ********* Template for my-header *************
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <div class="phone-header"> <a href="tel:+381692103000" style="color: white;"> <i class='bx bxs-phone'></i> </a>
      </div><a href="index.html" class="logo img-fluid"><img src="assets/img/SHV-logo.png" alt="logo"></a>
      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Početna</a></li>
          <li><a href="index.html#why-us">Lokacija</a></li>
          <li><a href="index.html#park">Park</a></li>
          <li><a href="lobby.html">Lobby</a></li>
          <li><a href="garaza.html">Garaža</a></li>
          <li><a href="index.html#specials">Stanovi i Lokali</a></li>
          <li><a href="tehnicka-opremljenost.html">Tehnička opremljenost</a></li>
          <li><a href="index.html#events">Investitor</a></li>
          <li><a href="brosura.html">Brošura</a></li>
          <li><a href="contact.html">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  </header>
    `;
  }
}

customElements.define("my-header", MyHeader);

// Template for my-footer (there is my-footer2 below)
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-12 text-center my-auto">
              <div class="footer-info">
                <h3 class="p-0 m-0">Pavlović Invest</h3>
                <p>Vojvode Stepe 232, Beograd, Srbija</p>
              </div>
            </div>
            <div class="mx-auto my-auto">
              <a href="index.html"
                ><img
                  src="assets/img/SHV-logo.png"
                  alt="logo"
                  class="img-fluid footer-logo"
              /></a>
            </div>
            <div class="col-lg-5 col-md-5 text-center my-auto">
              <div>
                <strong>Telefon:</strong><span> +381 69 210 3000</span
                ><br /><strong>Email:</strong
                ><span> office@pavlovicinvest.rs</span><br /><strong
                  >Web:</strong
                ><span> www.pavlovicinvest.rs</span><br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          &copy; Copyright 2020. Pavlović Invest. Sva prava zadržana.
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("my-footer", MyFooter);

// my-footer2

class MyFooter2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 text-center my-auto">
            <div class="footer-info">
              <h3 class="p-0 m-0">Pavlović Invest</h3>
              <p> Vojvode Stepe 232, Beograd, Srbija </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 text-center my-auto">
            <div class="why-us mb-4">
              <a href="contact.html" class="btn-menu animated fadeInUp scrollto">Kontaktirajte nas</a>
            </div>
            <div class="mx-auto text-center">
              <a href="index.html">
                <img src="assets/img/SHV-logo.png" alt="logo" class="img-fluid footer-logo">
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 text-center my-auto">
            <div> <strong>Telefon:</strong><span> +381 69 210 3000</span><br><strong>Email:</strong><span>
                office@pavlovicinvest.rs</span><br><strong>Web:</strong><span> www.pavlovicinvest.rs</span><br></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright"> &copy; Copyright 2020. Pavlović Invest. Sva prava zadržana. </div>
    </div>
  </footer>
    `;
  }
}

customElements.define("my-footer2", MyFooter2);

// my-contact
class myContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Kontakt</h2>
            <p>Kontaktirajte nas</p>
          </div>
        </div>
        <!-- <div data-aos="fade-up"> <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> </div>-->
        <div class="container" data-aos="fade-up">
          <div class="row mt-2">
            <div class="col-lg-4">
              <div class="pb-3">
                <p>
                  Za sve informacije u vezi projekta, kupovine stanova, parking
                  mesta i lokala, kontaktirajte naše konsultante prodaje. Možete
                  nas posetiti u Vojvode Stepe 232.
                </p>
              </div>
              <div class="info">
                <div class="address">
                  <i class="icofont-google-map"></i>
                  <h4>Adresa:</h4>
                  <p>Vojvode Stepe 232, Beograd, Srbija</p>
                </div>
                <!-- <div class="open-hours"> <i class="icofont-clock-time icofont-rotate-90"></i> <h4>Open Hours:</h4> <p> Monday-Saturday:<br>11:00 AM - 2300 PM </p></div>-->
                <div class="email">
                  <i class="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>prodaja@smarthomevozdovac.rs</p>
                </div>
                <div class="phone">
                  <i class="icofont-phone"></i>
                  <h4>Telefon:</h4>
                  <p>+381 69 210 3000</p>
                </div>
                <div class="phone">
                  <i class="bx bxl-instagram"></i>
                  <h4>Instagram:</h4>
                  <a
                    href="https://www.instagram.com/smarthome.vozdovac/?igshid=kzrcni2fjo2l"
                    target="_blank"
                    ><p>#SmartHomeVoždovac</p></a
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="form-row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Ime"
                      data-rule="minlen:4"
                      data-msg="Molimo Vas unesite bar 4 karaktera"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email adresa"
                      data-rule="email"
                      data-msg="Molimo Vas unesite ispravan email"
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Naslov"
                    data-rule="minlen:4"
                    data-msg="Molimo Vas unesite bar 8 karaktera za naslov"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="8"
                    data-rule="required"
                    data-msg="Molimo vas unesite Vašu poruku"
                    placeholder="Unesite Vašu poruku"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Vaša poruka je poslata. Hvala</div>
                </div>
                <div class="text-center">
                  <button type="submit">Pošaljite poruku</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("my-contact", myContact);

// ****** code below is JS code from botstrapmade template ****

!(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $("#header").outerHeight() - 1;
  $(document).on(
    "click",
    ".nav-menu a, .mobile-nav a, .scrollto",
    function (e) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();

          var scrollto = target.offset().top - scrolltoOffset;

          if ($(this).attr("href") == "#header") {
            scrollto = 0;
          }

          $("html, body").animate(
            {
              scrollTop: scrollto,
            },
            1500,
            "easeInOutExpo"
          );

          if ($(this).parents(".nav-menu, .mobile-nav").length) {
            $(".nav-menu .active, .mobile-nav .active").removeClass("active");
            $(this).closest("li").addClass("active");
          }

          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-overly").fadeOut();
          }
          return false;
        }
      }
    }
  );

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $(".mobile-nav").prepend(
      '<button type="button" class="mobile-nav-close"><i class="icofont-close"></i></button>'
    );
    $("#header").append(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-overly").toggle();
    });

    $(document).on("click", ".mobile-nav-close", function (e) {
      $("body").removeClass("mobile-nav-active");
      $(".mobile-nav-overly").fadeOut();
    });

    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
      $("#topbar").addClass("topbar-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
      $("#topbar").removeClass("topbar-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
    $("#topbar").addClass("topbar-scrolled");
  }

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, .mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Menu list isotope and filter
  $(window).on("load", function () {
    var menuIsotope = $(".menu-container").isotope({
      itemSelector: ".menu-item",
      layoutMode: "fitRows",
    });

    $("#menu-flters li").on("click", function () {
      $("#menu-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      menuIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });
  });

  // Events carousel (uses the Owl Carousel library)
  $(".events-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Initiate venobox lightbox
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);
