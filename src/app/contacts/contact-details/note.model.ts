export class Note {
    subscribe(arg0: (item: any) => void) {
      throw new Error('Method not implemented.');
    }

    public id : string;
    public date : string;
    public text : string;
    public contactId : string;
   
    constructor(id: string, 
                date: string, 
                text: string,
                contactId: string,
                ){

        this.id = id;
        this.date = date;
        this.text = text;
        this.contactId = contactId;
    };
}