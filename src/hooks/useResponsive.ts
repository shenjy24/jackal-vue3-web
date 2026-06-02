import { computed, onMounted, onUnmounted, ref } from 'vue'

const mobileBreakpoint = 768

export function useResponsive() {
  const width = ref(window.innerWidth)

  function updateWidth() {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return {
    width,
    isMobile: computed(() => width.value < mobileBreakpoint),
  }
}
