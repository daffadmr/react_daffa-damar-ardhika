import React, { useState } from "react";
import { useRef } from "react";

const Form = () => {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const baseError = {
    name: "",
    email: "",
    noHandphone: "",
  };

  const [data, setData] = useState(baseData);
  
  const suratKesungguhan = useRef(null);
  
  const [errorMessage, setErrorMessage] = useState(baseError);

  const [disableButton, setDisableButton] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });

    validation(name, value);
  };

  const validation = (name, value) => {
    const noHandphoneRegex = new RegExp(/[0-9]/g);
    const namaRegex = new RegExp(/^[a-z ,.'-]+$/i);
    const emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (name === "nama") {
      if (value.match(namaRegex) || value === "") {
        setErrorMessage({ ...errorMessage, nama: "" });
        if (errorMessage.email === "" && errorMessage.noHandphone === "") {
          setDisableButton(false);
        }
      } else {
        setErrorMessage({ ...errorMessage, nama: "Nama tidak sesuai" });
        setDisableButton(true);
      }
    }

    if (name === "email") {
      if (value.match(emailRegex) || value === "") {
        setErrorMessage({ ...errorMessage, email: "" });
        if (errorMessage.nama === "" && errorMessage.noHandphone === "") {
          setDisableButton(false);
        }
      } else {
        setErrorMessage({ ...errorMessage, email: "Email tidak sesuai" });
        setDisableButton(true);
      }
    }

    if (name === "noHandphone") {
      if (value.match(noHandphoneRegex) || value === "") {
        setErrorMessage({ ...errorMessage, noHandphone: "" });
        if (errorMessage.nama === "" && errorMessage.email === "") {
          setDisableButton(false);
        }
      } else {
        setErrorMessage({
          ...errorMessage,
          noHandphone: "Nomor HP tidak sesuai",
        });
        setDisableButton(true);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data dengan nama "${data.nama}" berhasil disubmit`);
    setData(baseData);
    suratKesungguhan.current.value = "";
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData(baseData);
    suratKesungguhan.current.value = "";
  };

  return (
    <div className="form-utama">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nama">
          <p>
            Nama Lengkap
            <span className="error-message">{errorMessage.nama}</span>
          </p>
          <input
            type="text"
            id="nama"
            name="nama"
            value={data.nama}
            onChange={handleChange}
            minLength="5"
            required
          />
        </label>
        <label htmlFor="email">
          <p>
            Email
            <span className="error-message">{errorMessage.email}</span>
          </p>
          <input
            type="text"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="noHandphone">
          <p>
            No Handphone
            <span className="error-message">{errorMessage.noHandphone}</span>
          </p>
          <input
            type="text"
            id="noHandphone"
            name="noHandphone"
            value={data.noHandphone}
            onChange={handleChange}
            minLength={9}
            maxLength={14}
            required
          />
        </label>
        <label htmlFor="pendidikan">
          <p>Latar Belakang Pendidikan</p>
          <div className="radio-group">
            <input
              type="radio"
              value="IT"
              checked={data.pendidikan === "IT"}
              name="pendidikan"
              onChange={handleChange}
              required
            />
            IT
          </div>
          <div className="radio-group">
            <input
              type="radio"
              value="Non IT"
              checked={data.pendidikan === "Non IT"}
              name="pendidikan"
              onChange={handleChange}
            />
            Non IT
          </div>
        </label>
        <label htmlFor="kelas">
          <p>Kelas Coding yang Dipilih</p>
          <select
            name="kelas"
            value={data.kelas}
            onChange={handleChange}
            id="kelas"
            required
          >
            <option value="">Pilih Salah Satu Program</option>
            <option value="Kelas Front-End">Kelas Front-End</option>
            <option value="Kelas Back-End">Kelas Back-End</option>
            <option value="Kelas Fullstack">Kelas Fullstack</option>
          </select>
        </label>
        <label htmlFor="">
          <p>Foto Surat Kesungguhan</p>
          <input type="file" ref={suratKesungguhan} required />
        </label>
        <label htmlFor="harapan">
          <p>
            Harapan Untuk Coding Bootcamp Ini <small>(Optional)</small>
          </p>
          <textarea
            id="harapan"
            name="harapan"
            value={data.harapan}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </label>
        <div className="error-message"></div>
        <div className="button-group">
          <button
            className="submit-button"
            type="submit"
            disabled={disableButton}
          >
            Submit
          </button>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
