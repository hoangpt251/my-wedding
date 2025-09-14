// ======== Xử lý phần ALBUM ============

//AOS ANIMATION
AOS.init();
// SCROLLREVEA
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
// FANCY BOX
Fancybox.bind("[data-fancybox]", {});


// ======== Xử lý phần GIFT ============
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
function showGiftModal() {
    const modal = new bootstrap.Modal(document.getElementById("giftModal"));
    modal.show();
  }
  function downloadImage(imgSrc) {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = imgSrc.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  function copySTK(button) {
    const stk = button.getAttribute('data-stk');
    navigator.clipboard.writeText(stk).then(() => {
      alert("Đã sao chép STK: " + stk);
    });
  }
  function showModalImage(imgSrc) {
    document.getElementById("modalQrImage").src = imgSrc;
    const modal = new bootstrap.Modal(document.getElementById("qrImageModal"));
    modal.show();
  }

  // HIỆU ỨNG RUNG LẮC + PHÓNG TO + RESET
  function animateGiftIcon() {
    const gift = document.querySelector(".gift-icon");
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
      duration: 1500, // tổng thời gian 1.5 giây cho 1 chu kỳ
      iterations: 1,
      easing: "ease-in-out"
    });
  }

  // GỌI HIỆU ỨNG LẶP LẠI MÃI MÃI
  setInterval(animateGiftIcon, 2000); // lặp mỗi 2 giây