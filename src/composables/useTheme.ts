import { watch, type Ref } from 'vue'
import { usePreferredColorScheme, useStorage } from '@vueuse/core'

type Theme = 'light' | 'dark'

interface ThemeConfig {
  theme: Ref<Theme>
  toggleTheme: () => void
}

export const useTheme = (): ThemeConfig => {
  const preferredColorScheme = usePreferredColorScheme()
  const initialTheme: Theme = preferredColorScheme.value === 'dark' ? 'dark' : 'light'
  const theme = useStorage<Theme>('theme', initialTheme)

  const toggleTheme = (): void => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(
    theme,
    (newTheme: Theme) => {
      document.documentElement.classList.toggle('theme-dark', newTheme === 'dark')
      document.documentElement.classList.toggle('theme-light', newTheme === 'light')
    },
    { immediate: true }
  )

  return { theme, toggleTheme }
}
