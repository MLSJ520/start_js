/**
 * Created by PetitKero on 1/3/2017.
 */
const _ = require('lodash')

const people = [
  {
    user_id: 1,
    display_name: '李世民',
    job: {
      group: '皇族',
      position: '皇帝',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '京城',
      area: '故宫',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 2,
    display_name: '武媚娘',
    job: {
      group: '皇族',
      position: '皇后',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '京城',
      area: '故宫',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 3,
    display_name: '李渊',
    job: {
      group: '皇族',
      position: '太上皇',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '京城',
      area: '故宫',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 4,
    display_name: '韩非子',
    job: {
      group: '公务员',
      position: '副总理',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '郑州',
      area: '东城',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 5,
    display_name: '李斯',
    job: {
      group: '公务员',
      position: '总理',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '太原',
      area: '市中心',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 6,
    display_name: '朴智星',
    job: {
      group: '平民',
      position: '运动员',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '首尔',
      area: '明洞',
    },
    profile: {
      nation: '朝鲜族',
      related: [],
    },
  },
  {
    user_id: 7,
    display_name: '金三顺',
    job: {
      group: '平民',
      position: '主妇',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '釜山',
      area: '郊区',
    },
    profile: {
      nation: '朝鲜族',
      related: [],
    },
  },
  {
    user_id: 8,
    display_name: '金泰妍',
    job: {
      group: '平民',
      position: '歌手',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '首尔',
      area: '明洞',
    },
    profile: {
      nation: '朝鲜族',
      related: [],
    },
  },
  {
    user_id: 9,
    display_name: '徐贤',
    job: {
      group: '平民',
      position: '歌手',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '首尔',
      area: '明洞',
    },
    profile: {
      nation: '朝鲜族',
      related: [],
    },
  },
  {
    user_id: 10,
    display_name: '陆游',
    job: {
      group: '平民',
      position: '诗人',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '郑州',
      area: '郊区',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 11,
    display_name: '李白',
    job: {
      group: '平民',
      position: '诗人',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '京城',
      area: '东城',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 12,
    display_name: '公子小白',
    job: {
      group: '皇族',
      position: '公子',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '济南',
      area: '东城',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 13,
    display_name: '达赖',
    job: {
      group: '宗教',
      position: '教主',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '拉萨',
      area: '城中',
    },
    profile: {
      nation: '藏族',
      related: [],
    },
  },
  {
    user_id: 14,
    display_name: '扎西',
    job: {
      group: '平民',
      position: '木匠',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '拉萨',
      area: '城中',
    },
    profile: {
      nation: '藏族',
      related: [],
    },
  },
  {
    user_id: 15,
    display_name: '松赞干布',
    job: {
      group: '皇族',
      position: '赞普',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '地中海',
      area: '土耳其',
    },
    profile: {
      nation: '波斯族',
      related: [],
    },
  },
  {
    user_id: 16,
    display_name: '文成公主',
    job: {
      group: '皇族',
      position: '公主',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '京城',
      area: '故宫',
    },
    profile: {
      nation: '汉族',
      related: [],
    },
  },
  {
    user_id: 17,
    display_name: '成吉思汗',
    job: {
      group: '皇族',
      position: '可汗',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '乌兰巴托',
      area: '城中',
    },
    profile: {
      nation: '蒙古族',
      related: [],
    },
  },
  {
    user_id: 18,
    display_name: '巴雅尔',
    job: {
      group: '公务员',
      position: '教头',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '乌兰巴托',
      area: '郊区',
    },
    profile: {
      nation: '蒙古族',
      related: [],
    },
  },
  {
    user_id: 19,
    display_name: '巴特尔',
    job: {
      group: '平民',
      position: '运动员',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '乌兰巴托',
      area: '郊区',
    },
    profile: {
      nation: '蒙古族',
      related: [],
    },
  },
  {
    user_id: 20,
    display_name: '朴槿惠',
    job: {
      group: '皇族',
      position: '大哥',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '首尔',
      area: '明洞',
    },
    profile: {
      nation: '朝鲜族',
      related: [],
    },
  },
  {
    user_id: 21,
    display_name: '马可波罗',
    job: {
      group: '平民',
      position: '探险家',
    },
    enable: false,
    avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
    address: {
      city: '地中海',
      area: '土耳其',
    },
    profile: {
      nation: '波斯族',
      related: [],
    },
  },
]
_.forEach(people, (value) => {
  value.enable = true
})
// console.log('这群人', people)

// 要求: 1. 不能用 for i++ , 尽量使用es6语法和lodash方法 , 2. 代码风格严格按照airbnb的eslint规则 , 3. 相关关键字请自行百度
// 1. 今天大皇帝很高兴,把全世界的皇族都请过来大吃一顿 (return 一个所有皇族吃大餐的数组)
const royalGroup = _.filter(people, (item) => {
  return item.job.group === '皇族'
})
// console.log('第一题', royalGroup)

// 2. 吃饭的时候,大皇帝要找一个在京城的诗人来吟诗 (return 一个京城诗人的对象)
const pome = _.find(people, (item) => {
  return item.address.city === '京城' && item.job.position === '诗人'
})
// console.log('第二题', pome[0])

// 3. 朝鲜族不服气,请来朝鲜族的所有歌手来唱支歌 (return 一个朝鲜族歌手的数组)
const singer = _.filter(people, (item) => {
  return item.profile.nation === '朝鲜族' && item.job.position === '歌手'
})
// console.log('第三题', singer)

// 4. 藏族同胞很不服气,要找来一个藏族木匠来雕刻一只会动的猴子 (1.return 一个藏族木匠的对象,2.原数组增加一个user_id === 22的藏族猴子)
const craftsman = _.find(people, (item) => {
  return item.profile.nation === '藏族' && item.job.position === '木匠'
})
const monkey = {
  user_id: 22,
  display_name: '猴子',
  job: {
    group: '动物',
    position: '猴子',
  },
  enable: true,
  avatar: 'http://img.hidoge.cn/logo/logo-500x500.jpg?imageView2/1/w/200/h/200',
  profile: {
    nation: '藏族',
    related: [],
  },
}
people.push(monkey)

console.log('第四题', {
  1: craftsman,
  2: monkey,
})
// 5. 这只猴子太神了,上蹦下跳,突然抓住了武媚娘在她身上打了三个冷颤 (1. return 一个藏族猴子和武媚娘在一起嘿咻的数组,
// 2. 原数组中这俩人的related,互相记录user_id)
const wmnMonkey = _.filter(people, (item) => {
  return item.display_name === '武媚娘' || item.display_name === '猴子'
})
const wumein = _.find(people, { display_name: '武媚娘' })
const monkey2 = _.find(people, { display_name: '猴子' })

const wuNum = _.indexOf(people, wumein)
const monkeyNum = _.indexOf(people, monkey2)

// 为什么修改weumein和monkey的related，数组里面的值也修改了？

wumein.profile.related.push(monkey2.user_id)   // 为什么直接打印related显示数据，而打印查询出来的数组则显示为Array
monkey.profile.related.push(wumein.user_id)
console.log('第五题', wmnMonkey)
// 6. 汉族同胞很生气, 让韩非子把木匠和猴子给杀掉
// (1. return 一个打斗场景fighting = {oneSide:[],theOtherSide:[]}, 2. 原数组中的藏族木匠和猴子enable改false)
console.log('第六题', {
  one: _.find(people, craftsman),
  two: _.find(people, monkey),
})
craftsman.enable = false
monkey.enable = false
// 7. 韩非子被达赖反杀 (1. return 一个韩非子和达赖在一起打斗的对象 , 3. 原数组中韩非子的enable改false)
const hanFeiZi = _.find(people, { display_name: '韩非子' })
hanFeiZi.enable = false
console.log('第七题', {
  one: hanFeiZi,
  two: _.find(people, { display_name: '达赖' }),
})
// 8. 这打不过啊!然后把文成公主嫁给了松赞干布, 结了个盟 (1. return 一个文成公主和松赞干布在一起的数组,
// 2. 原数组中的汉族与波斯族的related,互相记录user_id)
// 是所有汉族记录所有波斯族的user_id。。。
// find返回的是对应元素，但是就log看返回的是Object
const wcSzgb = _.filter(people, (item) => {
  return item.display_name === '文成公主' || item.display_name === '松赞干布'
})
// console.log('第八题1',wcSzgb);        //union是对数组操作

const hanzu = _.filter(people, (item) => {
  return item.profile.nation === '汉族'
})
const bosi = _.filter(people, (item) => {        // 使用filter筛选了nation后不关注related，所以会直接显示Array？？？
  return item.profile.nation === '波斯族'
})

const hanzuIds = _.reduce(hanzu, (result, value) => {    // 返回所有汉族人员的id数组
  if (!result[0]) {
    result = []
  }
  result.push(value.user_id)
  return result
}, {})
console.log(hanzuIds)
_.forEach(bosi, (value) => {         // 设置波斯族的related,注意传进的是数组
  value.profile.related = _.concat(value.profile.related, hanzuIds)
  console.log(value.profile.related)
})
const bosiIds = _.reduce(bosi, (result = [], value) => {    // 返回所波斯族人员的id数组
  if (!result[0]) {
    result = []
  }
  result.push(value.user_id)
  return result
}, {})
console.log(bosiIds)
_.forEach(hanzu, (value) => {         // 设置汉族的related
  value.profile.related = _.concat(value.profile.related, bosiIds)
})


// _.forEach(hanzu,function(value){             //所有的二级对象都显示Object，然后神奇的又正常了
//   console.log(value.profile.related)
//   value.profile.related.push('波斯族');
// });
// _.forEach(bosi,function(value){
//   value.profile.related.push('汉族');
// });
// console.log('第八题',hanzu,bosi)


// 9. 藏族又跟蒙古族结盟了! (1. 原数组中的藏族与蒙古族的related,互相记录user_id)
const menggu = _.filter(people, (item) => {
  return item.profile.nation === '蒙古族'
})
const zangzu = _.filter(people, (item) => {
  return item.profile.nation === '藏族'
})
const mengguIds = _.reduce(menggu, (result = [], value) => {
  if (!result[0]) {
    result = []
  }
  result.push(value.user_id)
  return result
}, {})
const zangzuIds = _.reduce(zangzu, (result = [], value) => {
  if (!result[0]) {
    result = []
  }
  result.push(value.user_id)
  return result
}, {})

_.forEach(zangzu, (value) => {
  value.profile.related = _.concat(value.profile.related, mengguIds)
  console.log(value.profile.related)
})
_.forEach(menggu, (value) => {
  value.profile.related = _.concat(value.profile.related, zangzuIds)
})
// console.log('第九题',menggu,zangzu)

// 10. 大皇帝开始征兵了!把京城外的人都召集在一起了 (1. return 一个京城以外所有汉族的数组)
const army = _.filter(hanzu, (item) => {
  return item.address.city === '京城'
})
const needTen = _.xor(hanzu, army)
// console.log('第十题',needTen)

// 11. 大家互相推搡一点用都没有, 大家把运动员和教头都推出来比试 (1. return 一个全世界运动员集合的数组)
const athletes = _.filter(people, (item) => {
  return item.job.position === '运动员'
})
// console.log('第十一题',athletes)

// 12. 全世界的公务员作为裁判 (1. return 一个全世界公务员集合的数组, 2. 将新数组并且按照种族进行分组)
const servant = _.filter(people, (item) => {
  return item.job.group === '公务员'
})
// console.log('第十二题',servant)
// 将同属一个名族的划分到以该民族为名的数组下
const res = _.reduce(servant, (result, value) => {
  (result[value.profile.nation] || (result[value.profile.nation] = [])).push(value)
  return result
}, {})


// const re = _.reduce({ 'a': 1, 'b': 5, 'c': 1 ,'d':3}, function(result, value, key) {
//   (result[value] || (result[value] = [])).push(key);   //初始化result[value]为数组
//   return result;
// }, {});
console.log(res)

// 13. 最后全死光了,只有巴特尔活下来了 (1. 原数组中除了巴特尔,所有运动员的enable改false)
const died = _.reject(athletes, (item) => {
  return item.display_name === '巴特尔'
})
_.forEach(died, (value) => {
  value.enable = false
})// 按理说，原数组中enable是true

// 14. 大皇帝很害怕,把皇后许配给了巴特尔
// (1. return 一个武媚娘和巴特尔在一起的数组, 2. 检查原数组中这两个人的related有没有互相记录user_id 返回true或false)
const bater = _.find(people, { display_name: '巴特尔' })
const make = _.find(people, { display_name: '马可波罗' })
const isRelated = (a, b) => {
  console.log(a.display_name)
  console.log(a.user_id)
  console.log(a.profile.related)
  const f = _.findIndex(a.profile.related, (value) => {
    return value === b.user_id
  })      // 为什么找不到？..修改了第二个参数，找到了
  const se = _.findIndex(b.profile.related, (value) => {
    return value === a.user_id
  })
  console.log(b.display_name)
  console.log(b.user_id)
  console.log(b.profile.related)
  if (f && se) {
    return true
  }
  return false
}
console.log('第十四题',
  {
    '武媚娘：': wumein,
    '巴特尔：': bater,
    '关系：': isRelated(wumein, bater),
  })


// 15. 巴特尔很开心,把所有外族皇族以外的人都杀光了
// (1. 将原数组中所有汉族与蒙古族以外的,related中没有汉族用户的皇族都enable改false)
const willDied = _.filter(_.reject(people, (item) => {  // 外族皇族
  return item.profile.nation === '汉族' || item.profile.nation === '蒙古族'
}), (item) => {
  return item.job.group === '皇族'
})

_.forEach(willDied, (item) => {
  if (_.intersection(item.profile.related, hanzuIds).length === 0) {
    item.enable = false
  }
})
console.log('第十五题', willDied)
// 16. 松赞干布很气愤,发动大军把汉族以外的人全干掉了 (1. 将原数组中波斯族和汉族以外的所有人enable改false)
const notHanBosi = _.reject(people, (item) => {
  return item.profile.nation === '汉族' || item.profile.nation === '波斯族'
})
_.forEach(notHanBosi, (item) => {
  item.enable = false
})
// 17. 韩非子派公子小白去把松赞干布干掉了 (1. return 一个韩非子和公子小白的数组 , 2. 将原数组的松赞干布enable改false)
_.find(people, { display_name: '松赞干布' }).enable = false
// 18. 韩非子被胜利冲昏了脑袋顺便把李斯干掉了,自己当总理 (1. 将原数组的李斯enable改false)
_.find(people, { display_name: '李斯' }).enable = false
// 19. 韩非子被李斯反杀,还顺便把李渊给软禁到自己家 (1. 李斯enable改true, 2. 韩非子enable改false, 3. return 一个李渊的对象)
_.find(people, { display_name: '李斯' }).enable = true
_.find(people, { display_name: '韩非子' }).enable = false
_.find(people, { display_name: '李渊' })

// 20. 李世民很生气,把汉族的公务员和皇族全干掉了
// (1. return 一个所有汉族的公务员和皇族的数组,并根据job.group进行分组, 2. 将原数组的汉族的公务员和皇族enable改false)
const serLoyal = _.filter(people, (item) => {
  return item.profile.nation === '汉族' && (item.job.group === '皇族' || item.job.group === '公务员')
})

// _.partition(ser_loyal,{job,{group:'皇族'}})
const serLoyal1 = _.reduce(serLoyal, (result, value) => {
  (result[value.job.group] || (result[value.job.group] = [])).push(value)
  return result
}, {})
_.forEach(serLoyal, (item) => {
  item.enable = false
})
console.log('第二十题', serLoyal,
           serLoyal1)

// 21. return 原数组中enable还是true的数组
console.log('第二十一题', _.filter(people, (item) => {
  return item.enable === true
}))

/* var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
]; */

// console.log(_.partition(users, function(o) { return o.active; }));
