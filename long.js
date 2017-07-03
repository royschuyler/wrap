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
  var frontCount;
  for (i=0;i<x.length;i++){
    if(i+2){
      var hyp1 = Math.hypot(x[i], y[i]);
      var hyp2 = Math.hypot(x[i+1], y[i+1]);
      var hyp3 = Math.hypot(x[i+2], y[i+2]);
      if(hyp1 < hyp2 && hyp2 > hyp3 && hyp2 > s){
        frontCount = i;
      }
    }
  }
  return (frontCount)
}

  function frontAndBack(backCount,x,y,xBack,xFront,yBack,yFront){
    for(i=0;i<backCount.length;i++){
      var xbtmp = [];
      var ybtmp = [];
      var xftmp = [];
      var yftmp = [];
      for(k=0;k<=x[i].length;k++){
        if(k>backCount[i]){
          xbtmp.push(x[i][k]);
          ybtmp.push(y[i][k]);
        }else{
          xftmp.push(x[i][k]);
          yftmp.push(y[i][k]);
        }
      }
      xBack.push(xbtmp);
      yBack.push(ybtmp)
      xFront.push(xftmp)
      yFront.push(yftmp)
    }
  }
//VARS
var bigN = 25;
var smallN = 10;
var rings = 1;
var d = 200;
var a = sqrt(2);
var n = 15;
var f1 = 1;
var f2 = 1.1;
var additionalStart = 0;
var aToCAdd = 20;
var abBase = 0;
var abBorder = additionalStart + abBase;
var cdBorder = abBorder + aToCAdd;
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
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    bd: {
      x: [],
      y: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    ab: {
      x: [],
      y: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    },
    cd: {
      x: [],
      y: [],
      xf: [],
      yf: [],
      xb: [],
      yb: []
    }
  }
console.log(obj)
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
//console.log(obj);


var text = '';
var buffer = '';
var finalCount = 0;

function plot(x,y,length){



   //1 = white
   //0 = black
  var scale = 1;
  var use = 1/(x.length/2);
  var k = 0;
  var m = 0;

   for(i=0;i<x.length;i++){
      if(k<x.length/2){
        var put = use * m;
        m++
        //end should be 1
      }
      if(k>=x.length/2){
        var put = use * m;
        m--
        //end should be 0
      }
      buffer += 'newbuffer' + '\n';
      if(x[i+1]){
        text += 'addvalue ' + finalCount + ' ' + x[i] + ' ' + y[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x[i+1] + ' ' + y[i+1] + '\n';
        text += 'bcolor ' + put + ' ' + put + ' ' + put + ' ' + finalCount + '\n'
        k++
        finalCount++
     }
   }
}

plot(obj.bd.x[0],obj.bd.y[0])
plot(obj.bd.x[1],obj.bd.y[1])
plot(obj.bd.x[2],obj.bd.y[2])
plot(obj.bd.x[3],obj.bd.y[3])
plot(obj.bd.x[4],obj.bd.y[4])
plot(obj.bd.x[5],obj.bd.y[5])
plot(obj.bd.x[6],obj.bd.y[6])
plot(obj.bd.x[7],obj.bd.y[7])
plot(obj.bd.x[8],obj.bd.y[8])
plot(obj.bd.x[9],obj.bd.y[9])
plot(obj.bd.x[10],obj.bd.y[10])
plot(obj.bd.x[11],obj.bd.y[11])
plot(obj.bd.x[12],obj.bd.y[12])
plot(obj.bd.x[13],obj.bd.y[13])
plot(obj.bd.x[14],obj.bd.y[14])
plot(obj.bd.x[15],obj.bd.y[15])
plot(obj.bd.x[16],obj.bd.y[16])
plot(obj.bd.x[17],obj.bd.y[17])
plot(obj.bd.x[18],obj.bd.y[18])
plot(obj.bd.x[19],obj.bd.y[19])
plot(obj.bd.x[20],obj.bd.y[20])
plot(obj.bd.x[21],obj.bd.y[21])
plot(obj.bd.x[22],obj.bd.y[22])
plot(obj.bd.x[23],obj.bd.y[23])
plot(obj.bd.x[24],obj.bd.y[24])


var extra = 'blinewidth 1 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

var end = buffer + text + extra;
console.log(end);

function writer(){
  var str = '';
  for(i=0;i<bigN;i++){
    str+= 'plot(obj.bd.x[' + i + '],obj.bd.y[' + i + '])' + '\n';
  } return str
}
var str = writer();
//console.log(str)
