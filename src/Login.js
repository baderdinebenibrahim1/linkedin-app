import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'
function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [profilPic, setProfilPic] = useState()
    const dispatch = useDispatch()
    const register = () => {
        if(!name) {
            return alert('Please enter a full name')
        }
       auth.createUserWithEmailAndPassword(email, password)
       .then((userAuth) =>{
           userAuth.user.updateProfile({
               displayName:name,
               photoUrl: profilPic,
           })
       .then(() => {
           dispatch(
               login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilPic
           }))
       })    
       }).catch(error => alert(error))
    }
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.username,
                photoUrl: userAuth.photoUrl,                
            }))
        }).catch(error => alert(error))
    }
    return (
        <div className="login">
            <img 
               src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
               alt="linkedin brind name" 
            />
            <form>
               <input placeholder="Full name (required if registering)" value={name} onChange={(e) => setName(e.target.value)} type="text" />
               <input placeholder="Profile pic URL (optional" value={profilPic} onChange={(e) => setProfilPic(e.target.value)}  type="text" />
               <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
               <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

               <button type="submit" onClick={loginToApp}>Sign In</button>
               <p>Not a member?{" "}
                   <span className="login__register" onClick={register}>Register Now</span>
               </p>
            </form>
        </div>
    )
}

export default Login
