// 公共请求接口
import axios from 'axios'

export function $post(url, data) {  //post
  return axios.post(url, data,)
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if(res.status === 401){
        return Promise.reject(res.data);
      }else if(res.status === 400){
        return Promise.reject(res.data.message||"操作失败！")
      }else if(res.status === 500){
        return Promise.reject("请求异常，请稍后再试！");
      }else if (res.status == 302) {
       document.location.href = '#/login';
        return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })
}

export function $get(url, data) {   //get
  return axios.get(url, {
    params: data
  })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if(res.status === 401){
        return Promise.reject(res.data);
      }else if(res.status === 400){
        return Promise.reject(res.data.message||"操作失败！")
      }else if(res.status === 500){
        return Promise.reject("请求异常，请稍后再试！");
      }else if (res.status == 302) {
        
       document.location.href = '#/login';
      return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })
}

export function $delete(url, data) {//delete
  return axios.delete(url, { params: data })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if(res.status === 401){
        return Promise.reject(res.data);
      }else if(res.status === 400){
        return Promise.reject(res.data.message||"操作失败！")
      }else if(res.status === 500){
        return Promise.reject("请求异常，请稍后再试！");
      }else if (res.status == 302) {
        document.location.href = '#/login';
       return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })
}

export function $put(url, data) { //put
  return axios.put(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if(res.status === 401){
        return Promise.reject(res.data);
      }else if(res.status === 400){
        return Promise.reject(res.data.message||"操作失败！")
      }else if(res.status === 500){
        return Promise.reject("请求异常，请稍后再试！");
      }else if (res.status == 302) {
      document.location.href = '#/login';
       return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })
}