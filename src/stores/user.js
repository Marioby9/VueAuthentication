import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  const user = ref(null)
  const login = (credentials) => user.value = credentials
  const isLogged = () => computed(() => {
    return user.value != null ? true : false
  })

  watch(user, (newUser) => {
    console.log(newUser)
  })

  return { login, isLogged }

})
