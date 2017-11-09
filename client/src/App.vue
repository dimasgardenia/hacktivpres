<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <sidebar :articles='articles'/>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
import navbar from '@/components/navbar'
export default {
  name: 'app',
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticle (req) {
      this.$http.get('/api/home', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({data}) => {
        console.log(data)
        this.articles = data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getArticle()
  },
  components: {
    sidebar,
    navbar
  }
}
</script>

<style>

</style>
