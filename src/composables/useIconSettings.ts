import { reactive } from 'vue'

export interface IconSettings {
  size: number
  rotate: number
  strokeWidth: number
  fillOpacity: number
}

const state = reactive<IconSettings>({
  size: 100,
  rotate: 0,
  strokeWidth: 2,
  fillOpacity: 0
})

interface UseIconSettings {
  state: IconSettings
  setSize: (value: number) => void
  setRotate: (value: number) => void
  setStrokeWidth: (value: number) => void
  setFillOpacity: (value: number) => void
}

export const useIconSettings = (): UseIconSettings => {
  return {
    state,
    setSize: (value): void => {
      state.size = value
    },
    setRotate: (value): void => {
      state.rotate = value
    },
    setStrokeWidth: (value): void => {
      state.strokeWidth = value
    },
    setFillOpacity: (value): void => {
      state.fillOpacity = value
    }
  }
}
