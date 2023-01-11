<!-- 登录 -->
<template>
  <div class="login">
     <div class="header"><Header></Header></div>
     <div class="login_box"><Login></Login></div>
     <div class="footer"><Footer></Footer></div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
    };
  },

  components: {Header,Login,Footer},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>



</style>