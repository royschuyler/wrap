function look(arrx,arry){
  var text = '';

  for(i=0;i<arrx.length;i++){
    text += arrx[i] + ' ' + arry[i] + '\n'
  }
  console.log(text)
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

//*********************shade functions*********************
function getFront (x,y,s){
  var obj = {
    frontCount: 0,
    backCount: 0
  }
  for (i=0;i<x.length;i++){
    if(i+2){
      var hyp1 = Math.hypot(x[i], y[i]);
      var hyp2 = Math.hypot(x[i+1], y[i+1]);
      var hyp3 = Math.hypot(x[i+2], y[i+2]);
      if(hyp1 < hyp2 && hyp2 > hyp3 && hyp2 > s){
        obj.frontCount = i;
        obj.backCount = x.length - i;
      }
    }
  }
  return (obj)
}

  function frontAndBack(frontCount,x,y){
    var obj = {
      xb: [],
      yb: [],
      xf: [],
      yf: []
    }
    for(i=0;i<x.length;i++){
      if(i<frontCount){
        obj.xf.push(x[i]);
        obj.yf.push(y[i]);
      }else{
        obj.xb.push(x[i]);
        obj.yb.push(y[i]);
      }
    }
    return obj
  }


//VARS
var bigN = 20;
var smallN = 10;
var rings = 1;
var d = 100;
var a = sqrt(2);
var n = 15;
var f1 = 1;
var f2 = 1.1;
var additionalStart = 0;
var aToCAdd = 20;
var abBase = 0;
var abBorder = radians(additionalStart + abBase);
var cdBorder = radians(abBorder + aToCAdd);
var aToCUse = radians(Math.abs(abBorder-cdBorder)/bigN);

var smallSize = .9;
var sizeUse = (1-smallSize)/smallN;
      var wrapSizeB = 1;
      var ringRad = radians(360/rings);
      var e = 1/a;
      var conicE = sqrt((a*a)-1)/a;
      var rad360 = radians(360);
      var rad180 = radians(180);
      var rad90 = radians(90);
      var radUse = radians(180)/d;
      var numArr = numbers(0,d,1);
      var radUseArr = numbers(0,d,radUse);
      var oneMinusCos = fancyNumbers (radUseArr,f1);
      var pathNum = arrMultiply(oneMinusCos,d/2);
      var pathRad = arrMultiply(pathNum,radUse);
      var pathx = arrSin(pathRad);
      var pathy = arrCos(pathRad,conicE);
      var ww1 = fancyww1 (radUseArr,f2,n);
      var ww2 = fancyww2 (ww1);
      var wrapRadArr = wrapRad(ww2);

var aToCArr = [];
for(i=0;i<bigN+1;i++){
  aToCArr.push(abBorder + (i*aToCUse))
}

var sizeArr = [];
var hypArr = [];
for(i=0;i<smallN+1;i++){
  sizeArr.push(smallSize + (i*sizeUse));
  hypArr.push(.99*(smallSize + (i*sizeUse)));
}

  var obj = {
    ac: {
      x: [],
      y: [],
      frontCount: [],
      backCount: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    bd: {
      x: [],
      y: [],
      frontCount: [],
      backCount: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    ab: {
      x: [],
      y: [],
      frontCount: [],
      backCount: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    cd: {
      x: [],
      y: [],
      frontCount: [],
      backCount: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    }
  }
 //***************AC AND BD LONG************************************
  //get wraps for ac and bd
  for(y=0;y<aToCArr.length;y++){
      var wrapAx = wrapXFun(wrapRadArr,aToCArr[y],pathx,wrapSizeB);
      var wrapAy = wrapYFun(pathx,e,wrapRadArr,aToCArr[y],pathy,wrapSizeB);
      var wrapBx = wrapXFun(wrapRadArr,aToCArr[y],pathx,smallSize);
      var wrapBy = wrapYFun(pathx,e,wrapRadArr,aToCArr[y],pathy,smallSize);
      obj.ac.x.push(wrapAx);
      obj.ac.y.push(wrapAy);
      obj.bd.x.push(wrapBx);
      obj.bd.y.push(wrapBy);
  }
//get front/back counts for ac and bd
for(t=0;t<obj.ac.x.length;t++){
  obj.ac.frontCount.push(getFront(obj.ac.x[t],obj.ac.y[t],.99).frontCount);
  obj.ac.backCount.push(getFront(obj.ac.x[t],obj.ac.y[t],.99).backCount);
  obj.bd.frontCount.push(getFront(obj.bd.x[t],obj.bd.y[t],smallSize).frontCount);
  obj.bd.backCount.push(getFront(obj.bd.x[t],obj.bd.y[t],smallSize).backCount);
}
// separate back and front for ac and bd
for(t=0;t<obj.ac.x.length;t++){
  var acObj = frontAndBack(obj.ac.frontCount[t],obj.ac.x[t],obj.ac.y[t]);
  var bdObj = frontAndBack(obj.bd.frontCount[t],obj.bd.x[t],obj.bd.y[t]);
  obj.ac.xf.push(acObj.xf);
  obj.ac.xb.push(acObj.xb);
  obj.ac.yf.push(acObj.yf);
  obj.ac.yb.push(acObj.yb);
  obj.bd.xf.push(bdObj.xf);
  obj.bd.xb.push(bdObj.xb);
  obj.bd.yf.push(bdObj.yf);
  obj.bd.yb.push(bdObj.yb);
}

//******************AB ABD CD SHORT***********************************
  //get wraps for ac and bd
  for(y=0;y<sizeArr.length;y++){
      var wrapAx = wrapXFun(wrapRadArr,abBorder,pathx,sizeArr[y]);
      var wrapAy = wrapYFun(pathx,e,wrapRadArr,abBorder,pathy,sizeArr[y]);
      var wrapBx = wrapXFun(wrapRadArr,cdBorder,pathx,sizeArr[y]);
      var wrapBy = wrapYFun(pathx,e,wrapRadArr,cdBorder,pathy,sizeArr[y]);
      obj.ab.x.push(wrapAx);
      obj.ab.y.push(wrapAy);
      obj.cd.x.push(wrapBx);
      obj.cd.y.push(wrapBy);
  }

//get front/back counts for ab and cd
for(t=0;t<obj.ab.x.length;t++){
  obj.ab.frontCount.push(getFront(obj.ab.x[t],obj.ab.y[t],smallSize).frontCount);
  obj.ab.backCount.push(getFront(obj.ab.x[t],obj.ab.y[t],smallSize).backCount);
  obj.cd.frontCount.push(getFront(obj.cd.x[t],obj.cd.y[t],smallSize).frontCount);
  obj.cd.backCount.push(getFront(obj.cd.x[t],obj.cd.y[t],smallSize).backCount);
}

// separate back and front for ac and bd
for(t=0;t<obj.ab.x.length;t++){
  var abObj = frontAndBack(obj.ab.frontCount[t],obj.ab.x[t],obj.ab.y[t]);
  var cdObj = frontAndBack(obj.cd.frontCount[t],obj.cd.x[t],obj.cd.y[t]);
  obj.ab.xf.push(abObj.xf);
  obj.ab.xb.push(abObj.xb);
  obj.ab.yf.push(abObj.yf);
  obj.ab.yb.push(abObj.yb);
  obj.cd.xf.push(cdObj.xf);
  obj.cd.xb.push(cdObj.xb);
  obj.cd.yf.push(cdObj.yf);
  obj.cd.yb.push(cdObj.yb);
}
console.log(obj);
var text = '';
var buffer = '';
var finalCount = 0;

function plot(x,y,s){



   //1 = white
   //0 = black
  var scale = 1;
  var use = 1/(x.length/2);
  var k = 0;
  var m = 0;
  var lineWidthEnd = 3;
  var lwUse = lineWidthEnd/(x.length/2);

   for(i=0;i<x.length;i++){
      if(k<x.length/2){
        var put = use * m;
        var width = lwUse * m;
        m++
        //end should be 1
      }
      if(k>=x.length/2){
        var put = use * m;
        var width = lwUse * m;
        m--
        //end should be 0
      }
      buffer += 'newbuffer' + '\n';
      if(x[i+1]){
        text += 'addvalue ' + finalCount + ' ' + x[i] + ' ' + y[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x[i+1] + ' ' + y[i+1] + '\n';
        text += 'blinewidth ' + width + ' ' + finalCount + '\n';
        if(s == 's'){
          text += 'bcolor ' + .9 + ' ' + put + ' ' + put + ' ' + finalCount + '\n'
        } else{
          text += 'bcolor ' + put + ' ' + put + ' ' + put + ' ' + finalCount + '\n'
        }


        k++
        finalCount++
     }
   }
}
plot(obj.cd.xf[0],obj.cd.yf[0],"s")
plot(obj.cd.xf[1],obj.cd.yf[1],"s")
plot(obj.cd.xf[2],obj.cd.yf[2],"s")
plot(obj.cd.xf[3],obj.cd.yf[3],"s")
plot(obj.cd.xf[4],obj.cd.yf[4],"s")
plot(obj.cd.xf[5],obj.cd.yf[5],"s")
plot(obj.cd.xf[6],obj.cd.yf[6],"s")
plot(obj.cd.xf[7],obj.cd.yf[7],"s")
plot(obj.cd.xf[8],obj.cd.yf[8],"s")
plot(obj.cd.xf[9],obj.cd.yf[9],"s")
var extra = 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

var end = buffer + text + extra;
console.log(end);

function writer(){
  var str = '';
  for(i=0;i<smallN;i++){
    str+= 'plot(obj.cd.xf[' + i + '],obj.cd.yf[' + i + '],"s")' + '\n';
  } return str
}
var str = writer();
//console.log(str)
