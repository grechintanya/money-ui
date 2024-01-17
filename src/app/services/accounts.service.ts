import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseURL } from "../utils";

@Injectable({ providedIn: "root" })
export class AccountService {

    constructor(private http: HttpClient) { }

    getAllAccounts() {
        return this.http.get(`${baseURL}/accounts`)
    }


}
