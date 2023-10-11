
const initialState = {
    posts:[],
    isLoading:true,
    error:'',
    load:true,
    fullInfo:[],

}

const reducer = (state = initialState  ,  action) => {
    switch (action.type) {
        
        case 'initialPageLoad':
           
            return ({
                ...state,
                posts: action.posts,
                isLoading:action.isLoading,
                fullInfo:action.fullInfo,
                            
            }

            )

        case 'descriptionPageLoad':
            
            return{
                ...state,
                load:action.load,
                fullInfo:action.fullInfo,

            }

        
        default:
            return state;
    }
};
 
export { reducer };