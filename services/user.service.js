import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router'

import { fetchWrapper } from '../helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    getAll
};

export default function login(username, password) {
        let userData = {
            authdata: "dGVzdDp0ZXN0",
            firstName: "Test",
            id: 1,
            lastName: "User",
            username: "test"
            }
    // user.authdata = window.btoa(username + ':' + password);
    // userSubject.next(user);
    // localStorage.setItem("user",JSON.stringify(user))
    // return user
    return fetchWrapper.post(`http://localhost:8011/api/authenticate`, { username, password })
        .then(user => {
            // publish user with basic auth credentials to subscribers and store in 
            // local storage to stay logged in between page refreshes
            // user.authdata = window.btoa(username + ':' + password);
            userSubject.next(userData);
            localStorage.setItem('user', JSON.stringify(userData));

            return userData;
        });
}

 function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/login');
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}
