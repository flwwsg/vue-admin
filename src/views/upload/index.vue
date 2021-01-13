<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :inline="true" label-width="80px">
      <el-form-item label="视频文件">
        <el-upload
          ref="upload"
          class="upload-video"
          action="invalid"
          multiple
          :limit="1"
          :auto-upload="false"
          :file-list="fileList"
          :http-request="uploadFile"
          accept="*"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传mp4文件</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="课时">
        <el-select v-model="form.level" placeholder="请选择课时">
          <el-option label="第一课" value="1" />
          <el-option label="第二课" value="2" />
          <el-option label="第三课" value="3" />
          <el-option label="第四课" value="4" />
          <el-option label="第五课" value="5" />
          <el-option label="第六课" value="6" />
          <el-option label="第七课" value="7" />
          <el-option label="第八课" value="8" />
          <el-option label="第九课" value="9" />
          <el-option label="第十课" value="10" />
        </el-select>
      </el-form-item>
      <div style="margin-left: 20px">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即上传</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>

</template>

<script>

import { uploadVideo } from '@/api/upload'

export default {
  data() {
    return {
      form: {
        level: ''
      },
      fileList: []
    }
  },
  methods: {
    onSubmit() {
      this.$refs.upload.submit()
    },

    uploadFile(param) {
      const fileObj = param.file
      const formData = new FormData()
      formData.append('file', fileObj)
      formData.append('level', this.form.level)
      uploadVideo(formData).then(res => {
        this.$message.success('上传成功')
      }).catch(err => {
        console.log('get error', err)
      })
    }
  }
}
</script>
