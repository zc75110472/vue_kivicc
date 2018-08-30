let shopTools = {}
let shop = JSON.parse(window.localStorage.getItem('shopDetail') || "{}")
// 增
shopTools.addUpdate = function (goods) {
  // 判断是否存在
  if (shop[goods.id]) {
    shop[goods.id] += goods.num
  }else {
    shop[goods.id] = goods.num
  }
  this.saveShop(shop)
}
// 删
shopTools.delete = function (id) {
  delete shop[id]
  this.saveShop(shop)
}
// 获取
shopTools.getShop = function () {
  return JSON.parse(window.localStorage.getItem('shopDetail') || '{}')
}
// 获取总数
shopTools.getShopCount = function () {
  let sum = 0;
  for (let id in shop) {
    sum += shop[id]
  }
  return sum
}
// 存储
shopTools.saveShop = function () {
  window.localStorage.setItem('shopDetail',JSON.stringify(shop))
}

export default shopTools
