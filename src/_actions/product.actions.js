import { productConstants } from "../_constants"
import {productService } from '../_services'

export const productActions = {
    getAllProducts
}

function getAllProducts(PointerParams){
    return dispatch => {
        dispatch(request(PointerParams))

        productService.getAllProducts(PointerParams)
            .then(data => {
                return data.json()
            })
            .then(
                products => {
                    if(products.statusCode == 200){
                        dispatch(success(products.data))
                    }else{
                        dispatch(failure(products.message))
                    }
                    
                },
                error => dispatch(failure(error.toString()))
            )
    }
    function request() { return {type: productConstants.GETALLPRODUCTS_REQUEST} }
    function success(products) { return {type: productConstants.GETALLPRODUCTS_SUCCESS, products} }
    function failure(error) { return {type: productConstants.GETALLPRODUCTS_FAILURE, error} }
}

