import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidbar from './Sidbar';
import { auth } from './firebase'
import Widgets from './Widgets';

function App() {
  
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.name,
          photoUrl: userAuth.profilPic   
        }))
      }else{
          dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="App">
      <Header />

      {!user ? ( <Login />
      ) : (
      <div className="app__body">
        <Sidbar />
        <Feed />
        <Widgets />
      </div>
      )}
    </div>
  );
}

export default App;
