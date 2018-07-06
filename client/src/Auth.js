import auth0 from 'auth0-js';

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
}

