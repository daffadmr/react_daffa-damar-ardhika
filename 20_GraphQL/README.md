## Summary
- GraphQL merupakan bahasa query untuk API dan server-side runtime untuk mengeksekusi query dengan menggunakan tipe sistem yang ingin ditetapkan pada data. GraphQL dapat meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan GraphQL dapat menggunakan hanya satu endpoint saja yaitu /graphQL untuk setiap request yang diperlukan.
- Dalam GraphQL ada 3 fitur utama: Query, Mutation, dan Subscription.
- Query digunakan untuk mendapatkan atau get data berdasarkan query tertentu yang didefinisikan.
- Mutation digunakan untuk melakukan insert, update, dan delete data.
- Subscription digunakan untuk mendapatkan data dengan tanggal terbaru secara realtime atau berdasarkan event.

##### 3 Fitur Utama Graphql
1. Query
```graphql
{
  hero {
    name
    friends {
      name
    }
  }
}
```
akan me-return
```graphql
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```
2. Mutation
```graphql
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```
Dengan query variables
```grapqhl
{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}
```
Akan me-return
```graphql
{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}
```
3. Subscription
```graphql
subscription {
  newUser {
    name
    username
  }
}
```

### Hasil Essay
##### Hasil query getTrueStatus
![get-true-status](./screenshot_praktikum/hasil_getTrueStatus.png)
\
##### Hasil mutation insertNilaiAnggaToKeterangan
![insert-nilai-angga-1](./screenshot_praktikum/hasil_insertNilaiAnggaToKeterangan_1.png)
\
![insert-nilai-angga-2](./screenshot_praktikum/hasil_insertNilaiAnggaToKeterangan_2.png)
\
##### Hasil mutation ubah status menjadi true
![update-status-to-true](./screenshot_praktikum/hasil_updateStatusToTrue.png)