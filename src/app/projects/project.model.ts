export class Project {

    public id : string;
    public name : string;
    public organizationId : string;
    public contactId : string;
    public date : string;
    public country : string;
    public city : string;
    public equipment : string;
    public equipmentAmount: number;
    public donations : string;
    public donationsAmount : number;
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
                equipmentAmount: number,
                donations: string,
                donationsAmount: number,
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
        this.equipmentAmount = equipmentAmount;
        this.donations = donations;
        this.donationsAmount = donationsAmount;
        this.price = price;
        this.details = details;      
        this.results = results;
    };
}