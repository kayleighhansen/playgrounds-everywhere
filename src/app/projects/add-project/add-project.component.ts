import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    document.getElementById("add-equipment").addEventListener("click", function() {
      let quantities = document.getElementsByClassName("quantity-input-container")[0];

      let quantityInput = document.createElement("div");
      quantityInput.className="quantity-input";
      quantityInput.setAttribute("style", "display:grid; grid-template-columns: 20% 70%;");

      let div1 = document.createElement("div");
        let small1 = document.createElement("small");
        small1.textContent = "Quantity";
        small1.setAttribute("style", "color: #337ab7;");
        div1.appendChild(small1);

        let inputQuantity = document.createElement("input");
        inputQuantity.type = "number";
        inputQuantity.className = "form-control";
        inputQuantity.setAttribute("id", "equipment-quantity");
        inputQuantity.placeholder = "(1)";
        div1.appendChild(inputQuantity);

      quantityInput.appendChild(div1);

      let div2 = document.createElement("div");
        let small2 = document.createElement("small");
        small2.textContent = "Equipment";
        small2.setAttribute("style", "color: #337ab7;");
        div2.appendChild(small2);

        let inputEquipment = document.createElement("input");
        inputEquipment.type = "text";
        inputEquipment.className = "form-control";
        inputEquipment.setAttribute("id", "equipment-name");
        inputEquipment.placeholder = "(Swingset)";
        div2.appendChild(inputEquipment);

      quantityInput.appendChild(div2);

      quantities.appendChild(quantityInput);
    });

    document.getElementById("add-donation").addEventListener("click", function() {
      let quantities = document.getElementsByClassName("donation-input-container")[0];

      let quantityInput = document.createElement("div");
      quantityInput.className="quantity-input";
      quantityInput.setAttribute("style", "display:grid; grid-template-columns: 20% 70%;");

      let div1 = document.createElement("div");
        let small1 = document.createElement("small");
        small1.textContent = "Quantity";
        small1.setAttribute("style", "color: #337ab7;");
        div1.appendChild(small1);

        let inputQuantity = document.createElement("input");
        inputQuantity.type = "number";
        inputQuantity.className = "form-control";
        inputQuantity.setAttribute("id", "equipment-quantity");
        inputQuantity.placeholder = "(1)";
        div1.appendChild(inputQuantity);

      quantityInput.appendChild(div1);

      let div2 = document.createElement("div");
        let small2 = document.createElement("small");
        small2.textContent = "Equipment";
        small2.setAttribute("style", "color: #337ab7;");
        div2.appendChild(small2);

        let inputEquipment = document.createElement("input");
        inputEquipment.type = "text";
        inputEquipment.className = "form-control";
        inputEquipment.setAttribute("id", "equipment-name");
        inputEquipment.placeholder = "(Tablet)";
        div2.appendChild(inputEquipment);

      quantityInput.appendChild(div2);

      quantities.appendChild(quantityInput);
    });

    // json list of options
    let contactsList = [
    {  
      value: '',  
      fname: '',
      lname: ''
    }, 
    {  
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

    let organizationsList = [
    {  
      value: '',  
      name: ''
    }, 
    {  
      value: '0',  
      name: 'Hansen Web Consulting'  
    },  
   {  
      value: '0',  
      name: 'SEEEme'  
    },{  
      value: '2',  
      name: 'The US Government'  
    }
  ];

    const organizationSelectList = document.getElementsByClassName("organizationSelectList")[0];

    for (const item of organizationsList ) {
      var option = document.createElement("option");
      option.value = item.value;
      option.text = item.name;
      
      organizationSelectList.appendChild(option);
    }

  }
}
