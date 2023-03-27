/*这个字符串中的每个字每出现了多少次*/
function stringCount(str) {
  if (!str) {
    return;
  }
  let obj = {};
  LowStr = str.toLocaleLowerCase(); //将字符串转为小写
  for (let i = 0; i < LowStr.length; i++) {
    let key = LowStr[i];
    //如果存在
    if (obj[key]) {
      obj[key]++;
    }
    //如果不存在
    else {
      obj[key] = 1;
    }
  }

  for (j in obj) {
    console.log(`${j}出现了${obj[j]}次`);
  }
}

stringCount('aabb')  
/**
 * a出现了2次
*  b出现了2次
 */