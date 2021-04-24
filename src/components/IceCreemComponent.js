import React from 'react'
import {connect} from 'react-redux'
import {IceCreemAction} from '../redux/index'

function IceCreemComponent(props) {
    
    return (
        <div>
            <h2>Number of Ice Creem {props.numberOficecreem}</h2>
            <button onClick={props.IceCreemAction}>Buy Icecreem</button>
            
        </div>
    )
}

const mapStateToProps =(state) =>{
  return{
    numberOficecreem : state.iceCreem.numberOficecreem
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    IceCreemAction : () => dispatch(IceCreemAction())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreemComponent)
