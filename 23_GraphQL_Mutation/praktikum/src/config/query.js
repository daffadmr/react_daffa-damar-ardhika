import { gql } from "@apollo/client";

export const GetPassengerById = gql`
query MyQuery($id: Int) {
    passenger(where: { id: { _eq: $id } }) {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;
export const GetPassengers = gql`
query GetPassengers {
  passenger {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;
export const createPassenger = gql`
mutation MyMutation($jenis_kelamin: String, $nama: String, $umur: Int) {
  insert_passenger(objects: {nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}) {
    returning {
      id
      jenis_kelamin
      nama
      umur
    }
  }
}
`

export const deletePassengerById = gql`
mutation MyMutation($id: Int) {
  delete_passenger(where: {id: {_eq: $id}}) {
    returning {
      id
      jenis_kelamin
      nama
      umur
    }
  }
}
`
export const updatePassengerById = gql`
mutation MyMutation($id: Int, $nama: String, $umur: Int, $jenis_kelamin: String) {
  update_passenger(
    where: { id: { _eq: $id } }
    _set: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin}
  ) {
    returning {
      id
      nama
      umur
      jenis_kelamin
    }
  }
}
`;