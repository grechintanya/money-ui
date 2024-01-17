import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseURL, Login, User } from "../utils";

@Injectable({ providedIn: "root" })
export class AuthService {

    constructor(private http: HttpClient) { }

    register(newUser: User) {
        return this.http.post(`${baseURL}/auth/register`, newUser)
    }

    login(loginObj: Login) {
        return this.http.post(`${baseURL}/auth/login`, loginObj)
    }

}