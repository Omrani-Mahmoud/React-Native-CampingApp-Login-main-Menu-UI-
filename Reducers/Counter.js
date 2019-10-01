const counter =(state=0,action) => {
    switch(action.type){
        case 'up':
            return state+1
        case 'down':
            return state-1
        default:
            return state;
    }

}
export default counter;