
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Homme from './Homme';
import { Routes , Route} from "react-router-dom"
import Login from './Login';
import SeeAll from './SeeAll';
import Nav from './Nav';
// import Payment from './Payment';
// import { loadStripe } from '@stripe/stripe-js'
// import  { Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';



function App() {

  const [{ }, dispatch] = useStateValue()
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
         dispatch({
          type: 'SET_USER',
          user: null,
        })

      }
    })
  }, [])
  return (
    <div className="App">
      {/* <Header />
      <Homme /> */}
      <Routes> 
        <Route path='/seeall' element={<> <Header/>< SeeAll /> </>} />
        <Route path='/login' element={< Login />} />
         <Route path='/orders' element={<> <Header/>< Orders /> </>} />
        <Route path='/payment' element={<> <Header/>
          {/* <Elements stripe={promise}>
            < Payment />
          </Elements>  */}
        </>} />
        <Route path='/' element={<><Header/> <Nav /> <  Homme /></> } />
        <Route path='/checkout' element={<><Header/> <  Checkout /></>} />
    </Routes>
  
  
    </div>
  );
}

export default App;
