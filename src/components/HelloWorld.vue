<template>
  <h1 class="hello" @click="handleClick">{{ msg }}</h1>
  <Test/>
</template>

<script lang="ts" setup>
import Test from './Test.vue'
defineProps({
  msg: {
    type: String,
    default: 'Hello World!'
  }
})

const handleClick = () => {
  console.log('click')
}
</script>

<style scoped>
.hello {
  color: #42b983;
}
</style>