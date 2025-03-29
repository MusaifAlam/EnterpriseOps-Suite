import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="http://localhost:8080/api/"

  constructor(private http:HttpClient) { }

  getEmployeeList(){
    return (this.http.get(`${this.baseUrl}getAllEmp`));
  }

  getDataFromUrlById(id:any){
    return (this.http.get(`${this.baseUrl}getparticularEmpById/${id}`));
  }

  getAllCountry(){
   return (this.http.get(`${this.baseUrl}getAllCountry`));
  }

addEmpData(obj:Employees){
 return (this.http.post(`${this.baseUrl}addemp`,obj,{
  responseType:"text"}));

}

updateEmpData(obj:Employees){
  return(this.http.put(`${this.baseUrl}updateEmp/${obj.id}`,obj,{
    responseType:"text"
  }))
}


deleteEmpData(id:any){
  return(this.http.delete(`${this.baseUrl}deleteemp/${id}`,{
    responseType:"text"
  }));
}

}
