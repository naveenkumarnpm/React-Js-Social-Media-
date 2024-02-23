import {createStore} from "redux";

const counterReducer =(store,actions)=>{
    return store;
}

const counterStore=createStore(counterReducer);

export default counterStore;