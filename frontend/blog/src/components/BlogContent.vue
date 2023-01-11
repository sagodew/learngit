<!-- 内容组件 -->
<template>
  <div id="side-left">
    <div id="blog_content">
      <ul id="blog_content_list">
          <li class="content">
              <div class="content_box">
                <div class="content_img">
                    <a href=""><img src="../assets/image/blog/1.jpg" width="240px" height="133px"/></a>
                </div>
                <div class="content_text">
                    <h3 class="title"><a href="">标题</a></h3>
                    <div class="item_text">内容内容内容1111111111111111111</div>
                    <div class="item_info">
                      <ul>
                        <li class="author">
                            <div class="avatar">
                              <img src="../assets/image/blog/1670574073029.jpg" width="20px" height="20px" />
                              <a href="" >author</a>
                            </div>
                        </li>
                        <li class="ico-cat">
                            <span>随笔</span>
                        </li>
                        <li class="ico-time"><i class="icon-clock icon"></i>13天前</li>
                        <li class="ico-eye"><i class="icon-book-open icon"></i>1</li>
                        <li class="ico-like"><i class="icon-bubble icon"></i>0</li>
                      </ul>
                    </div>
                </div>
              </div>
          </li>
          <li class="content">
              <div class="content_box">
                <div class="content_img">
                    <a href=""><img src="../assets/image/blog/1.jpg" width="240px" height="133px"/></a>
                </div>
                <div class="content_text">
                    <h3 class="title"><a href="">标题</a></h3>
                    <div class="item_text">内容内容内容1111111111111111111</div>
                    <div class="item_info">
                      <ul>
                        <li class="author">
                            <div class="avatar">
                              <img src="../assets/image/blog/1670574073029.jpg" width="20px" height="20px" />
                              <a href="" >author</a>
                            </div>
                        </li>
                        <li class="ico-cat">
                            <span>随笔</span>
                        </li>
                        <li class="ico-time"><i class="icon-clock icon"></i>13天前</li>
                        <li class="ico-eye"><i class="icon-book-open icon"></i>1</li>
                        <li class="ico-like"><i class="icon-bubble icon"></i>0</li>
                      </ul>
                    </div>
                </div>
              </div>
          </li>
          <li class="content">
              <div class="content_box">
                <div class="content_img">
                    <a href=""><img src="../assets/image/blog/1.jpg" width="240px" height="133px"/></a>
                </div>
                <div class="content_text">
                    <h3 class="title"><a href="">标题</a></h3>
                    <div class="item_text">内容内容内容1111111111111111111</div>
                    <div class="item_info">
                      <ul>
                        <li class="author">
                            <div class="avatar">
                              <img src="../assets/image/blog/1670574073029.jpg" width="20px" height="20px" />
                              <a href="" >author</a>
                            </div>
                        </li>
                        <li class="ico-cat">
                            <span>随笔</span>
                        </li>
                        <li class="ico-time"><i class="icon-clock icon"></i>13天前</li>
                        <li class="ico-eye"><i class="icon-book-open icon"></i>1</li>
                        <li class="ico-like"><i class="icon-bubble icon"></i>0</li>
                      </ul>
                    </div>
                </div>
              </div>
          </li>
      </ul>
    </div>
    <div id="blog_page">
      <ul class="pagination">
        <li class="disable"><i class="fa fa-angle-left pagin"></i></li>
        <li class="active"><span class="pagin">1</span></li>
        <li class="disable"><i class="fa fa-angle-right pagin"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
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
 #blog_content_list{
    margin-left: -20px;
 }
 .content{
    background-color: #fff;
    padding: 15px 15px;
    list-style: none;
    margin-bottom: 30px;
 }
 .content_box{
  overflow:hidden
 }
 
 .content_img{
  margin-right: 15px;
  float: left;
 }
 .title{
  line-height: 1.3;
  margin:0px 0px 15px 0px;
 }
 .title a:hover{
  color:#03a9f4;
  cursor: pointer;
 }
 .title a{
  text-decoration:none;
  color: black;
  font-size: 18px;
 }
 .content_text{
  float: left;
}
 .item_text{
  min-height: 72px;
  line-height: 1.3;
 }
 .item_info ul{
  overflow:hidden;
  padding: 0px;
 }
 .item_info ul li{
  font-size: 14px;
  float: left;
  list-style: none;
  padding-right: 15px;
  color:rgb(120, 120, 120);
 }
 .avatar{
  display: inline-block;
 }
 .author img{
  vertical-align:middle;
  border-radius: 50%;
  
 }
 .author a{
  margin: 0px 3px;
  text-decoration: none;
  color:rgb(120, 120, 120);
 }
 .icon{
  margin-right:3px ;
 }

 .pagination{
  overflow:hidden;
  margin-left:450px;
 }

 .pagination li{
  border: 1px solid #ccc;
  background-color: #fff;
  list-style: none;
  float: left;
  width: 30px;
  height: 30px;
 }
 .pagin{
  float: left;
  margin-left:12px;
  margin-top:7px;
  color: #777;
 }
 .pagination li span{
  margin-left:10px;
  margin-top:5px;
 }
</style>