import {BUY_ICECREEM} from './IceCreemActionType'
const initialState = {
    numberOficecreem : 20
} 

const iceCreemReducer = (state = initialState, action) =>{
     switch(action.type){
         case BUY_ICECREEM : return{
             ...state, 
             numberOficecreem : state.numberOficecreem - 1 
             }
             default : return state
     }
}

export default iceCreemReducer