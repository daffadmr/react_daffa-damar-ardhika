# React Routing

## Summary
- Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page application).
- Single Page Application merupakan salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.
- Route pada react-router-dom digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web.
- Attribute path pada Route merupakan url pada browser pada proses routing.
- Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan.
- Link digunakan untuk berpindah antar halaman, property to merujuk pada path di route yang akan dituju.
- Beberapa hooks routing react: useHistory, useLocation, useParams, useRouteMatch.
- useHistory memberi kita akses ke instance riwayat yang dapat digunakan untuk bernavigasi.
- useParams mengembalikan objek pasangan kunci/nilai parameter URL. useParams digunakan untuk mengakses match.params dari <Route> saat ini.
- useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.