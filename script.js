function look(arr1,arr2){
  var textx = '';
  var texty = '';
  for(i=0;i<wrapAx.length;i++){
    textx += wrapAx[i] + '\n'
    texty += wrapAy[i] + '\n'
  }
  //console.log(textx)
  //console.log(texty)
}

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

function wrapXFun(arr,add,multiply,size){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]+add)*multiply[i]*size)
  } return box
}

function wrapYFun(pathx,e,wrapRad,radStart,pathy,size){
  var box = [];
  for(i = 0; i < pathx.length; i++){
    box.push(pathx[i]*e*size*cos(wrapRad[i]+radStart)+pathy[i])
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
function getWraps(rings,mainStart,d,a,n,f1,f2,ringStart,startAdd,wrapSizeS){
  var obj = {
    ax: [],
    ay: [],
    bx: [],
    by: [],
    cx: [],
    cy: [],
    dx: [],
    dy: []
  }

  for (k=0;k<rings;k++){
    var rings = rings;
    var ringRadArr = [];
    var mainStart = mainStart;
    for(i=0;i<rings;i++){
      ringRadArr.push((i+1)*radians(mainStart + (360/rings)));
    }
    //console.log(ringRadArr)

    var d = d;
    var a = a;
    var n = n;
    var f1 = f1;
    var f2 = f2;
    var ringStart = ringRadArr[k];
    var startAdd = radians(startAdd);
    var wrapSizeS = wrapSizeS;
    //NON-TOUCHERS

    var wrapSizeB = 1;
    var ringRad = radians(360/rings);
    var startRad = radians(ringStart);
    var addRad = radians(startAdd);
    var e = 1/a;
    var conicE = sqrt((a*a)-1)/a;
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
    var wrapRadArr = wrapRad(ww2);
    var wrapAx = wrapXFun(wrapRadArr,ringStart,pathx,wrapSizeB);
    var wrapAy = wrapYFun(pathx,e,wrapRadArr,ringStart,pathy,wrapSizeB);
    var wrapBx = wrapXFun(wrapRadArr,ringStart,pathx,wrapSizeS);
    var wrapBy = wrapYFun(pathx,e,wrapRadArr,ringStart,pathy,wrapSizeS);
    var wrapCx = wrapXFun(wrapRadArr,(ringStart+startAdd),pathx,wrapSizeB);
    var wrapCy = wrapYFun(pathx,e,wrapRadArr,(ringStart+startAdd),pathy,wrapSizeB);
    var wrapDx = wrapXFun(wrapRadArr,(ringStart+startAdd),pathx,wrapSizeS);
    var wrapDy = wrapYFun(pathx,e,wrapRadArr,(ringStart+startAdd),pathy,wrapSizeS);
    obj.ax.push(wrapAx);
    obj.ay.push(wrapAy);
    obj.bx.push(wrapBx);
    obj.by.push(wrapBy);
    obj.cx.push(wrapCx);
    obj.cy.push(wrapCy);
    obj.dx.push(wrapDx);
    obj.dy.push(wrapDy);
  }
    return(obj)
  }

var wrapObj = getWraps(3,0,1000,sqrt(2),15,1,1.1,0,20,.88);
console.log(wrapObj)
