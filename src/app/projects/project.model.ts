export class Project {

    public id : string;
    public name : string;
    public organizationId : string;
    public contactId : string;
    public date : string;
    public location : string;
    public country : string;
    public city : string;
    public equipment : string;
    public equipmentAmount: number;
    public donation : string;
    public donationAmount : number;
    public price : number;
    public details : string;
    public results : string;

    constructor(id: string, 
                name: string, 
                organizationId: string,
                contactId: string,
                date: string,
                location:string,
                country: string, 
                city: string,
                equipment: string,
                equipmentAmount: number,
                donation: string,
                donationAmount: number,
                price: number,
                details: string,
                results: string){

        this.id = id;
        this.name = name;
        this.organizationId = organizationId;
        this.contactId = contactId;
        this.date = date;
        this.location = location;
        this.country = country;
        this.city = city;
        this.equipment = equipment;
        this.equipmentAmount = equipmentAmount;
        this.donation = donation;
        this.donationAmount = donationAmount;
        this.price = price;
        this.details = details;      
        this.results = results;
    };
}