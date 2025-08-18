import { ref } from 'vue'
import type { Ref } from 'vue'

const currentIconName = ref<string>('align-end-vertical')

export const useIcon = (): { currentIconName: Ref<string> } => ({ currentIconName })
