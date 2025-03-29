import { Component, OnInit } from '@angular/core';
import { Employees } from '../model/Employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  //regular expression
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
    + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  addData: Employees = <Employees>{};
  allCountry: any[] = [];
  isUpdate:boolean=false;

  constructor(private service: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDataFromUrl();
    this.getAllCountryFromBackend();
  }


  getDataFromUrl() {
    this.route.paramMap.subscribe((param: any) => {
      // console.log(param.get("id"));
      if(param.get("id")!=null){
        
      this.getParticularDataFromBacked(param.get("id"));
      }
    })
  }


  getParticularDataFromBacked(id: any) {
    this.service.getDataFromUrlById(id)
      .subscribe((response: any) => {
        // console.log(response);
        this.isUpdate=true;
        this.addData = response;
      })
  }



  getAllCountryFromBackend() {
    this.service.getAllCountry()
      .subscribe((response: any) => {
        this.allCountry = response;
      })
  }


  onSubmit() {
    if(this.isUpdate){
      //updaterecord
      this.addData.updatedBy = "admin";
      this.addData.updatedDate = Date.now();

      this.service.updateEmpData(this.addData)
      .subscribe((response) => {
        this.isUpdate=false;
        // console.log(response)
        this.router.navigate([''])
      });

    }else{
      //addrecord
      this.addData.createdBy = "admin";
    this.addData.updatedBy = "admin";
    this.addData.createdDate = Date.now();
    this.addData.updatedDate = Date.now();

    this.service.addEmpData(this.addData)
      .subscribe((response: any) => {
        // console.log(response)
        this.router.navigate([''])
      });

  }
    }
    

}
