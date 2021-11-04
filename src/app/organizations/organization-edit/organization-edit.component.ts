import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['../../app.component.css']
})
export class OrganizationEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let contactsList = [{  
      value: '0',  
      fname: 'Kayleigh',
      lname: 'Hansen'
    },  
   {  
      value: '1',  
      fname: 'Zayne',
      lname: ''  
    },{  
      value: '2',  
      fname: 'Judith',
      lname: 'Nalube'  
    }
  ];

    const selectList = document.getElementsByClassName("contactSelectList")[0];

    for (const item of contactsList ) {
      var option = document.createElement("option");
      option.value = item.value;
      option.text = item.fname + " " + item.lname;

      selectList.appendChild(option);
    }
  }

}
