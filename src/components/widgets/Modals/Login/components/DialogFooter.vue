<script setup lang="ts">
  import { ROUTES } from '@/api/routes.ts'
</script>

<template>
  <footer class="login-dialog__footer">
    <p class="login-dialog__terms">
      Продолжая, вы соглашаетесь с
      <a :href="ROUTES.TERMS">условиями использования</a>
      и
      <a :href="ROUTES.PRIVACY">политикой конфиденциальности</a>
    </p>
  </footer>
</template>

<style lang="css" scoped>
  .login-dialog__footer {
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
  }

  .login-dialog__terms {
    font-size: 0.875rem;
    color: var(--secondary-color);
    opacity: 0.7;
    text-align: center;
    line-height: 1.5;
  }
</style>
