<template lang="html">
  <form class="" v-on:submit.prevent='userRegister'>
    username: <input type="text" name="" value="" v-model="register.username"><br>
    password: <input type="text" name="" value="" v-model="register.password"><br>
    email: <input type="text" name="" value="" v-model="register.email"><br>
    <button type="submit" name="button">Submit</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      register: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    userRegister () {
      this.$http.post('/register', this.register)
      .then(() => {
        this.$router.push('/')
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
