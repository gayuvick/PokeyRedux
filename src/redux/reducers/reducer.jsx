import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    posts:[],
    isLoading:true,
    error:'',
    fullInfo:[],

}
const reducerWithCreate = createReducer(initialState, (builder) => {
    builder
      .addCase('initialPageLoad', (state, action) => {
        state.posts =  action.posts
        state.isLoading =action.isLoading
        
      })
      .addCase('descriptionPageLoad', (state, action) => {
        state.load = action.load
        state.fullInfo = action.fullInfo
      })
      
  })



// const reducer = (state = initialState  ,  action) => {
//     switch (action.type) {
        
//         case 'initialPageLoad':
           
//             return ({
//                 ...state,
//                 posts: action.posts,
//                 isLoading:action.isLoading,
//                 fullInfo:action.fullInfo,
                            
//             }

//             )

//         case 'descriptionPageLoad':
            
//             return{
//                 ...state,
//                 load:action.load,
//                 fullInfo:action.fullInfo,

//             }

        
//         default:
//             return state;
//     }
// };
 
export { reducerWithCreate };