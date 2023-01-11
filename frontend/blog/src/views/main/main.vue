<!--主页面 -->
<template>
  <div>
    <div id="header">
      <Header></Header>
    </div>
    <div id="content">
      <div class="content_left">
        <div v-if=" path === '/' " >
           <BlogContent></BlogContent>
        </div>
        <div v-else>
          <router-view></router-view>
       </div>
      </div>
      <div class="content_right">
        <RankingList></RankingList>
     </div>
    </div> 
    <div id="footer">
        <Footer></Footer>
    </div>
  </div>  
  </template>
  
  <script>
  import Header from '@/components/Header.vue'
  import BlogContent from '@/components/BlogContent.vue'
  import RankingList from '@/components/RankingList.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'main',
    data () {
      return {
        path:"",
      };
    },
    created(){
      this.path=this.$route.path;
    },
  
    components: {Header,BlogContent,RankingList,Footer},
  
    computed: {
      
    },
  
    mounted: {},
  
    methods: {
    

    }
  }
  
  </script>
  <style lang="scss" scoped>
      #header{
        position:fixed
      }
      #content{
        overflow: hidden;
        padding-top:60px;
      }
      .content_left{
        float: left;
        margin-left: 295px;
        width: 880px;
      }
      .content_right{
        float: left;
      }
  </style>