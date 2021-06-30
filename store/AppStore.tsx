import { makeAutoObservable, action, observable } from "mobx";
import Account from "../services/account";

export class AppStore {

constructor() {
    makeAutoObservable(this,{
        account:observable
    })
}

account : Account;

@action setAccount = ( account : Account ) => {
    this.account = account;
}



}
