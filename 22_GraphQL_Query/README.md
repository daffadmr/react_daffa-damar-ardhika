## Summary
- Apollo Client merupakan komprehensif state management library untuk JavaScript yang memungkinkan kita mengelola data lokal dan remote dengan GraphQL. Apollo client digunakan untuk fetch, caching, dan memodifikasi data aplikasi  sekaligus memperbarui UI secara otomatis.
- Apollo Client membantu kita menyusun code dengan cara yang ekonomis, predictable, dan deklaratif yang konsisten dengan praktik modern development. Core library @apollo/client menyediakan integrasi bawaan dengan React, dan komunitas Apollo yang lebih besar mempertahankan integrasi untuk lapisan tampilan populer lainnya.
- Terdapat 2 macam hooks untuk query: useQuery dan useLazyQuery
- useQuery merupakan hooks yang digunakan untuk memanggil query yang sudah dibuat sebelumnya. useQuery me-*return* beberapa value, antara lain:
		- loading
		- error
		- data
		- previousData
		- refetch
		- networkStatus
		- variables
		- client
		- called
		- fetchMore
		- startPolling
		- subscribeToMore
		- updateQuery
- useLazyQuery merupakan hooks yang digunakan untuk memanggil query, namun bedanya dari useQuery adalah useLazyQuery hanya akan melakukan query jika suatu kondisi terpenuhi. kondisi ini ditentukan sendiri oleh engineer (biasanya berupa event listener). value yang di-*return* useLazyQuery:
		- execute function
		- loading
		- error
		- data
		- previousData
		- refetch
		- networkStatus
		- variables
		- client
		- called
		- fetchMore
		- startPolling
		- subscribeToMore
		- updateQuery

#### Hasil Praktikum
Get All Passenger
![getPassenger](./screenshot_praktikum/getPassenger.png)

Get Passenger by Id
![getPassengerById](./screenshot_praktikum/getPassengerById.png)
