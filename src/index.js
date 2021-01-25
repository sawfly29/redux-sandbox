import {
  createStore
} from 'redux'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + action.payload;
    default:
      return state;
  }
}
const store = createStore(reducer);

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'INC'
    })
  })

document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'DEC'
    })
  })
document
  .getElementById('rnd')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'RND',
      payload: Math.floor(Math.random()*10)
    })
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