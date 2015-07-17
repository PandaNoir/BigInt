var _= require('./main.js');
require('lodash').extend(global,_)
//
// log(new BigInt(11111).toString() === '11111')
// log(new BigInt(11110).toString() === '11110')
// log(new BigInt(11100).toString() === '11100')
// log(new BigInt(11000).toString() === '11000')
// log(new BigInt(10000).toString() === '10000')
// log(new BigInt(0).toString() === '0')
// log(new BigInt(99999).toString() === '99999')
// log(new BigInt(-99999).toString() === '-99999')
//
// // - add
// log(new BigInt(3).add(new BigInt(4)).toString() === '7')
// log(new BigInt(-3).add(new BigInt(4)).toString() === '1')
// log(new BigInt(3).add(new BigInt(-4)).toString() === '-1')
// log(new BigInt(-3).add(new BigInt(-4)).toString() === '-7')
// log(new BigInt(3).add(new BigInt(-3)).toString() === '0')
// log(new BigInt(-3).add(new BigInt(3)).toString() === '0')
// log((new BigInt(999999).add(new BigInt(1))).toString() === '1000000')
// log((new BigInt(99999).add(new BigInt(1))).toString() === '100000')
// log((new BigInt(9999).add(new BigInt(1))).toString() === '10000')
// log((new BigInt(999).add(new BigInt(1))).toString() === '1000')
// log((new BigInt(99).add(new BigInt(1))).toString() === '100')
// log((new BigInt(9).add(new BigInt(1))).toString() === '10')
// log((new BigInt(0).add(new BigInt(0))).toString() === '0')
//
// // -minus
// log(new BigInt(3).minus(new BigInt(4)).toString() === '-1')
// log(new BigInt(-3).minus(new BigInt(4)).toString() === '-7')
// log(new BigInt(3).minus(new BigInt(-4)).toString() === '7')
// log(new BigInt(-3).minus(new BigInt(-4)).toString() === '1')
// log((new BigInt(1000000).minus(new BigInt(1))).toString() === '999999')
// log((new BigInt(100000).minus(new BigInt(1))).toString() === '99999')
// log((new BigInt(10000).minus(new BigInt(1))).toString() === '9999')
// log((new BigInt(1000).minus(new BigInt(1))).toString() === '999')
// log((new BigInt(100).minus(new BigInt(1))).toString() === '99')
// log((new BigInt(10).minus(new BigInt(1))).toString() === '9')
//
// // - mult
// log(new BigInt(1).mult(2).mult(3).mult(4).mult(5).mult(6).mult(7).mult(8).mult(9).mult(10).toString() === '3628800')
// log((new BigInt(1).mult(2).mult(3).mult(4).mult(5).mult(6).mult(7).mult(8).mult(9).mult(10)
// .mult(11).mult(12).mult(13).mult(14).mult(15).mult(16).mult(17).mult(18).mult(19).mult(20)
// .mult(21).mult(22).mult(23).mult(24).mult(25).mult(26).mult(27).mult(28).mult(29).mult(30)
// .mult(31).mult(32).mult(33).mult(34).mult(35).mult(36).mult(37).mult(38).mult(39).mult(40)
// .mult(41).mult(42).mult(43).mult(44).mult(45).mult(46).mult(47).mult(48).mult(49).mult(50).toString() === '30414093201713378043612608166064768844377641568960512000000000000'
// ))
//
// // - pow
// log(new BigInt(2).pow(0).toString() === '1')
// log(new BigInt(2).pow(1).toString() === '2')
// log(new BigInt(2).pow(2).toString() === '4')
// log(new BigInt(2).pow(3).toString() === '8')
// log(new BigInt(2).pow(4).toString() === '16')
// log(new BigInt(2).pow(5).toString() === '32')
// log(new BigInt(2).pow(6).toString() === '64')
// log(new BigInt(2).pow(7).toString() === '128')
// log(new BigInt(2).pow(8).toString() === '256')
// log(new BigInt(2).pow(9).toString() === '512')
// log(new BigInt(2).pow(10).toString() === '1024')
// log(new BigInt(2).pow(11).toString() === '2048')
// log(new BigInt(2).pow(12).toString() === '4096')
// log(new BigInt(2).pow(100).toString() === '1267650600228229401496703205376')
//
//
//
// log((new BigInt(10000)).mult(new BigInt(10000)).toString() === '100000000')
// log((new BigInt(123456)).mult(new BigInt(789012)).toString() === '97408265472')
// log((new BigInt(123)).mult(new BigInt(10000)).toString() === '1230000')
//
// log(new BigInt(1).compare(new BigInt(-1)) === GT)
// log(new BigInt(1).compare(new BigInt(1)) === EQ)
// log(new BigInt(-1).compare(new BigInt(1)) === LT)
// log(new BigInt(-1).compare(new BigInt(-1)) === EQ)
//
