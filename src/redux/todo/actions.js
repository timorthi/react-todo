// Action types
const ADD_TODO = 'ADD_TODO'

// Action creators
function addTodo(text) {
    return { type: ADD_TODO, text: text }
}

export { addTodo };
