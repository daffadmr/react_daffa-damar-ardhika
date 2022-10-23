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