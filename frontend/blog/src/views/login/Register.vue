<!-- 注册 -->
<template>
    <div class="register">
       <div class="header"><Header></Header></div>
       <div class="register_box"><Register></Register></div>
       <div class="footer"><Footer></Footer></div>
    </div>
  </template>
  
  <script>
  import Register from '@/components/Register.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    data () {
      return {
      };
    },
  
    components: {Header,Register,Footer},
  
    computed: {},
  
    mounted: {},
  
    methods: {}
  }
  
  </script>
  <style lang='scss' scoped>
  
  
  
  </style>