/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormCoding from "./FormCoding";

describe("FormCoding", () => {
  it("Should Render Form Components", () => {
    render(<FormCoding />);

    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();

    const labelNama = screen.getByText(/Nama Lengkap/);
    expect(labelNama).toBeInTheDocument();

    const labelEmail = screen.getByText(/Email/);
    expect(labelEmail).toBeInTheDocument();

    const labelHandphone = screen.getByText(/No Handphone/);
    expect(labelHandphone).toBeInTheDocument();

    const labelPendidikan = screen.getByText(/Latar Belakang Pendidikan/);
    expect(labelPendidikan).toBeInTheDocument();

    const labelKelas = screen.getByText(/Kelas Coding yang Dipilih/);
    expect(labelKelas).toBeInTheDocument();

    const labelFoto = screen.getByText(/Foto Surat Kesungguhan/);
    expect(labelFoto).toBeInTheDocument();

    const labelHarapan = screen.getByText(/Harapan Untuk Coding Bootcamp Ini/);
    expect(labelHarapan).toBeInTheDocument();
  });

  it("Should Render Form Input", () => {
    render(<FormCoding />);
    const inputNama = screen.getByRole("textbox", { name: /nama/i });
    const inputEmail = screen.getByRole("textbox", { name: /email/i });
    const inputHandphone = screen.getByRole("spinbutton", {
      name: /no handphone/i,
    });
    const inputLatar = screen.getByRole("radio", { name: /pendidikan/i });
    const inputKelas = screen.getByRole("combobox", { name: /kelas/i });

    fireEvent.input(inputNama, {
      target: { value: "test" },
    });

    fireEvent.input(inputEmail, {
      target: { value: "test@mail.com" },
    });

    fireEvent.input(inputHandphone, {
      target: { value: "085157022076" },
    });

    fireEvent.change(inputLatar);
    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    userEvent.selectOptions(inputKelas, "reactjs");

    expect(inputNama).toHaveDisplayValue("test");
    expect(inputEmail).toHaveValue("test@mail.com");
    expect(inputHandphone).toHaveDisplayValue("085157022076");
    expect(inputLatar).toBeChecked();
    expect(inputKelas).toHaveValue("reactjs");
  });

  it("Should reset after submit", () => {
    render(<FormCoding />);

    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByRole("textbox", { name: /nama/i })).toHaveDisplayValue(
      ""
    );
    expect(screen.getByRole("textbox", { name: /email/i })).toHaveDisplayValue(
      ""
    );
    expect(
      screen.getByRole("spinbutton", { name: /no handphone/i })
    ).toHaveDisplayValue("");
    expect(screen.getByText(/Latar Belakang Pendidikan/)).not.toBeChecked();
    expect(screen.getByRole("combobox", { name: /kelas/i })).toHaveDisplayValue(
      "Pilih Salah Satu Program"
    );

    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it("Should reset after reset", () => {
    render(<FormCoding />);

    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByRole("textbox", { name: /nama/i })).toHaveDisplayValue(
      ""
    );
    expect(screen.getByRole("textbox", { name: /email/i })).toHaveDisplayValue(
      ""
    );
    expect(
      screen.getByRole("spinbutton", { name: /no handphone/i })
    ).toHaveDisplayValue("");
    expect(screen.getByText(/Latar Belakang Pendidikan/)).not.toBeChecked();
    expect(screen.getByRole("combobox", { name: /kelas/i })).toHaveDisplayValue(
      "Pilih Salah Satu Program"
    );
  });

  it("Should error when submit", () => {
    render(<FormCoding />);
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    const inputNama = screen.getByRole("textbox", { name: /nama/i });
    const inputEmail = screen.getByRole("textbox", { name: /email/i });
    const inputHandphone = screen.getByRole("spinbutton", {
      name: /no handphone/i,
    });
    const inputLatar = screen.getByRole("radio", { name: /pendidikan/i });
    const inputKelas = screen.getByRole("combobox", { name: /kelas/i });

    userEvent.selectOptions(inputKelas, "reactjs");

    fireEvent.input(inputNama, {
      target: { value: "daffa123" },
    });

    fireEvent.input(inputEmail, {
      target: { value: "test@mail.com" },
    });

    fireEvent.input(inputHandphone, {
      target: { value: "0851570" },
    });

    fireEvent.change(inputLatar);
    
    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    fireEvent.click(screen.getByText("Submit"));

    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it("Should error when input", () => {
    render(<FormCoding />);
    const inputNama = screen.getByRole("textbox", { name: /nama/i });
    const inputEmail = screen.getByRole("textbox", { name: /email/i });
    const inputHandphone = screen.getByRole("spinbutton", {
      name: /no handphone/i,
    });
    // Test for alert if data invalid

    fireEvent.input(inputNama, {
      target: { value: "DAaffa100" },
    });

    fireEvent.input(inputEmail, {
      target: { value: "test.com" },
    });

    fireEvent.input(inputHandphone, {
      target: { value: "085157" },
    });

    expect(inputNama).toHaveValue("DAaffa100");
    expect(inputEmail).toHaveValue("test.com");
    expect(inputHandphone).toHaveDisplayValue("085157");

    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });
});
