<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/404">404</router-link>
  </div>
</template>

<script>
let str = "hi cc" ;
export default {
  name: 'home',
  data () {
    return {
      msg: str
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  text-align: center;
}
h1, h2 {
  font-weight: normal;
  font-size:40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
