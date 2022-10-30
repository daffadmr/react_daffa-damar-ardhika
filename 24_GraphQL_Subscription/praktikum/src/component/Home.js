import { useMutation} from "@apollo/client"
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { createPassenger, deletePassengerById, updatePassengerById } from "../config/query";
import PassengerUpdate from "./PassengerUpdate";
import { useState } from "react";

const Home = () => {

    const [insertPassenger] = useMutation(createPassenger)
    const [deletePassenger] = useMutation(deletePassengerById)
    const [updatePassenger] = useMutation(updatePassengerById)

    const removePassenger = ids => {
        deletePassenger({
            variables: {
                id: ids,
            },
        });
    };

    const tambahPengunjung = newUser => {
        const newData = {
            ...newUser,
        };
        insertPassenger({
            variables: {
                nama: newData.nama,
                umur: newData.umur,
                jenis_kelamin: newData.jenisKelamin,
            },
        });
    };

    const [edit, setEdit] = useState({
        id: "",
        nama: "",
        jenisKelamin: "",
        umur: "",
    });

    const onClickEdit = (data) => {
        setEdit({
            id: data.id,
            nama: data.nama,
            jenisKelamin: data.jenis_kelamin,
            umur: data.umur
        });
    };

    const editPassenger = updateUser => {
        const editData = {
            ...updateUser,
        };
        updatePassenger({
            variables: {
                id: editData.id,
                nama: editData.nama,
                umur: editData.umur,
                jenis_kelamin: editData.jenisKelamin,
            },
        });
    }

    return (
        <div>
            <Header />
            <ListPassenger
                hapusPengunjung={removePassenger}
                editPassenger={editPassenger}
                onClickEdit={onClickEdit}
            />
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
            <PassengerUpdate edit={edit} editPassenger={editPassenger} />
        </div>
    )
}
export default Home;