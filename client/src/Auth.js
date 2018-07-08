/* eslint no-restricted-globals: 0 */

import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = '/secret'
const LOGIN_FAILURE_PAGE = '/subscription'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'isubscribe.auth0.com',
        clientID: 'vLYPSGIwSBnJljvuT5hZLgBOKdzgh3I4',
        redirectUri: 'http://localhost:3000/subscription',
        audience: 'https://isubscribe.auth0.com/api/v2/',
        responseType: 'token id_token',
        scope:'openid'
    });

    constructor(){
        this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize()
    }

    handleAuthentication(){
        this.auth0.parseHash((err, authResults)=>{
            if(err){
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
            
            else if(authResults && authResults.accessToken && authResults.idToken)
            {
                console.log("Ugly Auth Restults" + authResults);
                let expiresAt=JSON.stringify((authResults.expiresIn)*1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                console.log("Restults Token"+ authResults.accessToken)
                localStorage.setItem("id_token", authResults.idToken);
                console.log("ID Token"+ authResults.idToken)
                localStorage.setItem("expires_at", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            }
            
        })
    }

    isAuthenticated(){
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

}