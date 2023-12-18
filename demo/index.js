const redux = require('redux') //create object of redux

const createStore = redux.legacy_createStore

//actions
const LAPTOP_ORDERED = "LAPTOP_ORDERED"
const LAPTOP_RESTOCKED = "LAPTOP_RESTOCKED"

function orderLaptop(){
    return{
        type : LAPTOP_ORDERED,
        quantity : 1,
    }
}

function restockLaptop(qty = 1){
    return{
        type: LAPTOP_RESTOCKED,
        quantity: qty,
    }
}

//initial state
const initialState = {
    numberOfLaptops: 10,
    numberOfSmartphones: 5,
}

const reducer = (state=initialState, action)=>{
    switch (action.type){
        case LAPTOP_ORDERED:
            return{
                ...state,
                numberOfLaptops: state.numberOfLaptops - 1
            }

           case LAPTOP_RESTOCKED:
            return{
                ...state,
                numberOfLaptops: state.numberOfLaptops + action.quantity
            } 

            default:
                return state
    }
}

//create store
const store = createStore(reducer)
console.log("Initial state", store.getState())

//subscribe to store
const unsubscribe = store.subscribe(()=>console.log("updatedState" , store.getState()))

//triger actions
store.dispatch(orderLaptop())
// store.dispatch(orderLaptop())
// store.dispatch(orderLaptop())
store.dispatch(restockLaptop(3))


//unsubscribe
unsubscribe();

