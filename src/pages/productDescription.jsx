import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';


export default function ProductDescriptionPage(){

const posts = useSelector(state=> state.posts);
const isLoading = useSelector(state=>state.isLoading);
const load = useSelector(state=> state.load);
const fullInfo = useSelector(state=> state.fullInfo);
const dispatch = useDispatch();
console.log(isLoading , posts)


let pages = useNavigate();
let pokeNum = localStorage.getItem('pokeNum');

// useEffect(()=>{ 
  
    
//     if(!isLoading && posts.results!=null){ 
//         let url = posts.results[pokeNum].url;
//         const getFullInfo = axios.create({
//         baseURL: url});
//         getFullInfo.get().then((response) => {
        
//           dispatch({type:'descriptionPageLoad' , load:false , fullInfo: response.data})      
//       })
//       ;

//  }},[isLoading]);



console.log(fullInfo)

if(isLoading){
    return(
      
    <div><h2>Loading....</h2></div>
    );
} 


let keyNumber = Number(pokeNum)+1;
let imgNumber = '00'+keyNumber;
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
      <h1>{posts?.results[pokeNum].name.toUpperCase()}</h1>
    </div>
    <br></br>
 <div className = "container-info d-flex flex-wrap my-4">
  <div className = "abilitiesInfo">
    <div>
    <h4>Height</h4>
    </div>
    
    <p>{fullInfo[pokeNum]?.height} meter</p>
    
  </div>
  <hr className = "breakLine"/>
  <div className = "abilitiesInfo">
    <div>
  <h4>Weight</h4>
  </div>
  <p>{fullInfo[pokeNum]?.weight} kg</p>
  </div>
  <hr className = "breakLine"/>
  <div className = "abilitiesInfo">
    <div>
  <h4>Abilities</h4>
  </div>
  <p>{fullInfo[pokeNum]?.abilities?.map((ability)=> {return ( ability.ability.name+'  ');})}</p>
  </div>
  <hr className = "breakLine"/>
  <div className = "abilitiesInfo">
    <div>
  <h4>Base Experience</h4>
  </div>
  <p>{fullInfo[pokeNum]?.base_experience} years</p>
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
   
 </div>
     </div>
    </div>    
  </div>
</div>      
    );


}