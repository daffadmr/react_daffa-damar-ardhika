# Clean Code

## Summary
"Clean code" merupakan istilah untuk kode yang mudah dibaca, dipahami, dan diubah oleh programmer.
### Kenapa "Clean Code"
- "Clean code" digunakan agar kolaborasi berjalan dengan lancar
- "Clean code" digunakan agar ketika membuat fitur baru, kita tahu bagaimana suatu fungsi akan bekerja
### Prinsip "Clean Code" - KISS (Keep It So Simple)
Hindari pembuatan fungsi yang dibuat untuk berbagai macam hal, misal: Sebuah fungsi untuk melakukan A, lalu fungsi ini juga bisa memodifikasi B, mengecek fungsi C, dsb.\
Maka dari itu:
- Fungsi dibuat hanya untuk satu tugas saja
- Gunakan sedikit argumen untuk satu fungsi
- Perhatikan fungsi untuk mencapai kondisi yang seimbang, kecil, dan jumlahnya minimal.

### Refactoring
Refractoring merupakan proses restrukturisasi kode yang dibuat dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.