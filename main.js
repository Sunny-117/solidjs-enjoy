// ref reactive effect
import { createSignal, createEffect } from 'solid-js'
const [count, setCount] = createSignal(1)

// vue ref count.value
// react count
console.log(count())

let b;
createEffect(() => {
  b = count() + 10;
  console.log(b)
})
setInterval(() => {
  setCount(count() + 1)
}, 1000);

// 实现原理
function createSignal(value) {
  const effects = new Set()
  function read() {
    // 依赖收集
    if (currentEffect) {
      effects.add(currentEffect)
    }
    return value
  }
  function write(newValue) {
    // 触发依赖
    value = newValue
    for (const effect of effects) {
      effect()
    }
  }
  return [
    read,
    write
  ]
}
let currentEffect
function createEffect(effect) {
  currentEffect = effect
  effect()
  currentEffect = null
}