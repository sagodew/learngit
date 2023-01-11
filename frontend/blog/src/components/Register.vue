<!-- 注册 -->
<template>
    <div id="Register">
      <div class="box">
          <div class="title"><span>注册</span></div>
          <div class="message">
            <form method="post" action="register">
              <div class="form-group">
                <label class="control-label">用户名</label>
                <input class="form-control" name="username" type="text" placeholder="字母和数字的组合，不少于5位"/>
              </div>
              <div class="form-group">
                <label class="control-label">密码</label>
                <input class="form-control" name="password" type="password" placeholder="请输入密码" />
              </div>
              <div class="form-group">
                <label class="control-label">确认密码</label>
                <input class="form-control" name="confirmPassword" type="text" placeholder="请再输入一次密码" />
              </div>
              <div class="form-group">
                <button class="btn">提交</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
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
  .box{
    width: 350px;
    height: 330px;
    background-color: #fff;
    margin:30px 0px 500px 800px;
    padding: 10px 0px 0px 15px;
  }
  .form-group{
    margin: 20px 0px;
  }
  .form-group .control-label{
    display: block;
    margin-bottom:5px;
    font-weight:700;
    font-size: 15px;
  }
  .form-group .form-control{
    border: 1px solid #ccc;
    width: 325px;
    height: 28px;
    border-radius: 2px;
    padding-left:10px;
  }
  input{
    outline:none;
  }
  .form-group .form-control:focus{
    border: 1px solid #03a9f4;
  }
  ::-webkit-input-placeholder{
    color: #555;
    font-size: 8px;
  }
  .form-group .remember{
    font-weight:700;
    font-size: 15px;
  }
  .form-group .forget-password a{
    text-decoration: none;
    color:black;
    font-size: 15px;
    float: right;
  }
  .form-group .btn{
    width: 330px;
    height: 35px;
    border: none;
    background:#03a9f4;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
  }
  </style>