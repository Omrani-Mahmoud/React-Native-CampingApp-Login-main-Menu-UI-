
const isLogedReducer =(initialState ={userName:'',pass:'',clear:false},action) => {
    switch(action.type){
        case 'IN':
            {
               initialState.clear = false;
               return initialState;
            }
           

        case 'OUT':
            { 
                return initialState={userName:'',pass:'', clear:true};
            }
         
        case 'ADD_USER_NAME_INPUTS':
            {initialState.userName=action.payload  
            return initialState}
        
        case 'ADD_USER_PASS_INPUTS':
            {initialState.pass=action.payload
            return initialState}
        default:
            return initialState;
    }

}
export default isLogedReducer;