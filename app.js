
const names=require('./2-namesProp')
const AddNumber=require('./4-Addition')
const sayHi=require('./3-namefun')
var baseext=require('./6-extModule')
var baseMo=require('./5-baseModule')

sayHi(names.LName)
sayHi(names.fName)
sayHi(names.arr[2])
console.log(AddNumber(33,2))
baseext()
baseMo()
