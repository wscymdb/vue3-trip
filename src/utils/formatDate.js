export function formatMonthDay(timestamp) {
  const date = new Date(timestamp)
  const m = (date.getMonth() + 1 + '').padStart(2, '0')
  const d = (date.getDate() + '').padStart(2, '0')

  return `${m}月${d}日`
}

// 计算两个日期的差
export const getDiffDate = (startDate, endDate) => {
  const startStamp = new Date(startDate).getTime()
  const endStamp = new Date(endDate).getTime()

  const computedStamp = endStamp - startStamp
  return new Date(computedStamp).getDate()
}
