let typeSplit = new SplitType(
  ".h1_page-heading, .h1_text-img, .h1_about, .h1_display-xl, .h5_about, .h1_read-next, .article_page-heading, .footer_title, .h1_display, .menu_link, .about_heading, .h1_infocus, .h1_test, .h1_text-imggallery, .h1_projects.is-heading",
  {
    types: "words, chars",
    tagName: "span"
  }
);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  let smoother = ScrollSmoother.create({
    smooth: 2
  });
}

//

// Home Page //

//

// On Home Page Load
$(".section.is-hero").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top bottom"
    }
  });
  tl.to("body", {
    backgroundColor: "#181818",
    color: "#f6f6f4",
    duration: 0
  });

  tl.from(
    ".hero_heading",
    {
      y: "100%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.85
    },
    0.4
  );
});

// Hero Parallax
$(".section.is-hero").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find(".hero_video-background"),
      {
        y: "-15em"
      },
      {
        y: "15em"
      }
    );
});

// About scroll into view
$(".grid.is-about").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(
    ".about_heading .word",
    {
      y: "100%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.85
    },
    0
  );
  tl.from(
    ".about_content-wrapper",
    {
      opacity: 0,
      ease: "power4.out",
      duration: 0.6
    },
    0.4
  );
  tl.from(
    ".about_button-wrap",
    {
      opacity: 0,
      ease: "power4.out",
      duration: 0.6
    },
    0.6
  );
});

// CountUp scroll into view
$(".counter_wrapper").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-counter", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_home.is-counter",
    {
      y: "-130%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.8
    },
    0.2
  );
  tl.from(
    ".counterup_wrap",
    {
      opacity: 0,
      y: -100,
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.8
    },
    0.4
  );
});

// Projects scroll into view
$(".projects_wrapper").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-projects", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_home.is-projects",
    {
      y: "-120%",
      stagger: { each: 0.1 },
      ease: "expo.inOut",
      duration: 0.8
    },
    0.2
  );
  tl.from(
    ".sm_p-wrapper.is-projects",
    {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      duration: 0.8
    },
    0.4
  );
  tl.from(
    ".company_link-block",
    {
      scale: 1.2,
      opacity: 0,
      duration: 0.6
    },
    0.8
  );
});

// Projects Parallax
$(".company_wrapper").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find(".company_img"),
      {
        y: "0em"
      },
      {
        y: "-4em"
      }
    );
});

// Text + Image block Scroll into view
$(".grid.grid--text-img").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from("._7-8_img-wrapper.is-78", {
    scale: 1.2,
    opacity: 0,
    duration: 0.6
  });
  tl.from(
    ".h1_test .word",
    {
      y: "100%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.8
    },
    0.4
  );
  tl.from(
    ".text-img_p-wrap.is-78",
    {
      opacity: 0,
      y: 100,
      ease: "expo.out",
      duration: 0.8
    },
    0.8
  );
  tl.from(
    ".text-img_button-wrap.is-78",
    {
      opacity: 0,
      y: 100,
      ease: "expo.out",
      duration: 0.8
    },
    1
  );
  tl.from(
    ".text-img_p-wrap.is-iframe",
    {
      opacity: 0,
      y: 100,
      ease: "expo.out",
      duration: 0.8
    },
    2.2
  );
});

// Text + Image block Parallax
$(".container.is-text_img, .grid--text-imggallery").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find("._7-8_wrapper"),
      {
        y: "-5em"
      },
      {
        y: "5em"
      }
    )
    .fromTo(
      $(this).find(".text-img_content-wrap"),
      {
        y: "5em"
      },
      {
        y: "-5em"
      },
      0
    )
    .fromTo(
      $(this).find(
        ".text-img_heading-wrap.is-imggallery, .text-imggallery_content-wrap, ._4-3_wrapper"
      ),
      {
        y: "5em"
      },
      {
        y: "-5em"
      },
      0
    );
});

