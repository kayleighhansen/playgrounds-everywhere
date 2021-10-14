export class Organization {

    public organizationId : number;
    public organizationName : string;
    public organizationCountry : string;
    public organizationCity : string;
    public organizationEmail : string;
    public organizationPhone : string;
    public organizationContacts : string;
    public organizationDate : string;
    public organizationType : string;
    public organizationImageUrl : string;
    public organizationDescription : string;

    constructor(id: number, 
                name: string, 
                country: string,
                city: string,
                email: string, 
                phone: string,
                contacts: string,
                date: string,
                type: string,
                imgUrl : string,
                description : string
                ){

        this.organizationId = id;
        this.organizationName = name;
        this.organizationCountry = country;
        this.organizationCity = city;
        this.organizationEmail = email;
        this.organizationPhone = phone;
        this.organizationContacts = contacts;
        this.organizationDate = date;
        this.organizationType = type;
        this.organizationImageUrl = imgUrl;
        this.organizationDescription = description;

    };
}