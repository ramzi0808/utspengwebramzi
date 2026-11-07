// 1. Foto banner ganti otomatis
const fotoBanner = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg",
    "images/banner5.jpg"
];

let urutan = 0;

function gantiBanner() {
    const gambar = document.getElementById("banner-otomatis");
    if (!gambar) return;

    gambar.style.opacity = 0;

    setTimeout(function() {
        urutan++;
        if (urutan >= fotoBanner.length) {
            urutan = 0;
        }
        gambar.src = fotoBanner[urutan];
        gambar.style.opacity = 1;
    }, 500);
}

setInterval(gantiBanner, 8000);

// 2. JAM DIGITAL buat sidebar
function updateJam() {
    const sekarang = new Date();
    
    let jam = String(sekarang.getHours()).padStart(2, '0');
    let menit = String(sekarang.getMinutes()).padStart(2, '0');
    let detik = String(sekarang.getSeconds()).padStart(2, '0');

    const elJam = document.getElementById("jam-digital");
    if (elJam) {
        elJam.innerHTML = jam + ":" + menit + ":" + detik;
    }

    const opsiTanggal = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const elTgl = document.getElementById("tanggal-digital");
    if (elTgl) {
        elTgl.innerHTML = sekarang.toLocaleDateString('id-ID', opsiTanggal);
    }
}

setInterval(updateJam, 1000);
updateJam();
