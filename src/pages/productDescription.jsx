import axios from 'axios';
import { useState , useEffect , useContext } from 'react';
import { MyContext } from '../App';
import {detail} from './productList';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import Carousel from '../components/carousel.jsx';







export default function ProductDescriptionPage(){

const{posts, isLoading } = useContext(MyContext);
const[load, setLoad] = useState(true);
const[fullInfo , setFullInfo] = useState([]);
let pages = useNavigate();
let pokeNum = localStorage.getItem('pokeNum');

useEffect(()=>{ 

  if(!isLoading && posts.results!=null){ 
  let url = posts.results[pokeNum].url;
   const getFullInfo = axios.create({
  baseURL: url});
   getFullInfo.get().then((response) => {
    setLoad(false);
    setFullInfo(response.data);      
 })
 ;
 

 }},[isLoading , posts]);


if(load && isLoading){
    return(
      
    <div><h2>Loading....</h2></div>
    );
} 


let keyNumber = Number(pokeNum)+1;
let imgNumber = '00'+keyNumber;
let abilities = fullInfo['abilities']?.map((ability)=> console.log(ability.ability.name));
let imgSource1 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+imgNumber.substr(imgNumber.length-3)+'.png';
const movePrevious = ()=>{
  pages('/');
  
}
   
   
    
    return(

       
      <div className = "mainPDPDiv" >
         
<div className = "container-fluid">
  <div className = "row flex d-flex justify-content-center align-items-center">
<div className ="col-md-6 col-12">
  <div className= 'pokeDetails'>
    <div className='text-center pokeName'>
      <h1>{posts.results[pokeNum].name.toUpperCase()}</h1>
    </div>
    <br></br>
 <div className = "container-info d-flex flex-wrap my-4">
  <div className = "abilitiesInfo">
    <div>
    <h4>Height</h4>
    </div>
    
    <p>{fullInfo.height} meter</p>
    
  </div>
  <hr className = "breakLine"/>
  <div className = "abilitiesInfo">
    <div>
  <h4>Weight</h4>
  </div>
  <p>{fullInfo.weight} kg</p>
  </div>
  <hr className = "breakLine"/>
  <div className = "abilitiesInfo">
    <div>
  <h4>Abilities</h4>
  </div>
  <p>{fullInfo['abilities']?.map((ability)=> {return ( ability.ability.name+'  ');})}</p>
  </div>
  <hr className = "breakLine"/>
  <div className = "abilitiesInfo">
    <div>
  <h4>Base Experience</h4>
  </div>
  <p>{fullInfo.base_experience} years</p>
  </div>

 </div>


</div>
    
      </div>

    <div className = "col-md-4 col-12">
     
      
<div className= "slicky-slide">
    <img className = "upDownAnimation" src = {imgSource1}/>
    <div className= 'button'>
 <button className = "backButton" onClick = {movePrevious}>Go Back</button>
</div>
    {/* <Carousel url = {fullInfo?.forms?.[0].url}/> */}
 </div>

  
  

    </div>

    

        
    {/* <div className = "col-md-6 col-12">
      <div className = "container-card">
      <div className='text-center'>
<h4>Name here</h4>
    </div>

    <figure className = 'container-card-img container-grass'>

      <img className = 'animation-up-down' alt = 'pic' src = {imgSource1}/>
    </figure>
<h4>Carousel here</h4>
    </div>
      </div> */}



    </div>
    
  </div>
</div>


         /* <img src = {fullInfo.sprites?.back_shiny}/>
       <img src = {imgSource1} alt = "poke"/>
     
    
       <div>
       <h5 >{posts.results[pokeNum].name.toUpperCase()}</h5>
       <h4>Weight : {fullInfo.weight} </h4>
       <h5>Abitilities</h5>
       <ul>
        {fullInfo['abilities']?.map((ability , index)=> {return(<li key={index}>{ability.ability.name}</li>);})}
       
        
       </ul>
      
       </div>
     
     
     
     
      */
      // </div>
      
    );
}