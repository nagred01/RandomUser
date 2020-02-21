import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://randomuser.me/api/';

  getUsers(USerPayload) : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl+'?results='+USerPayload.usercount);
  }
}