// Text + Imagegallery block Scroll into view
$(".grid.grid--text-imggallery").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(
    "._7-8_img-wrapper.is-gallery",
    {
      scale: 1.2,
      opacity: 0,
      duration: 0.6
    },
    0.2
  );
  tl.from(
    "._7-8_img-wrapper.is-sm",
    {
      scale: 1.2,
      opacity: 0,
      duration: 0.6
    },
    0.4
  );
  tl.from(
    ".h1_text-imggallery .word",
    {
      y: "100%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.8
    },
    0
  );
  tl.from(
    ".text-img_p-wrap.is-gallery",
    {
      opacity: 0,
      y: 100,
      ease: "expo.out",
      duration: 0.8
    },
    0.4
  );
});

// InFocus scroll into view
$(".news_in-focus-wrap").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-infocus", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".infocus_heading",
    {
      y: "-100%",
      ease: "expo.out",
      duration: 0.4
    },
    0
  );
  tl.from(".news_item-wrap", {
    y: 100,
    opacity: 0,
    stagger: { each: 0.2 },
    ease: "expo.out",
    duration: 0.8
  });
  tl.from(
    ".splide__slide.is-news",
    {
      y: 100,
      opacity: 0,
      stagger: { each: 0.2 },
      ease: "expo.out",
      duration: 0.8
    },
    0.8
  );
  tl.from(
    ".news_heading-button-wrap.is-top",
    {
      opacity: 0,
      ease: "expo.out",
      duration: 0.8
    },
    0.4
  );
  tl.from(
    ".news_heading-button-wrap.is-bottom",
    {
      opacity: 0,
      y: 50,
      ease: "expo.out",
      duration: 0.8
    },
    1
  );
  tl.from(
    ".h1_infocus .word",
    {
      y: "120%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.85
    },
    0.4
  );
});

//

// About Page //

//

// On About Page Load
$(".section.is-hero").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top bottom"
    }
  });
  tl.from(
    ".h1_display-xl .word",
    {
      y: "100%",
      stagger: { each: 0.2 },
      ease: "expo.out",
      duration: 0.85
    },
    2.6
  );
  tl.from(
    ".about_hero-stripe",
    {
      height: "0%",
      ease: "power2.in",
      duration: 0.6
    },
    2.8
  );
});

// About hero Parallax
$(".sticky_video-wrapper").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find(".sticky_video"),
      {
        y: "-15em"
      },
      {
        y: "20em"
      }
    )
    .fromTo(
      $(this).find(".grid.is-hero_title"),
      {
        y: "20em"
      },
      {
        y: "-20em"
      },
      0
    );
});

// ACCELERATING scroll into view
$(".grid.is-accelerating").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-global", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_about.is-acceletaing .word",
    {
      y: "-120%",
      stagger: { each: 0.1 },
      ease: "expo.inOut",
      duration: 0.8
    },
    0.2
  );
  tl.from(
    ".sm_p-wrapper.is-accelerating",
    {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      duration: 0.8
    },
    0.4
  );
});

// Our Story scroll into view
$(".story_section").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-story", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_about.is-story .word",
    {
      y: "-120%",
      stagger: { each: 0.1 },
      ease: "expo.inOut",
      duration: 0.8
    },
    0.2
  );
  tl.from(
    ".sm_p-wrapper.is-story",
    {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      duration: 0.8
    },
    0.4
  );
});

// Vargas X scroll into view
$(".vargasx_section").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-vargasx", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_about.is-vargasx .word",
    {
      y: "-120%",
      stagger: { each: 0.1 },
      ease: "expo.inOut",
      duration: 0.8
    },
    0.2
  );
  tl.from(
    ".sm_p-wrapper.is-vargasx",
    {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      duration: 0.8
    },
    0.4
  );
});

// Cover scroll into view
$(".cover_wrapper").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".cover_img-scale", {
    scale: 1.2,
    opacity: 0,
    duration: 0.6
  });
  tl.from(
    ".h1_about.is-cover .word",
    {
      y: "100%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.85
    },
    0.4
  );
});

