import { onMounted, onUnmounted } from "vue"

// EventTarget: 事件目标对象
// listener: 事件类型
// handle: 事件处理函数}
export default (target: EventTarget, listener: keyof WindowEventMap | string, handle: EventListenerOrEventListenerObject) => {
   onMounted(() => {
      target.addEventListener(listener, handle)
   })
   onUnmounted(() => {
      target.removeEventListener(listener, handle)
   })
}