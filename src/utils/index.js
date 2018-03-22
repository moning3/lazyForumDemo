import moment from 'moment'

// 时间格式
export function formatDate (time, format = 'YYYY-MM-DD') {
  if (!time) {
    return ''
  }

  const date = new Date(time)

  return moment(date).format(format)
}
