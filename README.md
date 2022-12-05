# solidjs-enjoy

# 特点：

写法类似react：函数是一个组件

响应式系统类似于 vue3

没有虚拟dom，直接变成dom，意味着执行速度非常快

# 简单实现

```js
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

```

# Link

[solidjs](https://github.com/cuixiaorui/solidjs-crash-course)
