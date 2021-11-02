export class Project {

    public id : string;
    public name : string;
    public organization : string;
    public date : string;
    public country : string;
    public city : string;
    public equipment : string;
    public donations : string;
    public price : number;
    public contacts : string;
    public details : string;
    public results : string;

    constructor(id: string, 
                name: string, 
                organization: string,
                date: string,
                country: string, 
                city: string,
                equipment: string,
                donations: string,
                price: number,
                contacts: string,
                details: string,
                results: string
                ){

        this.id = id;
        this.name = name;
        this.organization = organization;
        this.date = date;
        this.country = country;
        this.city = city;
        this.equipment = equipment;
        this.donations = donations;
        this.price = price;
        this.contacts = contacts;
        this.details = details;      
        this.results = results;
    };
}