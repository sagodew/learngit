<!--找回密码 -->
<template>
    <div class="forgetPassword">
       <div class="header"><Header></Header></div>
       <div class="forgetPassword_box"><ForgetPassword></ForgetPassword></div>
       <div class="footer"><Footer></Footer></div>
    </div>
  </template>
  
  <script>
  import ForgetPassword from '@/components/ForgetPassword.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    data () {
      return {
      };
    },
  
    components: {Header,ForgetPassword,Footer},
  
    computed: {},
  
    mounted: {},
  
    methods: {}
  }
  
  </script>
  <style lang='scss' scoped>
  
  
  
  </style>