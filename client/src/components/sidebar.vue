<template lang="html">
  <div>
  	<div>
  		<h1>Your Article</h1>
          <div role="tabpanel">
              <div class="col-sm-3">
                  <div class="nav nav-pills brand-pills nav-stacked" role="tablist" v-for='article in articles'>
                      <router-link :to="`/${article._id}`">
                        <p role="presentation" class="">{{ article.title }}</p>
                      </router-link>
                  </div>
              </div>
          </div>
  	</div>
  </div>
</template>
<script>
export default {
  props: ['articles']
}
</script>

<style lang="css">
</style>
