import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseURL } from "../utils";

@Injectable({ providedIn: "root" })
export class CategoryService {

    constructor(private http: HttpClient) { }

    getAllCategories() {
        return this.http.get(`${baseURL}/categories`)
    }


}