// Cover Parallax
$(".container.is-cover").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find(".cover_img-wrapper"),
      {
        y: "-5em"
      },
      {
        y: "5em"
      }
    )
    .fromTo(
      $(this).find(".cover_text-wrapper"),
      {
        y: "5em"
      },
      {
        y: "-5em"
      },
      0
    );
});

// Team scroll into view
$(".team_section").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-team", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_about.is-team .word",
    {
      y: "-120%",
      stagger: { each: 0.1 },
      ease: "expo.inOut",
      duration: 0.8
    },
    0.2
  );
  tl.from(
    ".sm_p-wrapper.is-team",
    {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      duration: 0.8
    },
    0.4
  );
  tl.from(
    ".team_wrapper",
    {
      opacity: 0,
      y: 100,
      stagger: { each: 0.1 },
      ease: "power3.out",
      duration: 0.8
    },
    0.6
  );
});

// Advisors scroll into view
$(".advisors_section").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-advisors", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_about.is-advisors .word",
    {
      y: "-120%",
      stagger: { each: 0.1 },
      ease: "expo.inOut",
      duration: 0.8
    },
    0.2
  );
  tl.from(
    ".sm_p-wrapper.is-advisors",
    {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      duration: 0.8
    },
    0.4
  );
  tl.from(
    ".advisors_wrapper",
    {
      opacity: 0,
      y: 50,
      stagger: { each: 0.1 },
      ease: "power3.out",
      duration: 0.6
    },
    0.6
  );
});

// Partners scroll into view
$(".partners_section").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-partners", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_about.is-partners .word",
    {
      y: "-120%",
      stagger: { each: 0.2 },
      ease: "power3.out",
      duration: 0.8
    },
    0
  );
  tl.from(
    ".sm_p-wrapper.is-partners",
    {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      duration: 0.8
    },
    0.4
  );
  tl.from(
    ".marque",
    {
      opacity: 0,
      ease: "power3.out",
      duration: 0.8
    },
    0.6
  );
});

// Sticky figure
$(".scrub_grid").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: $(this).find(".scrub_sticky-wrapper, .scrub_navigation-list")
  });
});

// Sticky navigation
$(".scrub_grid").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: $(this).find(".scrub_navigation-list")
  });
});

//

// Our companies Page //

//

// Our companies Page Load
$(".projects_page-heading").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top bottom"
    }
  });
  tl.from(
    ".stripe.is-projects_hero",
    {
      width: "0%",
      ease: "power2.in",
      duration: 0.6
    },
    1
  );
  tl.from(
    ".h1_projects.is-heading .word",
    {
      y: "-120%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.8
    },
    1.2
  );
  tl.from(
    ".p_large, .block_content_rich-text",
    {
      y: 100,
      opacity: 0,
      ease: "power2.out",
      duration: 0.6
    },
    1.8
  );
  tl.from(
    ".company_link-block",
    {
      scale: 1.2,
      opacity: 0,
      duration: 0.6
    },
    1.8
  );
});

// Our companies About us section
$(".projects_about-wrapper").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-about", {
    width: "0%",
    ease: "power2.in",
    duration: 0.6
  });
  tl.from(
    ".h5_projects.is-about",
    {
      y: "-120%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.8
    },
    0.4
  );
  tl.from(
    ".h1_projects.is-about",
    {
      y: "100%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.8
    },
    0.6
  );
  tl.from(
    ".projects_about.is-p_wrapper",
    {
      opacity: 0,
      y: 100,
      ease: "expo.out",
      duration: 0.8
    },
    0.8
  );
  tl.from(
    ".projects_about.is_button_wrapper",
    {
      opacity: 0,
      y: 100,
      ease: "expo.out",
      duration: 0.8
    },
    1
  );
});

//

// Company Page //

//

