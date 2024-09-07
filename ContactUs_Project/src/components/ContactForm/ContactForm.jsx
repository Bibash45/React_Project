import React, { useReducer, useState } from "react";
import s from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from "../Button/Button";

const initialState = {
  Name: "",
  Email: "",
  Text: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.payload.key]: action.payload.value };
    case "SUBMIT":
      return initialState; // Clear form after submission
    default:
      return state;
  }
}

const ContactForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", payload: { key: name, value } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedData = [...data,formState]
    setData(updatedData);
    console.log("submitted data",data );
    dispatch({ type: "SUBMIT" });
  }
  return (
    <section className={`${s.container}`}>
      <div className={s.contact_form}>
        <div className={s.top_button}>
          <Button
            onClick={() => console.log("Via support chat")}
            className="primary_btn"
            text="Via support chat"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={() => console.log("Via call")}
            className="primary_btn"
            text="Via call"
            icon={<IoCall fontSize="24px" />}
          />
        </div>
        <Button
          onClick={() => console.log("Via email form")}
          className="outline_btn"
          text="Via email form"
          icon={<MdEmail fontSize="24px" />}
        />
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="Name" id="name" onChange={handleChange} value={formState.Name} />
          </div>
          <div className={s.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" id="email" onChange={handleChange} value={formState.Email} />
          </div>
          <div className={s.form_control}>
            <label htmlFor="area">Text</label>
            <textarea name="Text" id="area" rows="12" onChange={handleChange} value={formState.Text}></textarea>
          </div>
          <div className={s.end_button}>
            <Button type="submit" onClick={()=>console.log("Submit")} className="submit_btn" text="Submit" />
          </div>
        </form>
      </div>
      <div className={s.contactImage}>
        <img src="/images/contact.svg" alt="Contact" />
      </div>
      <div>
        <h2>Submitted Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};

export default ContactForm;
