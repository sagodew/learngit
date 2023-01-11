<!--  -->
<template>
  <div id="header">
        <div id="nav">
            <div id="log">
                <img src="@/assets/image/logo/logo.png" height="75%" width="75%"/>
            </div>
            <div id="navMeau">
                <ul id="navbar">
                    <li @click="$router.push({path:'/blog'})">博客</li>
                    <li @click="$router.push({path:'/essay'})">随笔</li>
                    <li @click="$router.push({path:'/share'})">分享</li>
                    <li @click="$router.push({path:'/tag'})">标签</li>
                </ul>
            </div>
            <div id="blog_button">
              <button class="login button"><a href>登录</a></button>
              <button class="register button"><a href>注册</a></button>
            </div>
            <div id="search">
              <button class="search-btn" type="submit"><i class="fa fa-search"></i></button>
              <input class="search-input"   type="text" placeholder="搜索"/>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>
<style lang='scss' scoped>
#header {
  background: #fff;
  height: 50px;
  color:  #333;
}
#nav {
  padding-right:15px;
  padding-left:15px;
  margin-left: 300px;
  padding-top: 9px;
  float: left;
  width: 1150px;
}
#log{
  float: left;
}
#navMeau {
  float: left;
}

#navbar li{
  float: left;
  list-style: none;
  margin-top:-10px;
  padding-right: 40px;
  font-size: 14px;
}
#navbar li:hover{
  color: #03a9f4;
  cursor: pointer;
}
#search {
  float: right;
  margin-top:5px;
  margin-right: 30px;
}
#blog_button {
  float: right;
  margin-top:1px;
}
.button {
  height: 30px;
  width: 70px;
}
.button a{
  text-decoration: none;
}
.login{
  border-style: none;
}
.login a{
  color:black;
}
.register{
  border-style: none;
  border-radius:6%;
  background-color: #03a9f4;
}
.register a{
  color: #fff;
}
.login:hover{
  border: 1px solid #ccc;
  border-radius:6%;
}
.register:hover{
  background-color: #17b2f9;
}
.search-btn{
  border-style: none;
}
.fa-search{
   color: #ccc;
}
.fa-search:hover{
   color: rgb(120, 120, 120);
}
.search-input{
  border-style: none;
  width: 60px;
  font-size: 14px;
}
.search-input:focus{
  outline: none;
  width: 100px;
}


</style>