export function PostDataSignIn(userData){
    let baseUrl ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC9u5GjlRTGiwek7-TJ3IsEdwcRR5pXHaA'
    

    return new Promise((resolve,reject)=>{
        fetch(baseUrl,{
            'method':'POST',
            body:JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((responseJSON)=>{
            resolve(responseJSON);
        })
        .catch((error)=>{
            reject(error);
        });
    })
}

export function PostDataSignUp(userData){
    let baseUrl ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC9u5GjlRTGiwek7-TJ3IsEdwcRR5pXHaA'

    return new Promise((resolve,reject)=>{
        fetch(baseUrl,{
            'method':'POST',
            body:JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((responseJSON)=>{
            resolve(responseJSON);
        })
        .catch((error)=>{
            reject(error);
        });
    })
}
