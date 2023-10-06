// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";
import axios from 'axios';
import {useState , useEffect , createContext  ,useContext} from 'react';
import {useNavigate , Link} from 'react-router-dom';
import {MyContext} from '../App.jsx';
import pokeCard from "../assets/poke.jpg"
import backGround from "../assets/backGround.jpg";




 export const detail = createContext(); 
export default function ProductList(){


  let pages = useNavigate();
       const{posts ,  isLoading } = useContext(MyContext);
   
      
    
  const moveToNextPage = (key)=>{
 
    localStorage.setItem('pokeNum', key);
    pages("/details");


  }
    let keyNumber = 0;

 
    
    if(isLoading){
        return(
            <div >Loading....</div>
        )
    }
    return (

<div className = " mainDiv">
      
     
        
         
      
       
        <br></br>

        
        <div className="card-groups container">
        <br></br>
<div className = "row ">
  {posts.results.map((info , key)=> {
    // console.log(posts);
    keyNumber+=1;
    let imgNumber = '00'+keyNumber;
    let imgSource = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+imgNumber.substr(imgNumber.length-3)+'.png';
    return(




      
  <div key = {key}  className="col-12 col-sm-6 col-md-6 col-lg-3  mb-5"  onClick = {()=>{moveToNextPage(key)}}>
      <div className = "card">
        <div className = 'card-inner' >
        <div className = 'card-front'>
   
    <img className="card-img-top" src={imgSource} alt="Card image cap" />
   
   
    <div className="card-body">
      <h5 className="card-title">{info.name.toUpperCase()}</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
    </div>
    {/* <div className="card-footer">
      <h5 className="card-title">{info.name.toUpperCase()}</h5>
    </div> */}
 
  </div>
  <div className = "card-back m-2">
    {/* <h3>Gayu...</h3>
    <h1>gayu</h1> */}
    <img className = "pokeImage " src = {pokeCard}/>
    </div>
  </div>
  </div>
  </div>
  
  


  );
  
})}
  </div>
  <br></br>
</div>
        
        {/* <Card>
            <CardContent>Poke1</CardContent>
            <CardActions><Button >View More</Button></CardActions>
        </Card> */}
<br></br>

        </div>




        /* Tryyy
        <main className="z-1 flex h-full flex-grow flex-col justify-between bg-gray-500 bg-opacity-60 backdrop-filter dark:bg-gray-900 dark:bg-opacity-60">

<section className="d-flex flex-grow flex-col items-center sm:px-[9.8vh]">
<div className ="d-flex h-full w-full flex-col items-center border-x ">
<div className="mt-5 d-flex  flex-wrap justify-center overflow-y-scroll scrollbar-hide">
 
 
 
 <div className=" every-card m-5 flex  w-[14rem] flex-col items-center justify-center rounded-2xl bg-neutral-300 bg-opacity-50 px-3 py-2 shadow-xl shadow-neutral-500 backdrop-blur-sm backdrop-filter bg-neutral-500 dark:bg-opacity-50 shadow-neutral-900">
 
 
 
 <div className="mb-1 d-flex w-full flex-row justify-between">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5 transform cursor-pointer text-blue-700 transition-all duration-300 ease-in-out hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.01 2c-1.93 0-3.5 1.57-3.5 3.5 0 1.58 1.06 2.903 2.5 3.337v7.16c-.001.179.027 1.781 1.174 2.931C6.892 19.64 7.84 20 9 20v2l4-3-4-3v2c-1.823 0-1.984-1.534-1.99-2V8.837c1.44-.434 2.5-1.757 2.5-3.337 0-1.93-1.571-3.5-3.5-3.5zm0 5c-.827 0-1.5-.673-1.5-1.5S5.183 4 6.01 4s1.5.673 1.5 1.5S6.837 7 6.01 7zm13 8.163V7.997C19.005 6.391 17.933 4 15 4V2l-4 3 4 3V6c1.829 0 2.001 1.539 2.01 2v7.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337zm-1 4.837c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"></path>
  </svg>
</div> 

<div className="Drop-shadow">
<img alt="bulbasaur" loading="lazy" width="170" height="170" decoding="async" data-nimg="1" className="cursor-pointer" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
</div>
<h3 className="w-11/12 truncate text-center text-xl font-extrabold">BULBASAUR</h3>
</div>


</div>
</div>
</section>


        </main> */
       
      
      
    );
}