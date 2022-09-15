# React Fundamental

## Summary
### JSX
- JSX merupakan singkatan dari Javascript XML, JSX merupakan ekstensi pada javascript.
- JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI.
- JSX merupakan Syntatic Sugar dari fungsi `React.createElement()`.
- Spesifikasi jenis elemen React: Menggunakan PascalCase pada Component, huruf kecil untuk komponen bawaan.
- Kita bisa menaruh ekspresi JS pada JSX dengan menggunakan kurung kurawal.
- JSX merupkan expression. Setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi javscript biasa dan menjadi objek javascript.

### React Component
- Komponen React merupakan bagian kode yang dapat digunakan untuk menentukan tampilan, behavior, dan state sebagian UI.
- Component pada javascript terbagi menjadi dua: Functional dan Class Component.
- Pada component, kita bisa menangani properti menggunakan `props`.

### React Lifecycle
- Lifecycle method yang umum pada react: render(), componentDidMount(), componentDidUpdate(), componentWillUnmount().
- `render()` merupakan fungsi yang paling sering dipakai. Fungsi ini wajib ada pada class component.
- `componentDidMount()` merupakan fungsi yang dipanggil ketika component sudah dirender untuk pertama kali. Tempat yang tepat untuk pemanggilan API.
- `componentDidUpdate` merupakan fungsi yang dipanggil ketika terjadi update pada props atau state.
- `componentWillUnmount` merupakan fungsi yang dipanggil ketika component akan dihancurkan/dilepas. Fungsi ini cocok untuk clean up actions.

### Condition and list
#### Render Bersyarat
- Render bersyarat: Kita dapat me-render hanya beberapa bagian saja dari component berdasarkan state dari aplikasi yang dibuat.
- Beberapa cara me-render bersyarat: Menggunakan if, inline if dengan operator &&, inline if-else dengan ternary operator.
#### Render List
- Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}
- Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.
- Kita bisa me-render list dengan menggunakan fungsi map() untuk mengambil data yang ada.