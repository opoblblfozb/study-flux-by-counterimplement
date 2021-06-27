import type { CountState } from "./state";
import type  Action  from "./actions";

import React from "react";

export type StoreContext = {
    state: CountState;
    dispatch: (action: Action) => void;
}

const Store = React.createContext({} as StoreContext);
export default Store

/*
state(DB)とdispatch(API)をいっしょにしたものがStore
Storeという名付けがよくない気がするが、実質的にはただのContext={state, dispatch}
この２つを
<Context.Provider>
 <Consurmer />
</Context.provider>
という形で、Comsumerが利用できるようにする(Context)

*/