import {
  createStore, bindActionCreators
} from 'redux'
import reducer from './reducer'
import * as actions from './actions'

const store = createStore(reducer);
const {dispatch} = store
const {dec, inc, rnd} = bindActionCreators(actions, dispatch)



document
  .getElementById('inc')
  .addEventListener('click', () => {
    inc()
  })

document
  .getElementById('dec')
  .addEventListener('click', () => {
    dec()
  })
document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    rnd(payload)
  })

  const update = () => {
    document
    .getElementById('counter')
    .innerHTML = store.getState()
  }

  store.subscribe(update)//функция сработает только после изменения state - эдакий листенер


//reducer должен быть чистой функцией: 
//1 - зависит только от аргументов (всегда при одном наборе аргументов будет получаться один рез-т)
//2 - нет побочных эффектов (изменения внешнего состояния среды относ. функции)

// 

// store.subscribe(() => {console.log(store.getState())})

// store.dispatch({type: 'INC'}) //обработка нового действия
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})


// let state = reducer(undefined, {})
// console.log(state)

// state = reducer(state, {type: 'INC'})
// console.log(state)

// state = reducer(state, {type: 'INC'})
// console.log(state)