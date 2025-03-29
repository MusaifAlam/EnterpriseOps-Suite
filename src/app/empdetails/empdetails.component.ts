import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employees } from '../model/Employee';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  empobj:Employees=<Employees>{};

  constructor(private route:ActivatedRoute,
    private service:HttpService
  ){}

  ngOnInit(): void {
    this.getDataFromUrl();
  }

    getDataFromUrl(){
      this.route.paramMap.subscribe((param:any)=>{
        // console.log(param.get("id"));
        this.getDataFromBacked(param.get("id"));
      })
    }

    getDataFromBacked(id:any){
      this.service.getDataFromUrlById(id)
      .subscribe((response:any)=>{
        // console.log(response);
        this.empobj=response;
      })
    }
  

}
