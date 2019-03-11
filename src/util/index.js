// 合并购物车数据 同类 同店铺商品
export function filterShopCarContent(allData) {
  let showShopCar = [];
  allData.forEach(item => {
    item.checked_flag = false;
    if (showShopCar.indexOf(item) != -1) {
      let sku_index = showShopCar.indexOf(item);
      showShopCar[sku_index].num += 1;
    } else {
      showShopCar.push(item);
    }
  });
  return showShopCar
}
