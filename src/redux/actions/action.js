export const addToCart = (item) => {
    return{
        type :"ADD_TO_CART",
        payload : item
    }
}

export const DeleteToCart = (id) => {
    return{
        type :"DELETE_TO_CART",
        payload : id
    }
}