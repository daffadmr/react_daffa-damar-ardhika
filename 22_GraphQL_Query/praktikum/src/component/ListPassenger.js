import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';
import { GetPassengers, GetPassengerById } from "../config/query"
const ListPassenger = () => {
    const { data, loading, error, refetch } = useQuery(GetPassengers);

    const [GetPassengersById, { loading: passengerByIdLoading, error: passengerByIdError, data: passengerByIdData }] = useLazyQuery(GetPassengerById);

    const [passengerId, setPassengerId] = useState("")

    const onChangePassengerId = (e) => {
        if (e.target) {
            setPassengerId(e.target.value)
            console.log(e.target.value)
        }
    }

    const handleChangePassengerById = (e) => {
        e.preventDefault();
        if (!passengerId) {
            alert("Masukan input")
        } else {
            GetPassengersById({
                variables: {
                    id: passengerId,
                },
            });
        }
    };

    if (loading || passengerByIdLoading) return <p>Loading...</p>;
    if (error || passengerByIdError) return <p>Error :(</p>;
    return (
        <div>
            <form>
                <label>
                    Input Id Pelanggan
                    <input
                        type="text"
                        value={passengerId}
                        onChange={onChangePassengerId}
                        style={{ margin: 20 }}
                    />
                </label>
                <button onClick={handleChangePassengerById}>Cari</button>
                <button onClick={refetch}>Reset</button>
            </form>

            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead>
                    <tr bgcolor="red">
                        <td>Nama</td>
                        <td>Umur</td>
                        <td>Jenis Kelamin</td>
                        <td bgcolor="white" className="removeBorder"></td>
                    </tr>
                </thead>
                <tbody>
                    {passengerByIdData ? passengerByIdData.passenger.map(({ id, nama, umur, jenis_kelamin }) => (
                        <tr key={id}>
                            <td>{nama}</td>
                            <td>{umur}</td>
                            <td>{jenis_kelamin}</td>
                        </tr>
                    )
                    ) : data.passenger.map(({ id, nama, umur, jenis_kelamin }) => (
                        <tr key={id}>
                            <td>{nama}</td>
                            <td>{umur}</td>
                            <td>{jenis_kelamin}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;