export class ToDo {

    public todoId : number;
    public todoTitle : string;
    public todoDescription : string;
    public todoCountry : string;
    public todoCity : string;
    public todoEquipment : string;
    public todoPrice : string;
    public todoContacts : string;

    constructor(id: number, 
                title: string, 
                description: string,
                country: string,
                city: string, 
                equipment: string,
                price: string,
                contacts: string,
                ){

        this.todoId = id;
        this.todoTitle = title;
        this.todoDescription = description;
        this.todoCountry = country;
        this.todoCity = city;
        this.todoEquipment = equipment;
        this.todoPrice = price;
        this.todoContacts = contacts;

    };
}