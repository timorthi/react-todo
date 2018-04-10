import { ADD_TODO } from './actions';

const initialState = { todos: [] };

export default function todosReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return [ ...state.todos, action.text ];
        default:
            return state;
    }
}
