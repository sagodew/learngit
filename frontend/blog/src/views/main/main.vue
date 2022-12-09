<!--主页面 -->
<template>
  <div>
    <div id="header">
      <Header></Header>
    </div>
    <div id="content">
      <BlogContent></BlogContent>
    </div> 
  </div>  
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import BlogContent from '@/components/BlogContent.vue'
  export default {
    name: 'main',
    data () {
      return {
      };
    },
  
    components: {Header,BlogContent},
  
    computed: {},
  
    mounted: {},
  
    methods: {}
  }
  
  </script>
  <style lang="scss" scoped>
      #content{
        margin-top:30px;
        margin-left: 315px;
        width: 1000px;
      }
  </style>