<!--  -->
<template>
  <div id="header">
        <div id="nav">
            <div id="log">
                <img src="../assets/image/logo/logo.png" height="75%" width="75%"/>
            </div>
            <div id="navMeau">
                <ul id="navbar">
                    <li>博客</li>
                    <li>随笔</li>
                    <li>分享</li>
                    <li>标签</li>
                </ul>
            </div>
            <div id="search">
              <input type="text" />
            </div>
            <div id="button">
              <button>登录</button>
              <button>注册</button>
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
#search{
  float: left;
}
#button{
  float: right;
}
</style>