// Company Page Load
$(".grid.is-projectpage").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top bottom"
    }
  });
  tl.from(
    ".stripe.is-hero",
    {
      width: "0%",
      ease: "power2.in",
      duration: 0.6
    },
    1
  );
  tl.from(
    ".project_img-scale",
    {
      scale: 1.2,
      opacity: 0,
      duration: 0.6
    },
    1.4
  );
  tl.from(
    ".h1_display .char",
    {
      y: "-120%",
      stagger: { each: 0.02 },
      ease: "power4.out",
      duration: 0.4
    },
    1.4
  );
  tl.from(
    ".p_large",
    {
      y: "-120%",
      ease: "power4.out",
      duration: 0.2
    },
    1.6
  );
});

// Project Page Video Parallax
$(".project_img").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find(".projects_video-embed"),
      {
        y: "-10em"
      },
      {
        y: "10em"
      }
    );
});

// Project description scroll into view
$(".grid.is-projectinfo").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-info", {
    width: "0%",
    stagger: { each: 0.2 },
    ease: "power4.in",
    duration: 0.6
  });
  tl.from(
    ".info_heading",
    {
      y: "-120%",
      stagger: { each: 0.2 },
      ease: "power4.out",
      duration: 0.4
    },
    0.6
  );
  tl.from(
    ".info_numbers-wrapper",
    {
      y: 100,
      opacity: 0,
      ease: "power2.out",
      duration: 0.4
    },
    0.8
  );
  tl.from(
    ".info_button-wrapper",
    {
      y: 100,
      opacity: 0,
      ease: "power2.out",
      duration: 0.4
    },
    1
  );
  tl.from(
    ".info_description-wrapper",
    {
      y: 100,
      opacity: 0,
      ease: "power2.out",
      duration: 0.4
    },
    0.6
  );
});

// 02 Text + Image block Scroll into view
$(".grid.is-text_img").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(
    "._7-8_img-wrapper.is-78_2",
    {
      scale: 1.2,
      opacity: 0,
      duration: 0.6
    },
    0.4
  );
  tl.from(".h1_text-img .word", {
    y: "100%",
    stagger: { each: 0.1 },
    ease: "expo.out",
    duration: 0.8
  });
  tl.from(
    ".text-img_p-wrap.is-78_2",
    {
      opacity: 0,
      y: 100,
      ease: "expo.out",
      duration: 0.8
    },
    0.8
  );
  tl.from(
    ".text-img_button-wrap.is-78_2",
    {
      opacity: 0,
      y: 100,
      ease: "expo.out",
      duration: 0.8
    },
    1
  );
});

// Timeline scroll into view
$(".slider_wrapper").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(
    ".timeline_wrapper",
    {
      y: 100,
      opacity: 0,
      ease: "expo.out",
      duration: 0.6
    },
    0.4
  );
});

//

// News page //

//

// On News Page Load
$(".news_wrapper").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top bottom"
    }
  });
  tl.from(
    ".line",
    {
      width: "0%",
      stagger: { each: 0.2 },
      ease: "power4.out",
      duration: 0.6
    },
    1
  );

  tl.from(
    ".h1_page-heading .word",
    {
      y: "-110%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.8
    },
    1.4
  );

  tl.from(
    ".news_tabs-menu",
    {
      y: "-110%",
      ease: "power4.out",
      duration: 0.6
    },
    1.6
  );

  tl.from(
    ".news_resultswrapper",
    {
      opacity: 0,
      ease: "power4.out",
      duration: 0.6
    },
    1.8
  );

  tl.from(
    ".news_item-wrap.is-featured",
    {
      y: 100,
      opacity: 0,
      stagger: { each: 0.2 },
      ease: "power3.out",
      duration: 0.8
    },
    1.4
  );
  tl.from(
    ".news_list-wrap.is-all",
    {
      y: 100,
      opacity: 0,
      ease: "power3.out",
      duration: 0.8
    },
    1.4
  );
});

//

// Article Page //

//

