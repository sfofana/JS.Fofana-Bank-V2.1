import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.url;

  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  updateUser(id:string, user:User): Observable<User> {
    return this.http.put<User>(this.url+'/'+id, user);
  }
}
