import classes from "../components/Form.module.css";
import { useState } from "react";

const Form = (props) => {
  const [Inputs, setInputs] = useState({
    fname: "",
    lname: "",
    pob: "",
    dob: "",
    phone: "",
    addresso: "",
    addresst: "",
  });
  const [Error, setError] = useState({
    fname: "",
    lname: "",
    pob: "",
    dob: "",
    phone: "",
    addresso: "",
    addresst: "",
  });

  const ChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  const Submithandler = (event) => {
    event.preventDefault();
    const generateId = () => {
      return Math.floor(Math.random() * 100000);
    };

    const list = {
      id: generateId(),
      fname: Inputs.fname,
      lname: Inputs.lname,
      addresso: Inputs.addresso,
      addresst: Inputs.addresst,
      place: Inputs.pob,
      phone: Inputs.phone,
      date: Inputs.dob,
    };
    const { fname, lname, phone, pob, dob, addresso, addresst } = Inputs;
    const newError = {};

    if (!fname) {
      newError.fname = "First name is required";
    } else if (fname.length < 3) {
      newError.fname =
        "First Name is too short! Please enter at least 2 characters.";
    }
    if (!lname) {
      newError.lname = "last name is required";
    } else if (lname.length < 3) {
      newError.lname =
        "last Name is too short! Please enter at least 2 characters.";
    }
    if (!pob) {
      newError.pob = "place of birth is required";
    } else if (pob.length < 3) {
      newError.pob =
        "place of birth is too short! Please enter at least 2 characters.";
    }
    if (!dob) {
      newError.dob = "Date of birth is required";
    } else {
      const today = new Date();
      const selectedDate = new Date(dob);

      if (selectedDate > today) {
        newError.dob = "Birth date cannot be a future date";
      }
    }
    if (!phone) {
      newError.phone = "Phone number is required";
    } else if (phone.length !== 10) {
      newError.phone = "phone number should only be of length 10.";
    }
    if (!addresso) {
      newError.addresso = "Address line 1 is required";
    } else if (pob.length < 5) {
      newError.addresso =
        "Address line1 is too short! Please enter at least 2 characters.";
    }
    if (!addresst) {
      newError.addresst = "Address line 2 is required";
    } else if (pob.length < 5) {
      newError.addresst =
        "Address line2 is too short! Please enter at least 2 characters.";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      props.onSave([list]);
    }

    setInputs({
      fname: "",
      lname: "",
      pob: "",
      dob: "",
      phone: "",
      addresso: "",
      addresst: "",
    });
  };

  return (
    <form className={classes.form} onSubmit={Submithandler}>
      <div>
        <h5>First name</h5>
        <input
          type="text"
          name="fname"
          placeholder="enter your first name"
          value={Inputs.fname}
          onChange={ChangeHandler}
        />
      </div>
      {Error.fname && <span>* {Error.fname}</span>}
      <div>
        {" "}
        <h5>Last name</h5>
        <input
          type="text"
          name="lname"
          placeholder="enter your last name"
          value={Inputs.lname}
          onChange={ChangeHandler}
        />
      </div>
      {Error.lname && <span>* {Error.lname}</span>}
      <div>
        {" "}
        <h5>Phone number</h5>
        <input
          type="number"
          name="phone"
          placeholder="enter your phone number"
          value={Inputs.phone}
          onChange={ChangeHandler}
        />
      </div>
      {Error.phone && <span>* {Error.phone}</span>}
      <div>
        {" "}
        <h5>Date of birth</h5>
        <input
          type="date"
          name="dob"
          placeholder="enter your date of birth"
          value={Inputs.dob}
          onChange={ChangeHandler}
        />
      </div>
      {Error.dob && <span>* {Error.dob}</span>}
      <div>
        {" "}
        <h5>Place of birth</h5>
        <input
          type="text"
          name="pob"
          placeholder="enter your place of birth"
          value={Inputs.pob}
          onChange={ChangeHandler}
        />
      </div>
      {Error.pob && <span>* {Error.pob}</span>}
      <div>
        <h5>Address line 1</h5>
        <textarea
          name="addresso"
          placeholder="enter your address"
          value={Inputs.addresso}
          onChange={ChangeHandler}
        ></textarea>
      </div>
      {Error.addresso && <span>* {Error.addresso}</span>}
      <div>
        {" "}
        <h5>Address line 2</h5>
        <textarea
          name="addresst"
          placeholder="enter your address"
          value={Inputs.addresst}
          onChange={ChangeHandler}
        ></textarea>
      </div>
      {Error.addresst && <span>* {Error.addresst}</span>}

      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
