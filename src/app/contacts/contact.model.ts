export class Contact {
    subscribe(arg0: (item: any) => void) {
      throw new Error('Method not implemented.');
    }

    public id : string;
    public fname : string;
    public lname : string;
    public email : string;
    public phone : string;
    //public imageUrl : string;
    public country : string;
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
                organizationId : string,
                job: string,
                details: string
                ){

        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.phone = phone;
        //this.imageUrl = imageUrl;
        this.country = country;
        this.organizationId = organizationId;
        this.job = job;
        this.details = details;
    };
}