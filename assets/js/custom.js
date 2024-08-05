let dataProject = [
    {
        'image': 'assets/img/portfolio/lapanganku.png',
        'title': 'Lapanganku (Maret 2023 - Mei 2023)',
        'decsription': `Proyek ini berbasis website yang dibuat dengan framework Codeigniter 4. Proyek ini dibuat untuk membantu pelanggan dalam melakukan pemesanan lapangan bulu tangkis.`,
        'link': 'https://github.com/zamura48/sewa-lapangan',
        'tag': ['codeigniter 3', 'bootstrap', 'jquery', 'midtrans', 'individu'],
    },
    {
        'image': 'assets/img/portfolio/mediabelship.png',
        'title': 'Mediabelship (Februari 2023 - Maret 2023)',
        'decsription': `Proyek ini berbasis website yang dibuat dengan framework Laravel 9. Proyek ini dibuat untuk membantu siswa dalam arsipkan surat.`,
        'link': 'https://mediabelsip.com/',
        'tag': ['laravel', 'bootstrap', 'jquery', 'tim'],
    },
    {
        'image': 'assets/img/portfolio/posyandu-aster.png',
        'title': 'Posyandu Aster (Mei 2022 - Juni 2022)',
        'decsription': `Proyek ini berbasis website yang dibuat dengan framework Laravel 8. Proyek ini dibuat untuk membantu kader dalam pengolahan data balita, imunisasi, penimbangan badan dan pemberian vitamin.`,
        'link': 'https://github.com/zamura48/posyandu-aster',
        'tag': ['laravel', 'bootstrap', 'jquery', 'api whatsaap', 'individu'],
    },
    {
        'image': 'assets/img/portfolio/sinar-fajar.png',
        'title': 'Sinar Fajar (Oktober 2021 - November 2021)',
        'decsription': `Proyek ini berbasis website yang dibuat dengan framework Laravel 8. Proyek ini dibuat untuk membantu pengelolaan data barang, transaksi dan laporan.`,
        'link': 'https://github.com/zamura48/sinar-fajar',
        'tag': ['laravel', 'bootstrap', 'jquery', 'individu'],
    },
    {
        'image': 'assets/img/portfolio/panjalu.png',
        'title': 'Panjalu (Juli 2021)',
        'decsription': `Proyek ini berbasis website dibuat dengan framework Laravel 8. Proyek ini dibuat untuk memudahkan masyarakat dalam melakukan pengaduan ke Kejaksaan Negeri Kota Kediri.`,
        'link': 'https://github.com/zamura48/panjalu',
        'tag': ['laravel', 'bootstrap', 'tim'],
    },
];

let dataJobs = [
    {
        'image': 'assets/img/portfolio/mamocare.png',
        'title': 'Mamocare (July 2024 - Sekarang)',
        'decsription': `Aplikasi ini dibuat agar ibu hamil dapat mengontrol perkembangan kehamilan dan menjaga kesehatan dari ibu hamil. Pada aplikasi ini saya berperan sebagai pengembang web dan menyediakan API untuk aplikasi android.`,
        'link': 'https://mamocare.id/',
        'tag': ['codeigniter 3', 'bootstrap', 'jquery', 'tim'],
    },
    {
        'image': 'assets/img/portfolio/ekep.png',
        'title': 'EKEP - IIK Strada Indonesia (April 2024 - Sekarang)',
        'decsription': `Aplikasi ini dibuat agar mahasiswa atau dosen yang ingin melakukan uji etik, dapat dilakukan secara online dengan penguji dari IIK Strada Indonesia. Pada aplikasi ini saya berperan sebagai pengembang web.`,
        'link': 'https://ekep.strada.ac.id/',
        'tag': ['codeigniter 3', 'bootstrap', 'jquery', 'tim'],
    },
    {
        'image': '',
        'title': 'E-Sign - IIK Strada Indonesia (Desember 2023 - Januari 2024)',
        'decsription': `Aplikasi ini dibuat untuk tanda tangan digital. Pada aplikasi ini saya berperan sebagai pengembang web`,
        'link': '',
        'tag': ['codeigniter 3', 'bootstrap', 'jquery', 'tim'],
    },
    {
        'image': '',
        'title': 'E-letter - IIK Strada Indonesia (Desember 2023 - Februari 2024)',
        'decsription': `Aplikasi ini dirancang khusus untuk membantu staff dalam mengelola surat masuk dan keluar dengan lebih efisien. Aplikasi ini memungkinkan pengguna untuk merekap semua surat yang diterima dan dikirim dengan mudah. Tidak perlu lagi mencatat secara manual atau mencari-cari di tumpukan berkas, karena semuanya bisa dilakukan dengan beberapa klik saja. Aplikasi ini memastikan bahwa setiap surat tercatat dengan baik, sehingga memudahkan pencarian dan pelaporan. Pada aplikasi ini saya berperan sebagai pengembang web`,
        'link': '',
        'tag': ['codeigniter 3', 'bootstrap', 'jquery', 'tim'],
    },
    {
        'image': '',
        'title': 'Go-RFQ (Agustus 2023 - Desember 2023)',
        'decsription': `Aplikasi ini dibuat untuk membantu sales dalam membuat quotation(penawaran), pada aplikasi ini saya membantu sebagai pengembangan website. framework yang di gunakan codeigniter 3`,
        'link': '',
        'tag': ['codeigniter 3', 'bootstrap', 'jquery', 'tim'],
    },
];

$(document).ready(function () {
    showData('#listJobExperience', dataJobs);
    showData('#listProject', dataProject);
    checkSizeWindow();
});

function checkSizeWindow() {
    if (window.screen.width < 796) {
    } else {
    }
}

function showData(param, data) {
    let html = '';
    $.each(data, function (indexInArray, valueOfElement) { 
        let tag = '';
        let image = 'assets/img/No-Image.png';
        let sourceCode = '';

        if (valueOfElement.image) {
            image = valueOfElement.image;
        }

        if (valueOfElement.link) {
            sourceCode = `<a href="${valueOfElement.link}" target="_blank" style="text-decoration: none;">Source Code</a>`;
        }

        $.each(valueOfElement.tag, function (ind, val) { 
                tag += `<div class="col-4 mt-1 text-bg-primary rounded-3 p-1 ms-1">${val}</div>`;
        });

        html += `<div class="col">
                <div class="card shadow-lg border-0 text-center fw-normal">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="225"
                        src="${image}" role="img"
                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                        focusable="false">
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em" class="fw-bold pt-2">${valueOfElement.title}</text>
                    </img>

                    <div class="card-body">
                        <p class="text-start">${valueOfElement.decsription}
                            <br>
                            ${sourceCode}
                        <div class="row justify-content-center">
                            ${tag}
                        </div>
                        </p>
                    </div>
                </div>
                </div>`;
    });

    $(param).html(html);
}
