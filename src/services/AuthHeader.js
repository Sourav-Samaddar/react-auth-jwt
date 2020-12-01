import React from 'react'

export default function AuthHeader() {
    const user = localStorage.getItem("JWTToken");
    if(user) {
        return {
            headers : {
                'Authorization': 'Bearer '+localStorage.getItem("JWTToken"),
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
           }
        }
    }
    else {
        return {}
    }
}

