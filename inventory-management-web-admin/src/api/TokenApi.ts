import Utility from '../Model/Utility';

export const setToken = (token: Utility):Promise<any> =>{
    return fetch("https://localhost:44368/token",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(token),
    }).then(res => res.json())
}