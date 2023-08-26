import { checkPrime } from "crypto";

class HistoryModel{
    id: number;
    userEmail:string;
    checkoutDate: string;
    returnedDate: string;
    title: string;
    author: string;
    description: string;
    img: string;

    constructor(
    id: number,
    userEmail:string,
    CheckoutDate: string,
    returnedDate: string,
    title: string,
    author: string,
    description: string,
    img: string
    ){
        this.id=id;
        this.userEmail=userEmail;
        this.checkoutDate=CheckoutDate;
        this.returnedDate=returnedDate;
        this.title=title;
        this.author=author;
        this.description=description;
        this.img=img;
    }
}
export default HistoryModel;