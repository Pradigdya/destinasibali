const form = document.querySelector("#moreContent-perjalanan form");
const select = document.querySelector("#destinasi");
const iframe = document.getElementById("mapsIframe");
const mapsContainer = document.getElementById("mapsContainer");

const mapsLinks = {
  pandawa:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.493328759741!2d115.20910017501647!3d-8.833576191220175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25c953736295d%3A0x8b2e43d515b1e93e!2sSamabe%20Bali%20Suites%20%26%20Villas!5e0!3m2!1sid!2sid!4v1749443251148!5m2!1sid!2sid",
  seminyak:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.076894042172!2d115.15847487501472!3d-8.684237891363964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24719e1d6041b%3A0xda52c1f3b844f49!2sAmadea%20Resort%20%26%20Villas%20Seminyak!5e0!3m2!1sid!2sid!4v1749443314800!5m2!1sid!2sid",
  kuta: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.778828924474!2d115.16519107501517!3d-8.71254099133672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24712044226fd%3A0x5095d252a51ca236!2sTRIBE%20Bali%20Kuta%20Beach!5e0!3m2!1sid!2sid!4v1749443391773!5m2!1sid!2sid",
  kelingking:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.386721754549!2d115.47473577501559!3d-8.749635591300985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd27146a9ff1497%3A0x9eb7cd58c345146f!2sKelingking%20mesari%20villa%20%26%20spa!5e0!3m2!1sid!2sid!4v1749443452029!5m2!1sid!2sid",
  melasti: "https://www.google.com/maps?q=Umana+Bali,+LXR+Hotels+%26+Resorts&output=embed",
  puraulundanu: "https://www.google.com/maps?q=Bagus+Jati+Health+%26+Well+Being+Retreat&output=embed",
  tanahlot: "https://www.google.com/maps?q=Natya+Hotel+Tanah+Lot&output=embed",
  tirtaempul: "https://www.google.com/maps?q=Hoshi+Jungle+Resort&output=embed",
  purabesakih: "https://www.google.com/maps?q=Samanvaya+Bali&output=embed",
  puralempuyangan: "https://www.google.com/maps?q=Nalini+Resort+Bali&output=embed",
  panglipuran: "https://www.google.com/maps?q=Alam+Kawi+Ubud+Resort+%26+Spa&output=embed",
  agung: "https://www.google.com/maps?q=Agung+Resort+Bali&output=embed",
  batur: "https://www.google.com/maps?q=Tegal+Sari+Cabin+Kintamani&output=embed",
  batukaru: "https://www.google.com/maps?q=Hideout+Eco+Bamboo+House+Bali&output=embed",
  catur:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63175.194520934485!2d115.07544646420762!3d-8.257960050445602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd189a60e987d5d%3A0x10ceaba0d805854a!2sThe%20polumb%20garden%20bedugul!5e0!3m2!1sid!2sid!4v1749443788478!5m2!1sid!2sid",
};

form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah reload

  const selected = select.value;
  if (mapsLinks[selected]) {
    iframe.src = mapsLinks[selected];
    mapsContainer.classList.remove("hidden");
  } else {
    iframe.src = "";
    mapsContainer.classList.add("hidden");
  }
});
