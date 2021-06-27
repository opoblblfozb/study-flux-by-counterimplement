import { statement } from "@babel/template";

import type Action from "./actions";
import type { CountState } from "./state";

import initialState from "./state";

export const counterReducer = (state: CountState, action: Action) => {
    switch (action.type) {
        case "INCREMENT":{
            return {count: state.count + 1};
        }
        case "RESET":{
            return  {count: initialState.count};
        }
        default:
            return state;
    }
}