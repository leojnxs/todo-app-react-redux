import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: '',
        list: [{
            _id: 1,
            description: 'Tarefa 1',
            done: true
        }, {
            _id: 2,
            description: 'Tarefa 2',
            done: false
        }, {
            _id: 3,
            description: 'Tarefa 3',
            done: false
        }]
    })
})

export default rootReducer