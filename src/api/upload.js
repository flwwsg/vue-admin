import request from '@/utils/request'

export function uploadVideo(formData) {
  return request({
    url: '/token/upload/video',
    method: 'post',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}
