export class Contact {

    public contactId : number;
    public contactFirstName : string;
    public contactLastName : string;
    public contactEmail : string;
    public contactPhone : string;
    public contactImageUrl : string;
    public contactCountry : string;
    public contactJob : string;
    public contactDetails : string;

    constructor(id: number, 
                fname: string, 
                lname: string,
                email: string,
                phone: string, 
                imageUrl: string,
                country: string,
                job: string,
                details: string
                ){

        this.contactFirstName = fname;
        this.contactLastName = lname;
        this.contactId = id;
        this.contactEmail = email;
        this.contactPhone = phone;
        this.contactImageUrl = imageUrl;
        this.contactCountry = country;
        this.contactJob = job;
        this.contactDetails = details;

    };
}