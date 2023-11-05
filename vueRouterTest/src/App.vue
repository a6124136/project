<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'
</script>

<template>
      <nav>
        <HeaderView></HeaderView>
      </nav>
  
  <RouterView />
</template>

<style scoped>
</style>
