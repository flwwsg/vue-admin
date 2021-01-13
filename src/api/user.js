import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/public/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/token/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/token/user/logout',
    method: 'post'
  })
}
