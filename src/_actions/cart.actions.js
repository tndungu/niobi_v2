import { alertActions } from "."
import {cartService } from '../_services'
import { cartConstants } from "../_constants"
import {history } from '../_helpers'

export const cartActions = {
    addToCart,
    getCartItems,
    createOrder,
    getCartItemsCount,
    updateCart,
    removeCartItem
}

function addToCart(cartRequest){
    return dispatch => {
        dispatch(request(cartRequest))

        cartService.addToCart(cartRequest)
            .then(data => {return data.json()})
            .then(response => {
                if(response.statusCode == 200){
                    dispatch(success(response.data))
                    dispatch(cartActions.getCartItemsCount())
                    dispatch(alertActions.success("Item successfully added to cart"))
                }else{
                    dispatch(alertActions.failure("Item could not be added to cart"))
                }
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }
    function request(cartRequest) {return {type: cartConstants.ADDTOCART_REQUEST,cartRequest}}
    function success(cartRequest){return {type: cartConstants.ADDTOCART_SUCCESS,cartRequest}}
    function failure(cartRequest) {return {type: cartConstants.ADDTOCART_FAILURE,cartRequest}}
}

function updateCart(cartUpdateRequest){
    return dispatch => {
        dispatch(request(cartUpdateRequest))

        cartService.updateCart(cartUpdateRequest)
            .then(data => {return data.json()})
            .then(response => {
                if(response.statusCode == 200){
                    dispatch(success(response.data))
                    dispatch(cartActions.getCartItemsCount())
                    dispatch(cartActions.getCartItems())
                    dispatch(alertActions.success("Cart updated successfully"))
                }else{
                    dispatch(alertActions.failure("Cart could not be updated"))
                }
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }
    function request(cartUpdateRequest) {return {type: cartConstants.UPDATECART_REQUEST,cartUpdateRequest}}
    function success(cartUpdateRequest){return {type: cartConstants.UPDATECART_SUCCESS,cartUpdateRequest}}
    function failure(cartUpdateRequest) {return {type: cartConstants.UPDATECART_FAILURE,cartUpdateRequest}}
}

function removeCartItem(productId){
    return dispatch => {
        dispatch(request(productId))

        cartService.removeCartItem(productId)
            .then(data => {return data.json()})
            .then(response => {
                if(response.statusCode == 200){
                    dispatch(success(response.data))
                    dispatch(cartActions.getCartItemsCount())
                    dispatch(cartActions.getCartItems())
                    dispatch(alertActions.success("Item deleted from cart."))
                }else{
                    dispatch(alertActions.failure("Cart could not be updated"))
                }
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }
    function request(productId) {return {type: cartConstants.REMOVECARTITEM_REQUEST,productId}}
    function success(productId){return {type: cartConstants.REMOVECARTITEM_SUCCESS,productId}}
    function failure(productId) {return {type: cartConstants.REMOVECARTITEM_FAILURE,productId}}
}

function createOrder(){
    
    return dispatch => {
        dispatch(request())

        cartService.createOrder()
            .then(response => {
                dispatch(success(response.data))
                dispatch(alertActions.success('Order created successfully'))
                history.push('./checkout')
                setTimeout(() => {
                    window.location.reload()
                },500)
                
                
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }

    function request() {return {type: cartConstants.CREATEORDER_REQUEST}}
    function success(data){return {type: cartConstants.CREATEORDER_SUCCESS,data}}
    function failure() {return {type: cartConstants.CREATEORDER_FAILURE}}
}

function getCartItems(){
    
    return dispatch => {
        dispatch(request())

        cartService.getCartItems()
            .then(data => {
                return data.json()
            })
            .then(response => {
                dispatch(success(response.data))
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }

    function request() {return {type: cartConstants.GETCARTITEMS_REQUEST}}
    function success(data){return {type: cartConstants.GETCARTITEMS_SUCCESS,data}}
    function failure() {return {type: cartConstants.GETCARTITEMS_FAILURE}}
}

function getCartItemsCount(){
    return dispatch => {
        dispatch(request())

        cartService.getCartItemsCount()
            .then(data =>{
                return data.json()
            })
            .then(response => {
                dispatch(success(response.data))
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }

    function request() {return {type: cartConstants.GETCARTITEMSCOUNT_REQUEST}}
    function success(data){return {type: cartConstants.GETCARTITEMSCOUNT_SUCCESS,data}}
    function failure() {return {type: cartConstants.GETCARTITEMSCOUNT_FAILURE}}
}