<!-- 登录 -->
<template>
  <div id="login">
    <div class="box">
        <div class="title"><span>请登录</span></div>
        <div class="message">
          <form method="post" action="login">
            <div class="form-group">
              <label class="control-label">账号</label>
              <input class="form-control" name="username" type="text" />
            </div>
            <div class="form-group">
              <label class="control-label">密码</label>
              <input class="form-control" name="password" type="password" />
            </div>
            <div class="form-group">
              <label class="remember">
                <input type="checkbox" name="remember" />记住登录
              </label>
              <span class="forget-password"><a href="">忘记密码？</a></span>
            </div>
            <div class="form-group">
              <button class="btn">登录 Use it</button>
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
  height: 310px;
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
  width: 330px;
  height: 28px;
  border-radius: 2px;
}
input{
  outline:none;
}
.form-group .form-control:focus{
  border: 1px solid #03a9f4;
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