<template lang="html">
  <div class="">
  {{ msg }}
  <form class="" method="post" v-on:submit.prevent='userLogin'>
    Username: <input type="text" name="" value="" v-model="formLogin.username">
    password: <input type="text" name="" value="" v-model="formLogin.password">
    <button type="submit" name="button">Login</button>
  </form>
  <button type="button" name="button"><router-link :to="{ path: '/register'}">Register</router-link></button>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'please login to view article',
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin () {
      this.$http.post('/login', this.formLogin)
      .then(response => {
        localStorage.setItem('token', response.data)
        this.$router.push('/home')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
