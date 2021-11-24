export class Project {

    public id : string;
    public name : string;
    public organizationId : string;
    public contactId : string;
    public date : string;
    public country : string;
    public city : string;
    public equipment : string;
    public donations : string;
    public price : number;
    public details : string;
    public results : string;

    constructor(id: string, 
                name: string, 
                organizationId: string,
                contactId: string,
                date: string,
                country: string, 
                city: string,
                equipment: string,
                donations: string,
                price: number,
                details: string,
                results: string){

        this.id = id;
        this.name = name;
        this.organizationId = organizationId;
        this.contactId = contactId;
        this.date = date;
        this.country = country;
        this.city = city;
        this.equipment = equipment;
        this.donations = donations;
        this.price = price;
        this.details = details;      
        this.results = results;
    };
}