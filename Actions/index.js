export const Loged = () =>{
    return{
        type: 'IN'
    };
}


export const LogedOut = () =>{
    return{
        type: 'OUT'
    }
}

export const AddUserNameInput = (param) =>{
    return{
        type: 'ADD_USER_NAME_INPUTS',
        payload: param
    }
}
export const AddUserPassInput = (param) =>{
    return{
        type: 'ADD_USER_PASS_INPUTS',
        payload: param
    }
}