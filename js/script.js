gsap.timeline({
  scrollTrigger: {
    trigger: "section.all",
    start: "center center",
    end: "bottom top",
    markers: true,
    scrub: true,
    pin: true
  }
})
.from("section.all", {opacity : 0})
.from("div.img1", { x : innerWidth * 1, y : innerHeight * 1 })
.from("div.img2", { x : innerWidth * -1 })
.from("div.img3", { x : innerWidth * 1 })
