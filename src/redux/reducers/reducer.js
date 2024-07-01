const initialState = {
    carts : []
}


export const cartReducers = (state = initialState, action ) => {
    console.log("reducers", action.payload);
switch (action.type) {
    case "ADD_TO_CART":
console.log("action", action.payload);
    return{
        ...state,
        carts : [...state.carts, action.payload]
    }
    case "DELETE_TO_CART":
        let delItem = state.carts.filter(x => x.id !== action.payload)
    return{
        ...state,
        carts : delItem
    }
        

    default:
        return state
}


}