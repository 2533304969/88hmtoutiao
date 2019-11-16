<template>
  <el-container>
    <el-aside class="left" style="width:200px">
      <div class="menu-title" style="background-color: #2e2f32">
        <img src="../../assets/img/logo_admin.png" alt />
      </div>
      <el-row>
        <el-col>
          <el-menu
            style="width:221px"
            background-color="#353b4e"
            text-color="#adafb5"
            active-text-color="#ffd04b"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="/home">
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">内容管理</template>
              <el-menu-item index="/publish">发布文章</el-menu-item>
              <el-menu-item index="/article">内容列表</el-menu-item>
              <el-menu-item index="2-3">评论列表</el-menu-item>
              <el-menu-item index="2-4">素材管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span>内容管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">图文数据</el-menu-item>
                <el-menu-item index="3-2">粉丝概况</el-menu-item>
                <el-menu-item index="3-3">粉丝画像</el-menu-item>
                <el-menu-item index="3-4">粉丝列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
              <span slot="title">账户信息</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <!-- 大容器 -->
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import layoutHeader from '../../components/layout-header'
export default {
  components: {
    'layout-header': layoutHeader
  }
}
</script>
<style lang="less" scoped>
.left {
  width: 200px;
  height: 100vh;
  background-color: #353b4e;
  overflow: hidden;
  .menu-title {
    width: 220px;
    padding: 20px 0;
    text-align: center;

    img {
      height: 30px;
    }
  }
}

.el-row {
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
