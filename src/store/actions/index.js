import {storeTypes} from "./types";
import Actions from "../generic/Action";

export const storeActions = _ => {
   let actions = {};
   for (let key in storeTypes){
        actions[key] = new Actions(key)
    }
   return actions
};
