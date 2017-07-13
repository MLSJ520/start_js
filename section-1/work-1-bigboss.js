/**
 * Created by kerovieux on 2017/1/9.
 */
const _ = require('lodash')

const way0 = (a, b) => {
  return _.filter(a, (itemForA) => {
    return _.includes(b, itemForA)
  })
}
const way1 = (a, b) => {
  const res = []
  _(a).forEach((itemForA) => {
    _.filter(b, (itemForB) => {
      if (itemForA === itemForB) {
        res.push(itemForB)
      }
    })
  })
  return res
}
const way2 = (a, b) => {
  const res = []
  _(a).forEach((itemForA) => {
    if (_.includes(b, itemForA)) {
      res.push(itemForA)
    }
  })
  return res
}
const way3 = (a, b) => {
  return a.filter((v) => {
    return b.includes(v)
  })
}
const way4 = (a, b) => {
  return _.intersection(a, b)
}

const seniorWay1 = (a = '', b = '') => {
  if (typeof (a) === typeof (b)) {
    if ((_.isString(a) && _.isString(b))) {
      return _.intersection(_.toArray(a), _.toArray(b))
    } else if (_.isArray(a) && _.isArray(b)) {
      return _.intersection(a, b)
    } else if (_.isObject(a) && _.isObject(b)) {
      _.intersection(a, b)
    }
    throw new Error('输入的两个参数类型不适合做比较')
  }
  throw new Error('输入的两个参数类型不同,不能进行比较')
}
console.log('seniorWay1', seniorWay1(['a', 'b', 'c'], ['a', 'b', 'c']))
console.log('b', way0(['a', 'b', 'c'], ['b', 'c', 'd']))
console.log('c', way1(['a', 'b', 'c'], ['b', 'c', 'd']))
console.log('d', way2(['a', 'b', 'c'], ['b', 'c', 'd']))
console.log('e', way3(['a', 'b', 'c'], ['b', 'c', 'd']))
console.log('f', way4(['a', 'b', 'c'], ['b', 'c', 'd']))
