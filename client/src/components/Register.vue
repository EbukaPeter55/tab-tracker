<template>
    <div>
 <h1>Register</h1>

 <input type="email"
 name="email"
 v-model="email"
 placeholder="email"/>
 <br>
 <input type="password"
 name="password"
 v-model="password"
 placeholder="password" />
 <br>
 <button @click="register">Register</button>
    </div>
</template>

<script>
/* eslint-disable */
/**eslint-disable-next-line */
//Everything inside the script tag is called the controller
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() { 
    return {
  email: '',
  password: ''
    }
  },
  
  methods: {
      async register (){
        await AuthenticationService.register({
              email: this.email,
              password: this.password
          })
    
      }
  }
  
}
</script>

<style scoped>

</style>