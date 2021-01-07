import Action from "./actions"

export default function reducer(state = {}, action) {
    console.log(state, "in reducer")
    switch (action.type) {
        case Action.ADD_TODO: {
            return state
        }
        default:
            return
    }
}