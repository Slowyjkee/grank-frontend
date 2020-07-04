import Reducer from "../generic/Reducer";
import {api} from "../../utils/fetch";

const cart = new Reducer('_CART', {quantity:null});

export const addToCart = payload => async (dispatch) => {
    try {
        dispatch({
            type: cart.actionTypes['APPEND'],
            payload,
            key:'data'
        });
        return 'success'
    } catch (e) {
        return 'fail'
    } finally {

    }

};

export const removeFromCart = payload => async (dispatch) => {
    try {
        dispatch({
            type: cart.actionTypes['DELETE'],
            payload,
            key:'data'
        });
        return 'success'
    } catch (e) {
        return 'fail'
    } finally {

    }

};

export const increaseQuantity = payload => async (dispatch) => {
    try {
        dispatch({
            type: cart.actionTypes['UPDATE'],
            payload,
            key:'quantity'
        });
        return 'success'
    } catch (e) {
        return 'fail'
    } finally {

    }

};

export default cart.create();
