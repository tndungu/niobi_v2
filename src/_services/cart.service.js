
import {config} from '../api/config'
import { authHeader,handleResponse } from '../_helpers'

export const cartService = {
    addToCart,
    getCartItems,
    createOrder,
    getCartItemsCount,
    updateCart,
    removeCartItem
}

function addToCart(CartRequest){
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json',...authHeader()}, 
        body: JSON.stringify(CartRequest)
    }
    return fetch(`${config.apiUrl}/Cart/AddToCart`,requestOptions).then(handleResponse)
}

function updateCart(CartRequest){
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json',...authHeader()}, 
        body: JSON.stringify(CartRequest)
    }
    return fetch(`${config.apiUrl}/Cart/UpdateCart`,requestOptions).then(handleResponse)
}

function removeCartItem(productId){
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json',...authHeader()}, 
        body: JSON.stringify(productId)
    }
    return fetch(`${config.apiUrl}/Cart/RemoveFromCart`,requestOptions).then(handleResponse)
}

function getCartItems(){
    const requestOptions = {
        method:'GET',
        headers: {'Content-Type':'application/json',...authHeader()}, 
    }
    return fetch(`${config.apiUrl}/Cart/GetCartItems`,requestOptions).then(handleResponse)
}

function getCartItemsCount(){
    const requestOptions = {
        method:'GET',
        headers: {'Content-Type':'application/json',...authHeader()}, 
    }
    return fetch(`${config.apiUrl}/Cart/GetCartItemsCount`,requestOptions).then(handleResponse)
}

function createOrder(){
    const requestOptions = {
        method:'GET',
        headers: {'Content-Type':'application/json',...authHeader()}, 
    }
    return fetch(`${config.apiUrl}/Order/Order`,requestOptions).then(handleResponse)
}