import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import pokeCard from "../assets/poke.jpg"
import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';

 
export default function ProductList(){
  
  let pages = useNavigate();
  const moveToNextPage = (key)=>{ 
    localStorage.setItem('pokeNum', key);
    pages("/details");
  }
  const dispatch =  useDispatch();
  const posts = useSelector(state => state.posts);      
  const isLoading = useSelector(state => state.isLoading);   
  

  useEffect(()=>{
   
    if(posts){
    axios.get("https://pokeapi.co/api/v2/pokemon/").
    then(response=> { 
      let fullData = [];
     
      
      for(const key in response.data.results){
        axios.get(response.data.results[key].url).then(response=>{
          
          fullData.push(response.data);
        })
      }
    

      dispatch({type:'initialPageLoad' , posts: response.data , isLoading:false ,fullInfo:fullData })});
     }},[]);

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
            
          </div>
        

        </div>
        <div className = "card-back m-2">
        
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
      
<br></br>
 </div>
  
      
);
}