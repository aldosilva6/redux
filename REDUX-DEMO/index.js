//If it was a react application we would use the ES6 import
//import redux from 'redux'
//As a simple node js application
const redux = require('redux')
const reduxLogger = require("redux-logger");

//1 - Create the store
const createStore = redux.createStore
const combineReducers = redux.combineReducers
//Middlewre - Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//1) - Action creator is a function that return an action
function buyCake(){
    //An action is an object with a type property
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

//Firt parameter of reducer
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

//2) - A function that accepts state and action as arguments, and returns the next state of the application
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            //Use spread operator to make a copy of the state and only change the numOfCakes property
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {

        case BUY_ICECREAM: return {
            //Use spread operator to make a copy of the state and only change the numOfCakes property
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//The create store receive a parameter which is the reducer that holds the application state
//1 - A store to hold the state application
//Middleware = First import the library and second pass as argument to createStore
const store = createStore(rootReducer, applyMiddleware(logger))
//2
console.log('Initial state', store.getState())
//4 and 5 - A listener to the store - Anytime the state updates we log the state to the console
const unsubscribe = store.subscribe(() => {})
//3
store.dispatch(buyCake()) // When we dispatch the action the reducer sees that the action type is BUY_CAKE
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe() // Unsubscribe to any change in the store

//Redux Store Responsabilities
//1 - Holds application state
//2 - Allows access to state via getState()
//3 - Allows state to be updated via dispatch(action)
//4 - Registers listeners via subscribe(listener)
//5 - Handles unregistering of listeners via the function returned by subscribe(listener)