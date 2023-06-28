import { ref } from 'vue'
export const newCount = ref(100)
const incrementGlobalCount = () => {
  newCount.value += 1000
}

export function useCountStore() {
  const localCount = ref(50)
  const incrementLocalCount = () => {
    localCount.value += 80
  }

  return {
    localCount,
    incrementLocalCount,
    newCount,
    incrementGlobalCount
  }
}
