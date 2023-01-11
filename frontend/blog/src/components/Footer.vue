<!-- 尾部 -->
<template>
  <div class="footer">
        <div class="container">
                <div class="footer-nav">
                   <a class="footer-nav-logo" href> <img src="@/assets/image/logo/logo.png" width="79px" height="22px"/></a>
                   <span class="footer-item">Copyright © Mtons</span>
                </div>
                <div class="footer-back"> 
                   <span class="footer-back-item">Powered by 
                    <a href="">mblog</a>
                   </span>
                </div>
        </div>
  </div>
</template>

<script>
export default {
  name:'Footer',
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
.footer{
    height: 60px;
    background-color: #fff;
}
.container{
    overflow: hidden;
    padding: 20px 315px;
    
}
.footer-nav{
    float: left;
}
.footer-back{
    float: right;
}
.footer-nav-logo img{
    vertical-align: middle;
}
.footer-item{
    font-size: 15px;
    margin-left:20px;
    color: #5f676f;
}
.footer-back-item{
    font-size: 15px;
    color: #5f676f;
}
.footer-back-item a{
    text-decoration: none;
    color:#ccc;
}
.footer-back-item a:hover{
    color: #5f676f;
}
</style>