import React, { useState, useReducer } from 'react';
import './Register.css';
import { Navigate, useNavigate } from "react-router-dom";

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: '',
  termsAccepted: false
};


function reducer(state:any, action:any) {
  if (action.name === 'termsAccepted') {
    //code checkbox
    return { ...state, termsAccepted: action.checked };
  } else {
    //code other inputs
    return { ...state, [action.name]: action.value };
  }
}

function validate(state:any) {
  return state.password === state.passwordRepeat && state.termsAccepted;
}

const Register = () => {
    const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function handleClick(e:any) {
    e.preventDefault();
    alert(`Hey ${state.name} you have successfully registered!`);
  }

  function onChange(e:any) {
   
    const { name, value, checked } = e.target;
    const action = { name, value, checked };
    dispatch(action);
  }

  return (
    <div className="wrapper">
      <h2 className="registerTitle">Register</h2>
      <form className="registerForm">
        <input
          className="textInput"
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChange}
        />
         <input
          className="textInput"
          type="text"
          name="ID"
          placeholder="ID"
          onChange={onChange}
        />
         <input
          className="textInput"
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
         <input
          className="textInput"
          type="number"
          name="Phone"
          placeholder="Phone"
          onChange={onChange}
        />
         <input
          className="textInput"
          type="text"
          name="Gender"
          placeholder="Gender"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="password"
          name="passwordRepeat"
          placeholder="Password repeat"
          onChange={onChange}
        />

        <label className="touCheckboxLabel">
          <input
            className="touCheckbox"
            type="checkbox"
            name="termsAccepted"
            onChange={onChange}
          />
          Please Accept Our Terms 
        </label>

        

        <button 
          
          className={!validate(state) ? 'disabled' : ''}
          onClick={(e)=>{
            handleClick(e)
            navigate('/Login')

          }}
          disabled={!validate(state)}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
