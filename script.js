document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollMagic);

  // ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // Slide in from left animation for about section
  var aboutTween = gsap.from(".about-content", {
    duration: 1,
    x: -200,
    opacity: 0,
    ease: "power2.out"
  });

  new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.8,
    reverse: false
  })
    .setTween(aboutTween)
    .addTo(controller);

  // Fade in animation for project sections
  document.querySelectorAll(".project").forEach(function (project) {
    var projectTween = gsap.from(project, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out"
    });

    new ScrollMagic.Scene({
      triggerElement: project,
      triggerHook: 0.8,
      reverse: false
    })
      .setTween(projectTween)
      .addTo(controller);
  });

  // Slide up animation for contact section
  var contactTween = gsap.from("#contact .contact-list", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out"
  });

  new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.8,
    reverse: false
  })
    .setTween(contactTween)
    .addTo(controller);

  // Footer animation
  gsap.from("footer", {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power2.out"
  });

  // Section title animations
  document.querySelectorAll("h2").forEach(function (title) {
    var titleTween = gsap.from(title, {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: "power2.out"
    });

    new ScrollMagic.Scene({
      triggerElement: title,
      triggerHook: 0.9,
      reverse: false
    })
      .setTween(titleTween)
      .addTo(controller);
  });

  // Text fade in animation
  gsap.from(".text", {
    duration: 1,
    opacity: 0,
    ease: "power2.out"
  });

  // Image zoom animation
  gsap.from(".image", {
    duration: 1,
    scale: 0.8,
    ease: "power2.out"
  });

  // Text slide in animation
  gsap.from(".text", {
    duration: 1,
    x: -200,
    opacity: 0,
    ease: "power2.out"
  });

  // Image slide in animation
  gsap.from(".image", {
    duration: 1,
    x: -200,
    opacity: 0,
    ease: "power2.out"
  });

  // Text fade out animation
  gsap.from(".text", {
    duration: 1,
    opacity: 0,
    ease: "power2.out"
  });

  // Image fade out animation
  gsap.from(".image", {
    duration: 1,
    opacity: 0,
    ease: "power2.out"
  });

  // Text slide out animation
  gsap.from(".text", {
    duration: 1,
    x: 200,
    opacity: 0,
    ease: "power2.out"
  });

  // Image slide out animation
  gsap.from(".image", {
    duration: 1,
    x: 200,
    opacity: 0,
    ease: "power2.out"
  });
});