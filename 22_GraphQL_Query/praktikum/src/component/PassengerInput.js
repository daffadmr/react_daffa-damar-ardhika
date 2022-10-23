import { useState } from "react"
import "./Home.css"

function PassengerInput({tambahPengunjung}) {
  const [pengunjung, setPengunjung] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
  })
  
  const [editing, setEditing] = useState(true)

  const onChange = (e) => {
    setPengunjung({
      ...pengunjung,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    if (pengunjung.nama.trim() && pengunjung.umur && pengunjung.jenisKelamin) {
      const umur = pengunjung.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        const newData = {
          nama: pengunjung.nama,
          umur: pengunjung.umur,
          jenisKelamin: pengunjung.jenisKelamin,
        }
        tambahPengunjung(newData)
        setPengunjung({
          ...pengunjung,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        })
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  }

  const handleBukaInput = () => {
    setEditing(false)
  }

  const handleTutupInput = () => {
    setEditing(true)
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={pengunjung.nama} name="nama" onChange={onChange} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={pengunjung.umur} name="umur" onChange={onChange} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenisKelamin">
          <option value="Pria" defaultValue="Pria">
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput
