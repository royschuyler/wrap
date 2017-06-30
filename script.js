function radians(degrees) {
  return degrees * Math.PI / 180;
};

function sqrt(n){
  return Math.sqrt(n)
}

function numbers (start, end, n){
  var arr = [];
  for(i = start; i < end; i++){
    arr.push(i*n)
  } return arr
}

function fancyNumbers (arr,f){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( 1-Math.pow(cos(arr[i]),f) )
  } return box
}

function fancyww1 (arr,f,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( n*(Math.pow(sin(arr[i]),f)) )
  } return box
}

function fancyww2 (arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    if(radians(1/arr[i]) != Infinity){
    box.push( radians(1/arr[i]) )
    }else{
      box.push( 0 )
    }
  } return box
}

function wrapRad(arr){
  var box1 = [];
  for(i = 0; i < arr.length; i++){
    if(i == 0){
      box1.push(0)
    }else if(i == 1){
      box1.push(arr[i])
    }else{
      box1.push(arr[i]+box1[i-1])
    }
  } return box1
}

function arrMultiply(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( arr[i]*n )
  } return box
}

function arrSin(arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]))
  } return box
}

function arrCos(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(cos(arr[i])*n)
  } return box
}



function sin (x) {
  return Math.sin(x)
}

function cos (x) {
  return Math.cos(x)
}

function tan (x) {
  return Math.tan(x)
}

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}

//********************************************************
//CHANGEABLE VARS
var d = 1000;
var a = sqrt(2);
var n = 15;
var f1 = 1;
var f2 = 1.1;
//NON-TOUCHERS
var e = 1/a;
var conicE = sqrt((a*a)-1)/a;
console.log(conicE)
var rad360 = radians(360);
var rad180 = radians(180);
var rad90 = radians(90);
var radUse = radians(180)/d;
var numArr = numbers(0,1000,1);
var radUseArr = numbers(0,1000,radUse);
var oneMinusCos = fancyNumbers (radUseArr,f1);
var pathNum = arrMultiply(oneMinusCos,d/2);
var pathRad = arrMultiply(pathNum,radUse);
var pathx = arrSin(pathRad);
var pathy = arrCos(pathRad,conicE);
var ww1 = fancyww1 (radUseArr,f2,n);
var ww2 = fancyww2 (ww1);
//console.log(ww2);
var wrapRadArr = wrapRad(ww2);
console.log(wrapRadArr)
