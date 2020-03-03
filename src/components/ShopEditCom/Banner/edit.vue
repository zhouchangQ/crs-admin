<template>
  <div class="edit-container">
    <p class="edit-title">轮播图编辑</p>
    <div class="form-item" v-for="(item, index) in formData" :key="index">
      <el-row>
        <el-col class="mini-title" :span="10">
          <span class="red-x">*</span>
          上传类型
        </el-col>
        <el-col :span="14">
          <el-radio-group v-model="item.type" class="min-radio">
            <el-radio label="1">图片</el-radio>
            <el-radio label="2">视频</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="mt">
        <el-col :span="8">
          <upload-image
            :image_url="item.imgUrl"
            :on-error="uploadError"
            :on-remove="() => bannerPicRemove(index)"
            :on-success="file => onPicSuccess(file, index)"
            :before-upload="
              file =>
                _uploadValidate(
                  file,
                  [
                    { type: 'png', limit: 500 },
                    { type: 'jpg', limit: 500 },
                    { type: 'gif', limit: 1500 }
                  ],
                  { width: 750 }
                )
            "
          />
        </el-col>
        <el-col :span="16" v-if="item.type == 1">
          <p class="mini-title">跳转路径</p>
          <el-radio-group v-model="item.jump_way">
            <el-radio label="1">不跳转</el-radio>
            <el-radio label="2">商品</el-radio>
            <el-radio label="3">分类</el-radio>
            <el-radio label="4">活动页</el-radio>
            <el-radio label="5">直播列表</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="16" v-if="item.type == 2">
          <el-row class="mt">
            <el-col :span="8">
              <p class="mini-title">自动播放</p>
            </el-col>
            <el-col :span="16">
              <el-radio-group v-model="item.auto_play" class="min-radio">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row class="mt">
            <el-col :span="8">
              <p class="mini-title">循环播放</p>
            </el-col>
            <el-col :span="16">
              <el-radio-group v-model="item.circle_play" class="min-radio">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="ps-info" :span="24">建议图片大小在200KB以内（限制500KB以内）</el-col>
      </el-row>
    </div>
    <el-button icon="el-icon-plus" class="btn-add" @click="handleAdd">添加轮播</el-button>
  </div>
</template>

<script>
import UploadImage from '@/components/Public/ComUploadImage';
import UploadValidate from '@/mixins/UploadValidate.js';
import editBase from '@/components/ShopEditCom/Mixins/edit';
import { Loading } from 'element-ui';
export default {
  name: 'banner',
  mixins: [editBase, UploadValidate],
  components: { UploadImage },
  data() {
    return {
      // 轮播图数据
      formData: [
        {
          imgUrl: null, // 轮播图片链接
          height: null, // 轮播图片高度
          type: '1', // 跳转类型
          jump_way: '1', // 跳转路径
          auto_play: '1', // 是否自动播放
          circle_play: '1' // 是否循环播放
        }
      ]
    };
  },
  methods: {
    // 图片上传报错
    uploadError() {
      this.$message.error('上传失败，请重新上传');
      Loading.service({ fullscreen: true }).close();
    }, // 图片-移除-成功
    bannerPicRemove(index) {
      this.formData[index]['imgUrl'] = null;
      if (index === 0) {
        this.formData[0].height = 200;
      }
    }, // 图片-上传-成功
    onPicSuccess(res, index) {
      this.formData[index]['imgUrl'] = res.data;
      this.getImgHeight(res.data);
      // 上传成功，关闭loading
      Loading.service({ fullscreen: true }).close();
    }, // 添加轮播
    handleAdd() {
      this.shopEditList.map(item => {
        if (item.id == this.shopEditId) {
          this.formData.push(item.defaultData[0]);
        }
      });
    },
    getImgHeight(src) {
      if (!src) {
        return;
      }
      var img = new Image();
      img.src = src;
      img.onload = () => {
        this.formData[0].height = img.height / 2;
      };
    }
  },
  mounted() {
    console.log('轮播图编辑');
  }
};
</script>

<style lang="scss" scoped>
$wAndH: 80px;
.form-item {
  border: 1px solid #efeff1;
  padding: 15px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  .ps-info {
    font-size: 12px;
    color: #999;
  }
  .mt {
    margin-top: 10px;
  }
  .red-x {
    color: red;
  }
  .mini-title {
    font-size: 14px;
    color: #333;
    margin-top: 4px;
  }
  /deep/.avatar-uploader {
    width: $wAndH;
    height: $wAndH;
    .el-upload {
      width: $wAndH;
      height: $wAndH;
      .no-img {
        line-height: 20px;
        margin: 25px auto;
      }
    }
  }
  /deep/.img-info {
    width: $wAndH;
    height: $wAndH;
    margin-left: -8px;
    border: 1px solid #efeff1;
    img {
      width: $wAndH;
      height: $wAndH;
    }

    .delete-info {
      width: $wAndH;
      height: $wAndH;
    }
    .el-icon-delete {
      font-size: 15px;
      line-height: $wAndH;
    }
  }
}
/deep/.el-radio {
  width: $wAndH;
  margin-right: 0;
  margin-top: 5px;
}
/deep/.min-radio {
  .el-radio {
    width: 60px;
    margin-right: 0;
    margin-top: 5px;
  }
}
.btn-add {
  width: 90%;
  margin-left: 5%;
}
</style>