// On Article Page Load
$(".grid.is-article_page").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top bottom"
    }
  });
  tl.from(
    ".line",
    {
      width: "0%",
      stagger: { each: 0.2 },
      ease: "power3.in",
      delay: 0.2,
      duration: 0.6
    },
    1
  );

  tl.from(
    ".article_page-heading .word",
    {
      y: "-410%",
      stagger: { each: 0.04, from: "end" },
      ease: "expo.out",
      duration: 0.8
    },
    1.4
  );

  tl.from(
    ".p_preamble.is-article",
    {
      y: 100,
      opacity: 0,
      ease: "power3.out",
      duration: 0.8
    },
    1.4
  );

  tl.from(
    ".news_article-img",
    {
      y: 100,
      opacity: 0,
      ease: "power3.out",
      duration: 0.8
    },
    1.4
  );
  tl.from(
    ".grid.is-article",
    {
      y: 100,
      opacity: 0,
      ease: "power3.out",
      duration: 0.8
    },
    1.4
  );
});

// Read Next scroll into view
$(".read-next_content-wrapper").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".news_img", {
    scale: 1.2,
    opacity: 0,
    duration: 0.6
  });
  tl.from(
    ".h1_read-next .word",
    {
      y: "-100%",
      duration: 0.4
    },
    0.4
  );
  tl.from(
    ".read-next_content",
    {
      y: 100,
      opacity: 0,
      duration: 0.4
    },
    0.6
  );
});

//

// Our journey Page //

//

// 2 images Scroll into view First
$("._2_images-wrapper.is-first").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from("._2_images-scale.is-1_1.is-first", {
    scale: 1.2,
    opacity: 0,
    duration: 0.6
  });
  tl.from(
    "._2_images-scale.is-4_3.is-first",
    {
      scale: 1.2,
      opacity: 0,
      duration: 0.6
    },
    0.2
  );
});

// 2 images Scroll into view Second
$("._2_images-wrapper.is-second").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from("._2_images-scale.is-1_1.is-second", {
    scale: 1.2,
    opacity: 0,
    duration: 0.6
  });
  tl.from(
    "._2_images-scale.is-4_3.is-second",
    {
      scale: 1.2,
      opacity: 0,
      duration: 0.6
    },
    0.2
  );
});

// 2 images Parallax
$("._2_images-wrapper").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find("._2_images-wrap.is-left"),
      {
        y: "-5em"
      },
      {
        y: "5em"
      }
    )
    .fromTo(
      $(this).find("._2_images-wrap.is-right"),
      {
        y: "5em"
      },
      {
        y: "-5em"
      },
      0
    );
});

// Journey Content Scroll into view First
$(".journey_content-wrapper.is-first").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".journey_content.is-first", {
    y: "5em",
    opacity: 0,
    ease: "expo.out",
    delay: 0.2,
    duration: 0.6
  });
});

// Journey Content Scroll into view Second
$(".journey_content-wrapper.is-second").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".journey_content.is-second", {
    y: "5em",
    opacity: 0,
    ease: "expo.out",
    delay: 0.2,
    duration: 0.6
  });
});

//

// General styles //

//

// Footer scroll into view
$(".footer").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 90%"
    }
  });
  tl.from(".stripe.is-footer", {
    width: "0%",
    stagger: { each: 0.2 },
    ease: "power2.in",
    duration: 0.6
  });
  tl.to(
    ".footer_divider-line",
    {
      height: "100%",
      ease: "power2.in",
      duration: 0.4
    },
    0.4
  );
});

// First Click / Second Click
function menuAnimation() {
  let tl = gsap.timeline({ paused: true });
  tl.from(".nav_link-block", {
    y: "200%",
    stagger: { each: 0.2, from: "end" },
    ease: "power2.out",
    duration: 0.4,
    delay: 0.6
  });

  tl.to(
    "body",
    {
      backgroundColor: "#181818",
      color: "#f6f6f4",
      duration: 0.4,
      delay: 0.4
    },
    0
  );

  $(".nav_menu-button").on("click", function () {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      tl.restart();
    } else {
      tl.reverse();
    }
  });
}
menuAnimation();

