<template>
  <RouterView />
</template>


<script setup>

import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

//

const isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

</script>


<style scoped>

</style>