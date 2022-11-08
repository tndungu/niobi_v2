import {config} from '../api/config'
import { authHeader,handleResponse } from '../_helpers'

export const productService = {
    getAllProducts
}

function getAllProducts(PointerParams){
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json',...authHeader()}, 
        body: JSON.stringify(PointerParams)
    }
    return fetch(`${config.apiUrl}/Product/GetProducts`,requestOptions).then(handleResponse)
}

function post(url,body){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type':'application/json', ...authHeader(url)},
        body: JSON.stringify(body)
    }
    return fetch(url, requestOptions).then(handleResponse)
}