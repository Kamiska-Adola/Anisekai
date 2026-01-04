function tampilkanJam() {
  var sekarang = new Date();
  var jam = sekarang.getHours();
  var menit = sekarang.getMinutes();
  var detik = sekarang.getSeconds();

  if (jam < 10) jam = "0" + jam;
  if (menit < 10) menit = "0" + menit;
  if (detik < 10) detik = "0" + detik;

  var waktu = jam + ":" + menit + ":" + detik;

  if (document.getElementById("jam")) {
    document.getElementById("jam").innerHTML = waktu;
  }
}

setInterval(tampilkanJam, 1000);
tampilkanJam();
