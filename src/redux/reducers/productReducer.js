import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: "Dispesh",
        category: "programmer",
    },
],
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
}