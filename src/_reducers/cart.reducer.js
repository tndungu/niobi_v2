import { cartConstants } from "../_constants/cart.constants";

export function carts(state={},action){
    switch(action.type){
        case cartConstants.GETCARTITEMS_REQUEST:
            return {
                loading:true
            };
        case cartConstants.GETCARTITEMS_SUCCESS:
            return {
                items: action.data
            };
        case cartConstants.GETCARTITEMS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

export function addCart(state={},action){
    switch(action.type){
        case cartConstants.ADDTOCART_REQUEST:
            return {
                loading:true
            };
        case cartConstants.ADDTOCART_SUCCESS:
            return {};
        case cartConstants.ADDTOCART_FAILURE:
            return {};
        default:
            return state
    }
}

export function cartitemscount(state={cartItems:0},action){
    switch(action.type){
        case cartConstants.GETCARTITEMSCOUNT_REQUEST:
            return {
                loading:true
            };
        case cartConstants.GETCARTITEMSCOUNT_SUCCESS:
            return {
                cartItems: action.data
            };
        case cartConstants.GETCARTITEMSCOUNT_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

export function order(state={},action){
    switch(action.type){
        case cartConstants.ADDTOCART_REQUEST:
            return {
                loading:true
            };
        case cartConstants.ADDTOCART_SUCCESS:
            return {};
        case cartConstants.ADDTOCART_FAILURE:
            return {};
        default:
            return state
    }
}


