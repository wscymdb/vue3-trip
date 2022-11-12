// 计算两个日期的差
export const getDiffDate = (startDate, endDate) => {
  const startStamp = new Date(startDate).getTime()
  const endStamp = new Date(endDate).getTime()

  const computedStamp = endStamp - startStamp - 86400000
  return new Date(computedStamp).getDate()
}

export function formatDate(timestamp, fmt = 'MM月dd日') {
  const date = new Date(timestamp)

  const dateObj = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),

    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }

  Object.keys(dateObj).forEach((item) => {
    const reg = new RegExp(item, 'g')
    const value = (dateObj[item] + '').padStart(2, 0)
    fmt = fmt.replaceAll(reg, value)
  })

  return fmt
}
