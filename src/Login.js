import React, { useState } from 'react'
import './Login.css'
import logo from './assets/logo.png'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch=useDispatch();

    const register=()=>{
        if(!name){
            return alert("Please enter a full name");
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then((userAuth)=>{
             updateProfile(userAuth.user,{
                displayName:name,
                photoURL:profilePic
            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic
                }))
            })
        })
        .catch((e)=>alert(e.message))
    }
    const loginToApp=(e)=>{
        e.preventDefault();

        signInWithEmailAndPassword(auth,email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            }))
        })
        .catch((e)=>alert(e))

    }
  return (
    <div className='login'>
        <img src={logo} alt="LinkedIn" />

        <form>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full name' type="text" />

            <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} placeholder='Profile Pic URL (optional)' type="text" />

            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="email" />

            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password" />


            <button onClick={loginToApp} type='submit'>SignIn</button>
        </form>

        <p>Not a member? <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login