// Prevent scroll when menu is open
$(".nav_menu-button").on("click", function () {
  $(this).toggleClass("open");
  if ($(this).hasClass("open")) {
    setTimeout(() => smoother.paused(true), 3);
  } else {
    smoother.paused(false);
  }
});

// Hover Navigation Links
let mm = gsap.matchMedia();
// on desktop
mm.add("(min-width: 992px)", () => {
  $(".nav_link-block").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.to($(this).find(".menu_link.is-1 .char"), {
      y: "-140%",
      stagger: { each: 0.015 },
      ease: "power2.inOut",
      duration: 0.5
    });
    tl.from(
      $(this).find(".menu_link.is-2 .char"),
      {
        y: "140%",
        stagger: { each: 0.015 },
        ease: "power2.inOut",
        duration: 0.5
      },
      0
    );
    $(this).on("mouseenter", function () {
      tl.restart();
    });
    $(this).on("mouseleave", function () {
      tl.reverse();
    });
    $(this).on("click", function () {
      tl.restart();
    });
  });
  // Hover Footer Links
  $(".footer_link").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.to($(this).find(".footer_title.is-1 .char"), {
      y: "-120%",
      stagger: { each: 0.015 },
      ease: "power2.inOut",
      duration: 0.5
    });
    tl.from(
      $(this).find(".footer_title.is-2 .char"),
      {
        y: "120%",
        stagger: { each: 0.015 },
        ease: "power2.inOut",
        duration: 0.5
      },
      0
    );
    $(this).on("mouseenter", function () {
      tl.restart();
    });
    $(this).on("mouseleave", function () {
      tl.reverse();
    });
  });
});

// Light to Dark Color Change
$(".dark-mode").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $("body");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      // can also use "20px 80%"
      start: "center center",
      end: "center center",
      scrub: 2
    }
  });
  tl.fromTo(
    targetElement,
    {
      backgroundColor: "#f6f6f4",
      color: "#181818",
      duration: 1
    },
    {
      backgroundColor: "#181818",
      color: "#f6f6f4",
      duration: 1
    }
  );
});

// Dark to Light Color Change
$(".light-mode").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $("body");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      // can also use "20px 80%"
      start: "center center",
      end: "center center",
      scrub: 2
    }
  });
  tl.fromTo(
    targetElement,
    {
      backgroundColor: "#181818",
      color: "#f6f6f4",
      duration: 1
    },
    {
      backgroundColor: "#f6f6f4",
      color: "#181818",
      duration: 1
    }
  );
});

//

// Custom cursor //

//

$("body").on("mousedown", function () {
  $(".cursor_dot").addClass("cursor-smaller");
});

$("body").on("mouseup", function () {
  $(".cursor_dot").removeClass("cursor-smaller");
});

$(
  "a:not(.news_link-block.is-list, .splide__slide.is-news, .splide__slide.is-timeline, .projects_link, .company_wrapper, .news_link-block, .company_link-block)"
).on("mouseenter", function () {
  $(".cursor_dot, .cursor").addClass("is-larger");
});

$("a").on("mouseleave", function () {
  $(".cursor_dot, .cursor").removeClass("is-larger");
});

$(
  ".news_link-block.is-list, .splide__slide.is-news, .splide__slide.is-timeline"
).on("mouseenter", function () {
  $(".cursor_dot").addClass("is-slider");
});

$(
  ".news_link-block.is-list, .splide__slide.is-news, .splide__slide.is-timeline"
).on("mouseleave", function () {
  $(".cursor_dot").removeClass("is-slider");
});

$(".projects_link, .company_wrapper, .news_link-block").on(
  "mouseenter",
  function () {
    $(".cursor_dot").addClass("is-arrow");
  }
);

$(".projects_link, .company_wrapper, .news_link-block").on(
  "mouseleave",
  function () {
    $(".cursor_dot").removeClass("is-arrow");
  }
);

//

// Count up //

//

