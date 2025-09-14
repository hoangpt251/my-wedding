// ========== ALBUM ========== //
if (typeof AOS !== "undefined") {
  AOS.init();
}

if (typeof Swiper !== "undefined" && document.querySelector(".album-slide")) {
  var swiper1 = new Swiper(".album-slide", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2000,
    },
  });
}

if (typeof Fancybox !== "undefined") {
  Fancybox.bind("[data-fancybox]", {});
}

// ========== GIFT ========== //
function showGiftModal() {
  const modal = new bootstrap.Modal(document.getElementById("giftModal"));
  modal.show();
}

function downloadImage(imgSrc) {
  const link = document.createElement("a");
  link.href = imgSrc;
  link.download = imgSrc.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function copySTK(button) {
  const stk = button.getAttribute("data-stk");
  navigator.clipboard.writeText(stk).then(() => {
    alert("Đã sao chép STK: " + stk);
  });
}

function showModalImage(imgSrc) {
  const modalImg = document.getElementById("modalQrImage");
  if (modalImg) {
    modalImg.src = imgSrc;
    const modal = new bootstrap.Modal(document.getElementById("qrImageModal"));
    modal.show();
  }
}

// HIỆU ỨNG RUNG LẮC + PHÓNG TO
function animateGiftIcon() {
  const gift = document.querySelector(".gift-icon");
  if (!gift) return;

  const keyframes = [
    { transform: "rotate(0deg) scale(1)" },
    { transform: "rotate(3deg) scale(1)" },
    { transform: "rotate(-3deg) scale(1)" },
    { transform: "rotate(3deg) scale(1)" },
    { transform: "rotate(0deg) scale(1)" },
    { transform: "rotate(0deg) scale(1.15)" },
    { transform: "rotate(3deg) scale(1.15)" },
    { transform: "rotate(-3deg) scale(1.15)" },
    { transform: "rotate(3deg) scale(1.15)" },
    { transform: "rotate(0deg) scale(1.15)" },
    { transform: "rotate(0deg) scale(1)" }
  ];

  gift.animate(keyframes, {
    duration: 1500,
    iterations: 1,
    easing: "ease-in-out",
  });
}

// Chỉ lặp khi có gift-icon
if (document.querySelector(".gift-icon")) {
  setInterval(animateGiftIcon, 2000);
}
