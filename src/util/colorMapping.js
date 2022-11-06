// 这个玩意的结构大概是下面这个样子的
//  {
//   key: number, 表示对应的是第几条线
//   value: string, 颜色编码
//  }
export var color_for_highlight = {};

export function getRandomColor(){
    return '#' + Math.floor(Math.random()*0xffffff).toString(16);
}