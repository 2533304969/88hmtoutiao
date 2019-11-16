<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>全部图文</span>
    </div>
    <div>
      <el-form label-width="100px">
        <el-form-item label="文章状态：">
          <el-input class="input"></el-input>
        </el-form-item>
        <el-form-item label="频道列表：">
          <el-input class="input"></el-input>
        </el-form-item>
        <el-form-item label="时间选择：">
          <div class="block">
            <el-date-picker
              v-model="value"
              type="daterange"
              editable="true"
              clearable="true"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>
  .input {
    width: 300px;
  }

</style>
