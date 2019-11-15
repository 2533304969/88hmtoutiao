<template>
  <!-- 头部组件 -->
  <el-row type="flex" justify="space-between" align="middle">
    <el-col :span="8" class="left">
      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="3" class="right">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img src="../assets/img/6$1B1DNR{Q0Q`1S2FF(V(BS.jpg" alt style="width:30px" />
          <span>娃哈哈</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>Git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.left {
  display: flex;
  align-items: center;
  i {
    font-size: 24px;
  }
  span {
    margin-left: 10px;
  }
}
.right {
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    margin-right: 5px;
  }
}
</style>
