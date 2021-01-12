const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
(async () => {
  await imagemin(["../public/images/*.{jpg,png}"], {
    destination: "../public/images/webp",
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log("Tüm resimler optimize edildi ve webp versiyonları çıkartıldı.");
})();
