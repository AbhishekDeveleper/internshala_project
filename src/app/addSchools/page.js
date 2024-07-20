"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState({
    name: "",
    state: "",
    city: "",
    contact: "",
    address: "",
    email_id: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const { name, state, city, email_id, address, contact } = data;

  const onChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email_id", email_id);
    formData.append("image", image);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("address", address);
    formData.append("contact", contact);

    try {
      const response = await axios.post(
        "https://school-project-4yw1.onrender.com/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Data submitted successfully");
      console.log(response.data);
    } catch (error) {
      setMessage("Error submitting data");
      console.error(error);
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={submit} className="submit_form">
        <input
          type="text"
          placeholder="Enter School Name..."
          name="name"
          id="name"
          value={name}
          className="submit_input"
          onChange={onChange}
          required
        />
        <input
          type="text"
          id="state"
          placeholder="Enter State..."
          name="state"
          value={state}
          className="submit_input"
          onChange={onChange}
          required
        />
        <input
          type="email"
          id="email_id"
          placeholder="Enter email..."
          name="email_id"
          value={email_id}
          className="submit_input"
          onChange={onChange}
          required
        />
        <input
          type="text"
          placeholder="Enter City Name..."
          name="city"
          id="city"
          value={city}
          className="submit_input"
          onChange={onChange}
          required
        />
        <input
          type="text"
          id="address"
          placeholder="Enter Address..."
          name="address"
          value={address}
          onChange={onChange}
          className="submit_input"
          required
        />
        <input
          type="text"
          placeholder="Enter 10 digit contact no."
          name="contact"
          id="contact"
          value={contact}
          onChange={onChange}
          className="submit_input"
          required
        />
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={onImageChange}
          className="submit_input"
          required
        />
        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Page;
