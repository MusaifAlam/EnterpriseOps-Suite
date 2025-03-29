import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employees } from '../model/Employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

employees:Employees[]=[];

  constructor(private service:HttpService){}

  ngOnInit(): void {
    this.getEmpList();
  }

  getEmpList(){
    this.service.getEmployeeList()
    .subscribe((response:any)=>{
      // console.log(response);
      this.employees=response
    },(myError)=>{
      alert("Error Occured....")
    })
  }


  onDelete(id:any){

    if(confirm("Do you want to delete this Record")){
      // console.log("delete ap is called");

      this.service.deleteEmpData(id)
      .subscribe((response)=>{
        console.log(response);
        this.getEmpList();
      })
    }

  }
  

}
