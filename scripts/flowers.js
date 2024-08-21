var falling = true;

gsap.set("#flowers", { perspective: 600 });
gsap.set("img", { xPercent: "-50%", yPercent: "-50%" });

var total = 30;
var container = document.getElementById("flowers"),
  w = window.innerWidth,
  h = window.innerHeight;

for (i = 0; i < total; i++) {
  var Div = document.createElement('div');
  gsap.set(Div, { attr: { class: 'dot' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
  container.appendChild(Div);
  animm(Div);
}

function animm(elm) {
  gsap.to(elm, { y: h + 100, duration: R(6, 15), ease: "none", repeat: -1, delay: -15 });
  gsap.to(elm, { x: '+=100', rotationZ: R(0, 180), duration: R(4, 8), repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(elm, { rotationX: R(0, 360), rotationY: R(0, 360), duration: R(2, 8), repeat: -1, yoyo: true, ease: "sine.inOut", delay: -5 });
}

function R(min, max) {
  return min + Math.random() * (max - min);

}