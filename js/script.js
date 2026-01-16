function welcomeMessage() {
    let userResponse = prompt("Hallo, Selamat Datang! Siapa nama Anda?");
    
    let displayArea = document.getElementById("selamat-datang");

    if (displayArea) {
        if (userResponse === null || userResponse === "") {
            displayArea.innerText = "Selamat Datang di Website PPID UPBU Sultan M. Kaharuddin.";
        } else {
            displayArea.innerText = "Selamat Datang, " + userResponse + " di Website PPID UPBU Sultan M. Kaharuddin.";
        }
    }
}

window.onload = welcomeMessage;

// Menangkap elemen form
const formPengaduan = document.getElementById('form-pengaduan');
const containerPengaduan = document.getElementById('daftar-pengaduan');
const pesanKosong = document.getElementById('pesan-kosong');

formPengaduan.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman refresh

    // Mengambil nilai input
    const nama = document.getElementById('input-nama').value;
    const isi = document.getElementById('input-isi').value;
    const waktu = new Date().toLocaleString('id-ID'); // Menambah catatan waktu

    // Menyembunyikan tulisan "Belum ada pengaduan"
    if (pesanKosong) pesanKosong.style.display = 'none';

    // Elemen kotak pengaduan baru
    const card = document.createElement('div');
    card.className = "p-4 bg-blue-50 border-l-4 border-blue-500 rounded shadow-sm mb-4";
    
    // Isi konten kartu pengaduan
    card.innerHTML = `
        <div class="flex justify-between items-start">
            <h4 class="font-bold text-blue-900">${nama}</h4>
            <span class="text-xs text-gray-500">${waktu}</span>
        </div>
        <p class="text-gray-700 mt-2">${isi}</p>
    `;

    // Masukkan ke dalam daftar (di paling atas)
    containerPengaduan.prepend(card);

    // Reset form
    formPengaduan.reset();

    alert("Terima kasih " + nama + ", pengaduan Anda telah ditampilkan di bawah.");
});