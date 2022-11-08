import { productConstants } from "../_constants/product.constants";

export function products(state={products:[],nextPointer:1},action){
    switch(action.type){
        case productConstants.GETALLPRODUCTS_REQUEST:
            return {
                loading:true,
                products:[...state.products],
                
            };
        case productConstants.GETALLPRODUCTS_SUCCESS:
                return {
                    ...state,
                    products: [
                        ...state.products,
                        ...action.products.products
                    ],
                    nextPointer:action.products.nextPointer
                };
       
        case productConstants.GETALLPRODUCTS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}