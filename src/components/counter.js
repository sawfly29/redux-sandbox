import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
// import {bindActionCreators} from 'redux'

const Counter = ({counter, dec, inc, rnd}) => {
    return ( 
        <div className = 'jumbotron'>
            <h2 id = 'counter' > {counter} </h2> 
            <button onClick={dec} id = 'dec' className = 'byn btn-primary btn-lg' > DEC </button> 
            <button onClick={inc} id = 'inc' className = 'byn btn-primary btn-lg' > INC </button> 
            <button onClick={rnd} id = 'rnd' className = 'byn btn-primary btn-lg' > RND </button> 
        </div>
    )
}

const mapStateToProps = (state) => {
 return {
     counter: state
 }
}


export default connect(mapStateToProps, actions)(Counter)

//export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// const mapDispatchToProps = (dispatch) => {
//     const {dec, inc, rnd} = bindActionCreators(actions, dispatch)
//     return {
//         dec,
//         inc, 
//         rnd : () => {
//             const value = Math.floor(Math.random()*10)
//             const sign = Math.floor(Math.random()*10)   
//             sign < 5? rnd(-1*value) : rnd(value)
            
//         }
//     }
// }