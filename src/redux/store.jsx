import { createStore, combineReducers, applyMiddleware } from "redux";
import weatherReducer from "./weather-reducer";
import thunkMiddleware from 'redux-thunk'

const saveToLocalStorage = state => {
    try {
        let serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e) {
        console.log(e)
    }
}

const loadFromLocalStorage = () => {
    try{
        let serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch(e) {
        console.log(e)
        return undefined
    }
}

const reducers = combineReducers({
    weatherReducer
})

const persistedState = loadFromLocalStorage()
const store = createStore(reducers,persistedState, applyMiddleware(thunkMiddleware)) 

store.subscribe( () => saveToLocalStorage(store.getState()) )

export default store