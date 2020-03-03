<template>
  <div class="com-upload-image">
    <el-upload
      class="avatar-uploader"
      :disabled="disabled"
      v-if="!image_url"
      :class="disabled ? 'no-upload' : ''"
      :action="uploadUrl()"
      :show-file-list="false"
      :on-success="onSuccess"
      :on-error="onError"
      :before-upload="beforeUpload"
    >
      <div class="no-img m-t-60">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </div>
    </el-upload>
    <div class="img-info no-allowed" v-if="disabled && image_url">
      <img :src="image_url" />
    </div>
    <div class="img-info" v-else-if="!disabled && image_url">
      <img :src="image_url" />
      <div class="delete-info">
        <div class="label">
          <i class="el-icon-upload-success el-icon-check icon-success"></i>
        </div>
        <i class="el-icon-delete" @click="onRemove"></i>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @author LeeYunxiang & C耀H
 * @desc 不用card-list的组件，可以不用再绑数组，只适用于传一张图片的情景
 * @param {Function} onSuccess 成功回调
 * @param {Function} onError 失败回调
 * @param {Function} beforeUpload 上传前回调
 * @param {Function} onRemove 移除回调
 * @param {String} image_url 图片url
 */

export default {
  name: 'ComUploadImage',
  props: {
    onSuccess: {
      type: Function,
      default: () => {}
    },
    onError: {
      type: Function,
      default: () => {}
    },
    beforeUpload: {
      type: Function,
      default: () => {}
    },
    onRemove: {
      type: Function,
      default: () => {}
    },
    image_url: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 上传图片路径
    uploadUrl() {
      return `${process.env.VUE_APP_API_ROOT}upload`;
    }
  }
};
</script>
<style lang="scss" scoped>
// cyh
.com-upload-image {
  display: inline-block;
}
/deep/.avatar-uploader {
  width: 150px;
  height: 150px;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
  margin-bottom: 10px;
  .el-upload {
    width: 150px;
    height: 150px;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
  }
  .el-upload:hover {
    border-color: #409eff;
    color: #409eff;
  }
}
.avatar-uploader:nth-child(1) {
  margin-left: -8px;
}
.no-img {
  i {
    font-size: 28px;
    color: #8c939d;
  }
}
.img-info {
  width: 150px;
  height: 150px;
  display: inline-block;
  border-radius: 6px;
  position: relative;
  margin-right: 20px;
  margin-bottom: 10px;
  vertical-align: top;
  img {
    width: 150px;
    height: 150px;
    border-radius: 6px;
  }
  .delete-info {
    display: block;
    position: absolute;
    width: 150px;
    height: 150px;
    z-index: 2;
    background: #000000;
    opacity: 0;
    top: 0;
    left: 0;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.5s;
    overflow: hidden;
    &:hover {
      display: block;
      opacity: 0.5;
      transition: all 0.5s;
    }
    .el-icon-delete {
      line-height: 150px;
      cursor: pointer;
      color: white;
      font-size: 20px;
    }
  }
}
.no-img {
  line-height: 70px;
  margin: 42px auto;
}
.label {
  width: 46px;
  height: 26px;
  background-color: #13ce66;
  color: #ffffff;
  transform: rotate(45deg);
  text-align: center;
  position: absolute;
  right: -17px;
  top: -7px;
  .icon-success {
    transform: rotate(-45deg);
  }
}
.no-allowed {
  cursor: not-allowed;
  background: #000000;
  opacity: 0.7;
}
/deep/.no-upload {
  .el-upload {
    cursor: not-allowed;
    background: #f5f7fa;
  }
}
</style>
