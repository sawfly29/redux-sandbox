import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducer'
import {Provider} from 'react-redux'
import App from './components/app'

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>   <App /></Provider>, document.getElementById('root')
 
)


// document
//   .getElementById('inc')
//   .addEventListener('click', () => {
//     inc()
//   })

// document
//   .getElementById('dec')
//   .addEventListener('click', () => {
//     dec()
//   })
// document
//   .getElementById('rnd')
//   .addEventListener('click', () => {
//     const payload = Math.floor(Math.random()*10);
//     rnd(payload)
//   })



//store.subscribe(update)//функция сработает только после изменения state - эдакий листенер


//reducer должен быть чистой функцией: 
//1 - зависит только от аргументов (всегда при одном наборе аргументов будет получаться один рез-т)
//2 - нет побочных эффектов (изменения внешнего состояния среды относ. функции)

// 


// store.dispatch({type: 'INC'}) //обработка нового действия
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})


// let state = reducer(undefined, {})
// console.log(state)

// state = reducer(state, {type: 'INC'})
// console.log(state)

// state = reducer(state, {type: 'INC'})
// console.log(state)