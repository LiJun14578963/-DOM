const div = dom.find('#test>.red')[0] // 获取对应的元素
//console.log(div)

dom.style(div, 'color', 'red') // 设置 div.style.color
dom.style(div, 'color') //查看div.style.color
dom.style(div,{background: '#666',border:'2px solid #000'})//当name为对象是添加style

const divList = dom.find('.red')// 获取多个 div.red 元素
//console.log(divList)


dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素