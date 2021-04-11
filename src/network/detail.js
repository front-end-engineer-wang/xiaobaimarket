import { require } from './request.js'

 export function getdetail(iid){
     return require({
         url:'/detail',
         params:{
             iid            
         }
     })
}

export function getrecommend(){
    return require({
        url:'/recommend'
    })
}

export class Goods{
    constructor(iteminfo,columns,services){
        this.title=iteminfo.title
        this.desc=iteminfo.desc
        this.newPrice=iteminfo.price
        this.oldPrice=iteminfo.oldPrice
        this.discount=iteminfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=iteminfo.lowNowPrice
    }
}

export class Shop{
    constructor(shopinfo){
        this.logo=shopinfo.shopLogo
        this.name=shopinfo.name
        this.fans=shopinfo.cfans
        this.sells=shopinfo.cSells
        this.score=shopinfo.score
        this.goodsCount=shopinfo.cGoods
    }
}