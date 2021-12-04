export class Organization {

    public id : string;
    public name : string;
    public country : string;
    public city : string;
    public email : string;
    public phone : string;
    public contactId : string;
    public date : string;
    public type : string;
    public details : string;

    constructor(id: string, 
                name: string, 
                country: string,
                city: string,
                email: string, 
                phone: string,
                contactId: string,
                date: string,
                type: string,
                details : string
                ){

        this.id = id;
        this.name = name;
        this.country = country;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.contactId = contactId;
        this.date = date;
        this.type = type;
        this.details = details;
    };
}