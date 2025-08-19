import { ref, type Ref } from 'vue'

const currentIconRaw: Ref<string> = ref<string>('')

export interface UseIconRemote {
  currentIconRaw: Ref<string>
  setIconRaw: (raw: string) => void
}

export const useIconRemote = (): UseIconRemote => {
  const setIconRaw = (raw: string): void => {
    currentIconRaw.value = raw
  }

  return { currentIconRaw, setIconRaw }
}
