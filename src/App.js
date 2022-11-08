// import logo from './logo.svg';
import './App.css';
import Header from './header';
// import Login from './login';
import Body from './body';
import Menu from './Menu/menu';
import Dal from './Dal/dal';
import Atta from './Atta/atta';
// import DalList from './Dal/dalList';
import {Routes,Route} from 'react-router-dom';
import AppContext from './context';
import {useState} from 'react';
import CartItem from './Cart/cartList';
import Oil from './Oil/oil';
import Sugar from './Sugar/sugar';
import Login from './login/login';


function App() {
  const [cart, setCart]= useState([]);
  const addCart=(a)=>{
    setCart((prev)=>{
      return [a,...prev];
    })
  }

  const admin = {
    email: "muthubalaji1998@gmail.com",
    password: "muthu456"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = (userdata) => {
    if (userdata.email == admin.email && userdata.password == admin.password) {
      setUser({
        name: userdata.name,
        email: userdata.email
      });
    }
    else {
      setError("Please fill the data")
    }

  }

  return (
    <div className="App">
      <AppContext.Provider value={{cart, addCart}}>
        <Header/>
        <Body/>
      {(user.email !="")?(<div><Menu></Menu></div>
        ):(<Login login={login} error={error}></Login>)}
      {/* <Header></Header> */}
      {/* <Body></Body> */}
      {/* <Menu></Menu> */}
      <Routes>
        {/* <Route index element={<Menu></Menu>}> */}
        {/* <Route index element={<Login></Login>}> */}
        {/* </Route> */}
        <Route path='/DalsPulses' element={ <Dal></Dal>}></Route>
        <Route path='/AttaFlour' element={ <Atta></Atta>}></Route>
        <Route path='/EdibleOils' element={ <Oil></Oil>}></Route>
        <Route path='/SaltSugarJaggery' element={ <Sugar></Sugar>}></Route>
        <Route path='/cart' element={<CartItem/>}></Route>
      </Routes>
      </AppContext.Provider>

     
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
