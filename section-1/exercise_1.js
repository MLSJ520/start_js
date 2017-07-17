/**
 * Created by lenovo on 2017/7/14.
 */
/** 算法题，在你的练习项目中新建js文件，注意eslint的代码风格规范。
 1. 求两个自然数的最大公约数。
 2. 每只母鸡3元，每只公鸡4元，每只小鸡0.5元，如果花100元钱买100只鸡，请问有哪些可能？说明：每种鸡的数量都可以为零
 3. 共有1000瓶汽水，每喝完后一瓶得到的一个空瓶子，每3个空瓶子又能换1瓶汽水，喝掉以后又得到一个空瓶子，问总共能喝多少瓶汽水，
 最后还剩余多少个空瓶子？
 4. 水仙花数指三位数中，每个数字的立方和和自身相等的数字，例如370，3 × 3 × 3 + 7 × 7 × 7 + 0 × 0 × 0 =370，请输出所有的水仙花数。
 5. 求出1000以内的所有素数，素数即质数，只能被1和本身整除的数，最小的质数是2。**/
const _ = require('lodash')
// 在我的编译器中 Math.parseInt()报错
// 欧几里得，辗转相除法
const Exercise1 = (a, b) => {
    let r
    if (a < b) {
        const temp = a
        a = b
        b = temp
    }
    while (a % b > 0) {
        r = a % b
        a = b
        b = r
    }
    return b
}
// 暴力，只要满足 5a+7b = 100 就行，该公式是解完方程后的结果
const getNumber = (a, b, total) => {
    let i = 0
    let bNum
    const outPut = []
    while (i <= parseInt(total / a)) {
        if ((total - (i * a)) % b === 0) {
            bNum = (total - (i * a)) / b
            const temp = []
            temp.push(i)
            temp.push(bNum)
            outPut.push(temp)
        }
        i += 1
    }
    return outPut
}
const Exercise2 = () => {
    return _.forEach(getNumber(5, 7, 100), (item) => {
        item.push(100 - item[0] - item[1])
    })
}
// 暴力++
const Exercise3 = (total) => {
    let drink = total
    let rest = 0
    let empty = total
    while (empty >= 3) {
        empty = parseInt(empty / 3)
        rest = parseInt(empty % 3)
        drink += empty
        empty += rest
    }
    console.log('第三题：')
    console.log('已喝：', drink)
    console.log('剩余：', empty)
}

// 判断是否为水仙花数
const isNarcissistic = (a, b, c, total) => {
    if ((a * a * a) + (b * b * b) + (c * c * c) === total) {
        return true
    }
    return false
}
const Exercise4 = () => {
    console.log('第四题：')
    for (let i = 100; i < 1000; i += 1) {
        if (isNarcissistic(parseInt(i / 100),
                parseInt((i % 100) / 10), parseInt(i % 10) , i)) {
            console.log(i)
        }
    }
}
// 判断是否为素数
const isPrime = (num) => {
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i += 1) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
const Exercise5 = () => {
    const outPut = [2]
    for (let i = 3; i <= 1000; i += 1) {
        if (isPrime(i)) {
            outPut.push(i)
        }
    }
    return outPut
}
console.log('第一题：', Exercise1(100, 20))
console.log('第二题：', Exercise2())
Exercise3(1000)
Exercise4()
console.log('第五题：', Exercise5())
