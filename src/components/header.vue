<template>
  <header>
    <ul id="nav">
      <li v-for="item in items" :key="item.id">
        <router-link :to="item.path" class="nav-link">{{item.text}}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            path: '/',
            text: '首页'
          },
          {
            path: '/404',
            text: '失效'
          },{
            path: '/404',
            text: '失效'
          }
        ]
      }
    },
    methods: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    position: fixed;
    width: 100%;
    top: 0;
    padding:10px 50px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    background: #fff;
    transition: background-color 2s ease-in-out;
  }
  
  #nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    right: 60px;
    top: 10px;
    height: 40px;
    line-height: 40px;
  }
  .nav-link{
      padding-bottom: 4px;
      cursor: pointer;
  }
  .nav-link:hover{
      border-bottom: 3px solid #42b983;
  }
  li {
    display: inline-block;
    position: relative;
    margin: 0 0.6em;
  }
  
  a {
    color: #34495e;
    text-decoration: none;
  }

</style>
