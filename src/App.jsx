import './App.css';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter, Routes, Route , useNavigate } from "react-router-dom";

import ProductList from './pages/productList.jsx';
import ProductDescription from './pages/productDescription.jsx';
import { useState , useEffect  ,  useContext, createContext} from 'react';



const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
});


export const MyContext = createContext();
function App() {

 


  
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const[pass , setPass] = useState('Gayu');
  useEffect(() => {
    client.get().then((response) => {
       setPosts(response.data);
       setLoading(false);
    });
 }, []);

  

  return (
    <>

<MyContext.Provider value={{ posts,  isLoading , pass}}>  


         <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProductList/>}/>
        {/* <Route index element={<ProductList />}/> */}
        <Route path='/details' element={<ProductDescription/>}/>      
      </Routes>
      </BrowserRouter>

 
    
      </MyContext.Provider>

    </>
  )
}

export default App
