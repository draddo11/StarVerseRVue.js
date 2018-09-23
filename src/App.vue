<template>
    <div id ='app'>
        <h3>Starbase Router</h3>
        <h4>
            <router-link class='link' to="/data/people">Meet the characters  </router-link> ||
            <router-link class='link' to="/data/planets">Explore the planets</router-link>
        
        </h4>
        <router-view></router-view>
     </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  background-color: #2c3e50;
  margin-top:60px;
}
body{
  background-color: #2c3e50;
}

.link,.link:hover,.link:visited,.link:active{
    color:#4FC080;
}
 .item-card{
border:2px solid #4FC080;
border-radius: 4px;
padding:5px;
padding-bottom:10px;
cursor:pionter;
 }
</style>
