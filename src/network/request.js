import axios from 'axios'


export function require(config){
    const instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })

    // //axios拦截器的使用
    // // 有4种，请求成功，请求失败，响应成功，响应失败
    // //请求拦截
    // instance.interceptors.request.use(config=>{    //默认参数为config
    //     console.log(config)
    //     return config        //拦截之后要返回，不然会报错
    // },err=>console.log(err))     //请求失败

    // //响应拦截
    // instance.interceptors.response.use(res=>{
    //     console.log(res)
    // },err=>{
    //     console.log(err)
    // })

    return instance(config)    
}