$(".counterup").each(function (index) {
  // assign ID
  let thisId = "countup" + index;
  $(this).attr("id", thisId);
  // create variables
  let startNumber = +$(this).text();
  let endNumber = +$(this).attr("final-number");
  let decimals = 0;
  let duration = $(this).attr("count-duration");
  // animate number
  let myCounter = new CountUp(
    thisId,
    startNumber,
    endNumber,
    decimals,
    duration
  );
  // Scroll into view trigger
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 80%",
    end: "bottom top",
    onEnter: () => {
      myCounter.start();
    }
  });
});

//

// Hide header on scroll down //

//

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    console.log("has scrolled navup");
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      console.log("has scrolled navdown");

      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

//

// Page transition //

//

// New Home Page Load
$(".hero").each(function (index) {
  let triggerElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top bottom"
    }
  });
  tl.to("body", {
    backgroundColor: "#181818",
    color: "#f6f6f4",
    duration: 0
  });

  tl.from(
    ".hero_h1-heading",
    {
      y: "100%",
      stagger: { each: 0.1 },
      ease: "expo.out",
      duration: 0.85
    },
    1.4
  );
  tl.from(
    ".hero_vertical-stripe",
    {
      height: "0%",
      ease: "power2.in",
      duration: 0.6
    },
    1.8
  );
});

// New hero Parallax
$(".hero").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find(".hero_sm-video-wrapper"),
      {
        y: "-10em"
      },
      {
        y: "10em"
      }
    )
    .fromTo(
      $(this).find(".hero_heading-wrapper"),
      {
        y: "20em"
      },
      {
        y: "-20em"
      },
      0
    )
    .fromTo(
      $(this).find(".hero_video-wrapper"),
      {
        y: "-10em"
      },
      {
        y: "10em"
      },
      0
    )
    .fromTo(
      $(this).find(".hero_arrow-wrapper"),
      {
        y: "10em"
      },
      {
        y: "-10em"
      },
      0
    );
});

// Page transition to Dark
function pageTransitionDark() {
  let tl = gsap.timeline({ paused: true });
  tl.to("body", {
    backgroundColor: "#181818",
    color: "#f6f6f4",
    ease: "expo.out",
    duration: 0.6,
    delay: 0.4
  });
  tl.to(
    ".page-load_progress.is-second",
    {
      width: "50%",
      ease: "expo.in",
      duration: 0.8
    },
    0
  );
  tl.to(
    ".main-wrapper",
    {
      opacity: 0,
      ease: "expo.out",
      duration: 0.4
    },
    0
  );
  tl.to(
    ".projects_name-wrapper",
    {
      opacity: 0,
      ease: "expo.out",
      duration: 0.4
    },
    0
  );
  $(".page-transition.to-dark").on("click", function () {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      tl.restart();
    } else {
      tl.reverse();
    }
  });
}
pageTransitionDark();

// Page transition to Light
function pageTransitionLight() {
  let tl = gsap.timeline({ paused: true });
  tl.to("body", {
    backgroundColor: "#f6f6f4",
    color: "#181818",
    ease: "expo.out",
    duration: 0.6,
    delay: 0.4
  });
  tl.to(
    ".page-load_progress.is-second",
    {
      width: "50%",
      ease: "expo.in",
      duration: 0.8
    },
    0
  );
  tl.to(
    ".main-wrapper",
    {
      opacity: 0,
      ease: "expo.out",
      duration: 0.4
    },
    0
  );
  tl.to(
    ".projects_name-wrapper",
    {
      opacity: 0,
      ease: "expo.out",
      duration: 0.4
    },
    0
  );
  $(".page-transition.to-light").on("click", function () {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      tl.restart();
    } else {
      tl.reverse();
    }
  });
}
pageTransitionLight();

