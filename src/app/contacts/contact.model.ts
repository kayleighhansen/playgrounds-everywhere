export class Contact {

    public contactId : string;
    public fname : string;
    public lname : string;
    public email : string;
    public phone : string;
    //public imageUrl : string;
    public country : string;
    public city : string;
    public organizationId : string;
    public job : string;
    public details : string;

    constructor(id: string, 
                fname: string, 
                lname: string,
                email: string,
                phone: string, 
                //imageUrl: string,
                country: string,
                city: string,
                organizationId : string,
                job: string,
                details: string
                ){

        this.contactId = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.phone = phone;
        //this.imageUrl = imageUrl;
        this.country = country;
        this.city = city;
        this.organizationId = organizationId;
        this.job = job;
        this.details = details;
    };
}