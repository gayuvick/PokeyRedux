import {useNavigate} from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';
import pokeCard from "../assets/poke.jpg"

 
export default function ProductList(){  
  
  const dispatch =  useDispatch();
  const posts = useSelector(state => state.posts);      
  const isLoading = useSelector(state => state.isLoading); 
  
    useEffect(()=>{
      if(posts.length==0){
      dispatch({type: 'LoadPage'})
      }},[])

  let pages = useNavigate();
  const moveToNextPage = (key)=>{    
    pages(`/details/${key}`)
   
  }
    

    let keyNumber = 0;

    
    if(isLoading){
        return(
         
            <div className = "mainDiv loader">Loading....</div>
            
            
        )
    }
    return (

        <div className = "mainDiv">      
        <br></br>       
        <div className="card-groups container">
        <br></br>
            <div className = "row ">
        {posts?.results?.map((info , key)=> {
          
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
            <h5 className="card-title">{info?.name.toUpperCase()}</h5>
            
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