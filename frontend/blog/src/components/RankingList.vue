<!-- 排行榜 -->
<template>
  <div class="ranking">
    <ul class="ranking_list">
        <li class="ranking_box">
            <div class="header">
                <h3 class="title"><i class="fa fa-area-chart"></i>热门文章</h3>
            </div>
            <div class="rangking_content">
                <ol class="rangking_content_list">
                     <li class="rangking_content_box">1111111</li>
                     <li class="rangking_content_box">2222222</li> 
                     <li class="rangking_content_box">3333333</li>        
                </ol>
            </div>
        </li>
        <li class="ranking_box">
            <div class="header">
                <h3 class="title"><i class="fa fa-bars"></i>最新文章</h3>
            </div>
            <div class="rangking_content">
                <ol class="rangking_content_list">
                     <li class="rangking_content_box">1111111</li>
                     <li class="rangking_content_box">2222222</li> 
                     <li class="rangking_content_box">3333333</li>        
                </ol>
            </div>
        </li>
        <li class="ranking_box">
            <div class="header">
                <h3 class="title"><i class="fa fa-comment-o"></i>最新评论</h3>
            </div>
            <div class="rangking_content">
                <ol class="rangking_content_list">
                     <li class="rangking_content_box">1111111</li>
                     <li class="rangking_content_box">2222222</li> 
                     <li class="rangking_content_box">3333333</li>        
                </ol>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

  name:"RankingList",
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
    .ranking{
        width: 292px;
    }
    .ranking_box{
        list-style: none;
        background: #fff;
        margin-left: -10px;
        padding:1px 10px 0px 10px;
        margin-bottom: 30px;
    }
    .title{
        margin-top: 10px;
        padding-bottom:10px;
        border-bottom: 1px solid black;
    }
    .title i{
        margin-right: 10px;
    }

    .rangking_content_list{
        margin: 0px 15px;
        padding:0px 0px 10px 0px;
    }

    .rangking_content_box{
         padding: 0px 0px 10px 0px;
    }
</style>