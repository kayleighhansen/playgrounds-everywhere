export class Project {

    public projectId : number;
    public projectName : string;
    public projectOrganization : string;
    public projectDate : string;
    public projectCountry : string;
    public projectCity : string;
    public projectEquipment : string;
    public projectDonations : string;
    public projectPrice : number;
    public projectContacts : string;
    public projectDetails : string;
    public projectResults : string;

    constructor(id: number, 
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

        this.projectId = id;
        this.projectName = name;
        this.projectOrganization = organization;
        this.projectDate = date;
        this.projectCountry = country;
        this.projectCity = city;
        this.projectEquipment = equipment;
        this.projectDonations = donations;
        this.projectPrice = price;
        this.projectContacts = contacts;
        this.projectDetails = details;      
        this.projectResults = results;
    };
}