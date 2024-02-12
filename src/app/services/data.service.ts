import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url= 'http://localhost:3000/data'
  constructor(private http:HttpClient) { }
  postData(data:any){
    return this.http.post(this.url,data);
  }
  getData(){
    return this.http.get(this.url);
  }
  deleteData(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  updateData(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
