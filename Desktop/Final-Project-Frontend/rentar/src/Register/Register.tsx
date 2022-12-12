import React, { useState, useReducer } from 'react';
import './Register.css';
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react';

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
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const toast = useToast();
    
    const submitRegister = async () => {
        try {
          if (password !== password2) {
            toast({
              title: `You passwords doesn't match`,
              status: 'error',
              duration: 3000,
              position: 'top',
            });
            return;
          }
    
          const request = await fetch('/api/v1/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
          });
    
          const data = await request.json();
    
          if (request.status !== 201) {
            toast({
              title: data.message,
              status: 'error',
              duration: 3000,
              position: 'top',
            });
            return;
          }
    
          toast({
            title: data.message,
            status: 'success',
            duration: 3000,
            position: 'top',
          });
          navigate('/login');
        } catch (error) {
          toast({
            title: 'Server Error !',
            status: 'error',
            duration: 3000,
            position: 'top',
          });
        }
    };
    
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
          onChange={(e)=>{setName(e.target.value)}}
          value={name}
        />
         <input
          className="textInput"
          type="text"
          name="ID"
          placeholder="ID"
          onChange={(e)=>{setId(e.target.value)}}
          value={id}
        />
         <input
          className="textInput"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e)=>{setUsername(e.target.value)}}
          value={username}
        />

        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
        />
         <input
          className="textInput"
          type="number"
          name="Phone"
          placeholder="Phone"
          onChange={(e)=>{setPhone(e.target.value)}}
          value={phone}
        />
         <input
          className="textInput"
          type="text"
          name="Gender"
          placeholder="Gender"
          onChange={(e)=>{setGender(e.target.value)}}
          value={gender}
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}}
          value={password}
        />

        <input
          className="textInput"
          type="password"
          name="passwordRepeat"
          placeholder="Password repeat"
          onChange={(e)=>{setPassword2(e.target.value)}}
          value={password2}
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
            submitRegister()
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
