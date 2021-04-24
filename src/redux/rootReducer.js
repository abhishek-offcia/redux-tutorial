import {combineReducers} from 'redux'
import cakeReducer from './cake/CakeReducer'
import iceCreemReducer from './IceCreem/IceCreemReducer'
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCreem : iceCreemReducer
})

export default rootReducer