import sendRequest from "./send-request";

const BASE_URL='/api/items'

export function getAll(){
    return sendRequest(BASE_URL)
}

//Just remind:follow RESTful routing, etc.
export function getById(id){
    return sendRequest(`${BASE_URL}/${id}`)
}