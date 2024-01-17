import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseURL } from "../utils";

@Injectable({ providedIn: "root" })
export class OperationService {

    constructor(private http: HttpClient) { }

    getAllOperations() {
        return this.http.get(`${baseURL}/operations`)
    }


}