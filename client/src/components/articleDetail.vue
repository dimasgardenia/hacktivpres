<template lang="html">
  <div class="">
    <div class="row">
      <img :src="content.image" alt=""><br><br>
        <p class="react-native">{{ content.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
    getArticleById () {
      this.$http(`/api/home/${this.id}`)
      .then(({data}) => {
        console.log('ini', data)
        this.content = data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArticleById()
  },
  watch: {
    id () {
      this.getArticleById()
    }
  }
}
</script>

<style lang="css">
</style>
