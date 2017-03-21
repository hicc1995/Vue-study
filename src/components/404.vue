<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link to="/">home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'notfound',
    data() {
      return {
        msg: 'Page is not found'
      }
    }
  }

</script>
<style scope>
  div {
    text-align: center;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  a {
    color: #42b983;
    text-decoration: none;
  }

</style>
