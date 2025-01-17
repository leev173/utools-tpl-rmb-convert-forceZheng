import Nzh from 'nzh'

const getDigitConvertList = (numStr) => {
  const isQian = numStr.includes(',')
  console.log("numStr:", numStr, "isQian:", isQian)
  if (isQian) numStr = numStr.replace(/,/g, '')
  const list = [{
    title: Nzh.cn.toMoney(numStr, { outSymbol: false, forceZheng: true }),
    description: '复制 - 大写人民币'
  }]
  if (!isQian && numStr.split('.')[0].length > 3) {
    list.push({
      title: numStr.replace(/\d+/, s => s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')),
      description: '复制 - 人民币千分位'
    })
  }
  return list
}

window.exports = {
  rmb: {
    mode: 'list',
    args: {
      placeholder: '输入阿拉伯数字',
      search: (action, searchWord, callbackSetList) => {
        searchWord = searchWord.trim()
        if (!searchWord) return callbackSetList([])
        if (!/^(\d{1,15}|\d{1,3}(?:,\d{3}){1,4})(?:\.\d{1,2})?$/.test(searchWord)) {
          return callbackSetList([])
        }
        callbackSetList(getDigitConvertList(searchWord))
      },
      select: (action, itemData) => {
        window.utools.hideMainWindow()
        window.utools.copyText(itemData.title)
        window.utools.outPlugin()
      }
    }
  },
  converter: {
    mode: 'none',
    args: {
      enter: (action) => {
        window.utools.hideMainWindow()
        const result = Nzh.cn.toMoney(action.payload.replace(/,/g, ''), { outSymbol: false, forceZheng: true })
        window.utools.copyText(result)
        window.utools.showNotification('"' + result + '" 已复制')
        window.utools.outPlugin()
      }
    }
  }
}
