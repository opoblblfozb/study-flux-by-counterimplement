export type Actiontypes = "INCREMENT" | "RESET"

export type Action = {
    type: Actiontypes;
    payload?: Record<string, any>;
}

export default Action