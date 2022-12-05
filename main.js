// ref reactive effect
import { createSignal, createEffect } from 'solid-js'
// const [count, setCount] = createSignal(1)
import { render } from 'solid-js/web'
import App from './App'

// console.log(count())

// let b;
// createEffect(() => {
//   b = count() + 10;
//   console.log(b)
// })
// setInterval(() => {
//   setCount(count() + 1)
// }, 1000);

render(App, document.querySelector('#app'))
