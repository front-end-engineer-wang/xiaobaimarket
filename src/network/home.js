import {require} from './request'


export function getdata(){
    return require({
        url:"/home/multidata"
    })
}
export function getgoodsdata(type,page){
    return require({
        url:"/home/data",
        params: {
            type,
            page
        }
    })
}