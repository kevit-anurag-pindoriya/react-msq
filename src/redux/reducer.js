import { bindActionCreators } from "redux";
const init = []
export const reducer = (state = init, action) => {
    switch (action.type) {
        case "ADD": {

            return [...state.slice(0, action.payload.index), action.payload, ...state.slice(action.payload.index + 1)]
        }
        default:
            {
                return state
            }
    }
}