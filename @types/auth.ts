export type Provider = 'yandex' | 'google' | 'github' | 'vk'

export interface LoginEmits {
  (event: 'login', provider: Provider): void
}

export interface SimpleLoginEmits {
  (event: 'login'): void
}