// Page transition Menu Light
function pageTransitionMenuLight() {
  let tl = gsap.timeline({ paused: true });
  tl.to("body", {
    backgroundColor: "#f6f6f4",
    color: "#181818",
    ease: "expo.out",
    duration: 0.6,
    delay: 0.4
  });
  tl.to(
    ".menu",
    {
      backgroundColor: "rgba(246, 246, 244, 0.8)",
      color: "#f6f6f4",
      ease: "expo.out",
      duration: 0.6
    },
    0.4
  );
  tl.to(
    ".nav_sublink",
    {
      y: "-100%",
      stagger: { each: 0.1, from: "end" },
      ease: "expo-out",
      duration: 0.2
    },
    0
  );
  tl.to(
    ".nav_link-submenu-line",
    {
      width: "0%",
      duration: 0.2
    },
    0.2
  );
  tl.to(
    ".nav_link-block",
    {
      y: "120%",
      opacity: 0,
      stagger: { each: 0.1, from: "end" },
      ease: "expo-out",
      duration: 0.2
    },
    0
  );
  tl.to(
    ".main-wrapper",
    {
      opacity: 0,
      ease: "expo.out",
      duration: 0.4
    },
    0
  );
  tl.to(
    ".page-load_progress.is-second",
    {
      width: "50%",
      ease: "expo.in",
      duration: 0.8
    },
    0
  );
  $(".page-transition.menu_to-light").on("click", function () {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      tl.restart();
    } else {
      tl.reverse();
    }
  });
}
pageTransitionMenuLight();

// Page transition Menu Dark
function pageTransitionMenuDark() {
  let tl = gsap.timeline({ paused: true });
  tl.to(
    ".nav_sublink",
    {
      y: "-100%",
      stagger: { each: 0.1, from: "end" },
      ease: "expo-out",
      duration: 0.2
    },
    0
  );
  tl.to(
    ".nav_link-submenu-line",
    {
      width: "0%",
      duration: 0.2
    },
    0.2
  );
  tl.to(
    ".nav_link-block",
    {
      y: "120%",
      opacity: 0,
      stagger: { each: 0.1, from: "end" },
      ease: "expo-out",
      duration: 0.2
    },
    0
  );
  tl.to(
    ".main-wrapper",
    {
      opacity: 0,
      ease: "expo.out",
      duration: 0.4
    },
    0
  );
  tl.to(
    ".page-load_progress.is-second",
    {
      width: "50%",
      ease: "expo.in",
      duration: 0.8
    },
    0
  );
  $(".page-transition.menu_to-dark").on("click", function () {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      tl.restart();
    } else {
      tl.reverse();
    }
  });
}
pageTransitionMenuDark();

//

// Sticky figures
$(".section.is-about_scroll").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: $(this).find(".about-scroll_wrap")
  });
});

// Sticky progress
$(".section.is-about_scroll").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pin: $(this).find(".about-scroll_progress-wrap")
  });
});

let cmsItem = $(".about-scroll_item");
let zIndex = 1;

$(".about-scroll_trigger-item").each(function (index) {
  let itemTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      toggleActions: "restart none none reverse"
    }
  });
  if (index > 0) {
    itemTimeline.from(cmsItem.eq(index), {
      opacity: 0,
      duration: 0.2
    });
  }
  // Text timeline
  let textTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      onEnter: () => {
        zIndex = zIndex + 1;
        cmsItem.eq(index).css("z-index", zIndex);
      },
      onEnterBack: () => {
        zIndex = zIndex + 1;
        cmsItem.eq(index).css("z-index", zIndex);
      }
    }
  });
  textTimeline.from(cmsItem.eq(index).find(".about-scroll_content"), {
    opacity: 0,
    y: "4rem",
    duration: 1
  });
  if (index < cmsItem.last().index()) {
    textTimeline.to(cmsItem.eq(index).find(".about-scroll_content"), {
      opacity: 0,
      duration: 0.2
    });
  }
  textTimeline.to({}, { duration: 0.3 });
});

// Progress Bar
$(".section.is-about_scroll").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 20%",
        end: "bottom 80%",
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo(
      $(this).find(".about-scroll_progress-bar"),
      {
        height: "0%"
      },
      {
        height: "100%"
      }
    );
});
