import './App.css';
import react, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import reducer from './reducer';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      } else {
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    })
  
  }, [])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "login" element = {<Login />} /> 
          <Route path= "checkout" element = {<Checkout />} />
          <Route path="/" element = {<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
