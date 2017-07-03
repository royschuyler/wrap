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
        obj.frontCount = i+2;
        obj.backCount = x.length - obj.frontCount;
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
        obj.xb.push(x[i-1]);
        obj.yb.push(y[i-1]);
      }
    }
    return obj
  }


//VARS
var bigN = 100;
var smallN = 25;
var rings = 1;
var d = 300;
var a = sqrt(2);
var n = 15;
var f1 = 1;
var f2 = 1.1;
var additionalStart = radians(0);
var aToCAdd = radians(20);
var abBase = radians(0);
var abBorder = additionalStart + abBase;
var cdBorder = abBorder + aToCAdd;
var aToCUse = Math.abs(abBorder-cdBorder)/bigN;

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

// for(i=0;i<obj.ab.xb.length;i++){
//   obj.ab.xb[i].reverse();
//   obj.ab.yb[i].reverse();
//   obj.cd.xb[i].reverse();
//   obj.cd.yb[i].reverse();
// }

// for(i=0;i<obj.ac.xb.length;i++){
//   obj.ac.xb[i].reverse();
//   obj.ac.yb[i].reverse();
//   obj.bd.xb[i].reverse();
//   obj.bd.yb[i].reverse();
// }

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
  // var w = 0;
  // var lineWidthEnd = 2;
  // var lwUse = lineWidthEnd/(x.length);

   for(i=0;i<x.length;i++){
      if(k<x.length/2){
        var put = use * m;
        // var width = lwUse * m;
        m++
        //end should be 1
      }
      if(k>=x.length/2){
        var put = use * m;
        // var width = lwUse * m;
        m--
        //end should be 0
      }
      // if(k<x.length){
      //   var width = lwUse * w;
      //   w++
      // }

      buffer += 'newbuffer' + '\n';
      if(x[i+1]){
        text += 'addvalue ' + finalCount + ' ' + x[i] + ' ' + y[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x[i+1] + ' ' + y[i+1] + '\n';
        // text += 'blinewidth ' + width + ' ' + finalCount + '\n';
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
plot(obj.cd.xb[0],obj.cd.yb[0],"s")
plot(obj.cd.xb[1],obj.cd.yb[1],"s")
plot(obj.cd.xb[2],obj.cd.yb[2],"s")
plot(obj.cd.xb[3],obj.cd.yb[3],"s")
plot(obj.cd.xb[4],obj.cd.yb[4],"s")
plot(obj.cd.xb[5],obj.cd.yb[5],"s")
plot(obj.cd.xb[6],obj.cd.yb[6],"s")
plot(obj.cd.xb[7],obj.cd.yb[7],"s")
plot(obj.cd.xb[8],obj.cd.yb[8],"s")
plot(obj.cd.xb[9],obj.cd.yb[9],"s")
plot(obj.cd.xb[10],obj.cd.yb[10],"s")
plot(obj.cd.xb[11],obj.cd.yb[11],"s")
plot(obj.cd.xb[12],obj.cd.yb[12],"s")
plot(obj.cd.xb[13],obj.cd.yb[13],"s")
plot(obj.cd.xb[14],obj.cd.yb[14],"s")
plot(obj.cd.xb[15],obj.cd.yb[15],"s")
plot(obj.cd.xb[16],obj.cd.yb[16],"s")
plot(obj.cd.xb[17],obj.cd.yb[17],"s")
plot(obj.cd.xb[18],obj.cd.yb[18],"s")
plot(obj.cd.xb[19],obj.cd.yb[19],"s")
plot(obj.cd.xb[20],obj.cd.yb[20],"s")
plot(obj.cd.xb[21],obj.cd.yb[21],"s")
plot(obj.cd.xb[22],obj.cd.yb[22],"s")
plot(obj.cd.xb[23],obj.cd.yb[23],"s")
plot(obj.cd.xb[24],obj.cd.yb[24],"s")
plot(obj.cd.xb[25],obj.cd.yb[25],"s")
plot(obj.ab.xb[0],obj.ab.yb[0],"s")
plot(obj.ab.xb[1],obj.ab.yb[1],"s")
plot(obj.ab.xb[2],obj.ab.yb[2],"s")
plot(obj.ab.xb[3],obj.ab.yb[3],"s")
plot(obj.ab.xb[4],obj.ab.yb[4],"s")
plot(obj.ab.xb[5],obj.ab.yb[5],"s")
plot(obj.ab.xb[6],obj.ab.yb[6],"s")
plot(obj.ab.xb[7],obj.ab.yb[7],"s")
plot(obj.ab.xb[8],obj.ab.yb[8],"s")
plot(obj.ab.xb[9],obj.ab.yb[9],"s")
plot(obj.ab.xb[10],obj.ab.yb[10],"s")
plot(obj.ab.xb[11],obj.ab.yb[11],"s")
plot(obj.ab.xb[12],obj.ab.yb[12],"s")
plot(obj.ab.xb[13],obj.ab.yb[13],"s")
plot(obj.ab.xb[14],obj.ab.yb[14],"s")
plot(obj.ab.xb[15],obj.ab.yb[15],"s")
plot(obj.ab.xb[16],obj.ab.yb[16],"s")
plot(obj.ab.xb[17],obj.ab.yb[17],"s")
plot(obj.ab.xb[18],obj.ab.yb[18],"s")
plot(obj.ab.xb[19],obj.ab.yb[19],"s")
plot(obj.ab.xb[20],obj.ab.yb[20],"s")
plot(obj.ab.xb[21],obj.ab.yb[21],"s")
plot(obj.ab.xb[22],obj.ab.yb[22],"s")
plot(obj.ab.xb[23],obj.ab.yb[23],"s")
plot(obj.ab.xb[24],obj.ab.yb[24],"s")
plot(obj.ab.xb[25],obj.ab.yb[25],"s")
plot(obj.bd.xb[0],obj.bd.yb[0],"b")
plot(obj.bd.xb[1],obj.bd.yb[1],"b")
plot(obj.bd.xb[2],obj.bd.yb[2],"b")
plot(obj.bd.xb[3],obj.bd.yb[3],"b")
plot(obj.bd.xb[4],obj.bd.yb[4],"b")
plot(obj.bd.xb[5],obj.bd.yb[5],"b")
plot(obj.bd.xb[6],obj.bd.yb[6],"b")
plot(obj.bd.xb[7],obj.bd.yb[7],"b")
plot(obj.bd.xb[8],obj.bd.yb[8],"b")
plot(obj.bd.xb[9],obj.bd.yb[9],"b")
plot(obj.bd.xb[10],obj.bd.yb[10],"b")
plot(obj.bd.xb[11],obj.bd.yb[11],"b")
plot(obj.bd.xb[12],obj.bd.yb[12],"b")
plot(obj.bd.xb[13],obj.bd.yb[13],"b")
plot(obj.bd.xb[14],obj.bd.yb[14],"b")
plot(obj.bd.xb[15],obj.bd.yb[15],"b")
plot(obj.bd.xb[16],obj.bd.yb[16],"b")
plot(obj.bd.xb[17],obj.bd.yb[17],"b")
plot(obj.bd.xb[18],obj.bd.yb[18],"b")
plot(obj.bd.xb[19],obj.bd.yb[19],"b")
plot(obj.bd.xb[20],obj.bd.yb[20],"b")
plot(obj.bd.xb[21],obj.bd.yb[21],"b")
plot(obj.bd.xb[22],obj.bd.yb[22],"b")
plot(obj.bd.xb[23],obj.bd.yb[23],"b")
plot(obj.bd.xb[24],obj.bd.yb[24],"b")
plot(obj.bd.xb[25],obj.bd.yb[25],"b")
plot(obj.bd.xb[26],obj.bd.yb[26],"b")
plot(obj.bd.xb[27],obj.bd.yb[27],"b")
plot(obj.bd.xb[28],obj.bd.yb[28],"b")
plot(obj.bd.xb[29],obj.bd.yb[29],"b")
plot(obj.bd.xb[30],obj.bd.yb[30],"b")
plot(obj.bd.xb[31],obj.bd.yb[31],"b")
plot(obj.bd.xb[32],obj.bd.yb[32],"b")
plot(obj.bd.xb[33],obj.bd.yb[33],"b")
plot(obj.bd.xb[34],obj.bd.yb[34],"b")
plot(obj.bd.xb[35],obj.bd.yb[35],"b")
plot(obj.bd.xb[36],obj.bd.yb[36],"b")
plot(obj.bd.xb[37],obj.bd.yb[37],"b")
plot(obj.bd.xb[38],obj.bd.yb[38],"b")
plot(obj.bd.xb[39],obj.bd.yb[39],"b")
plot(obj.bd.xb[40],obj.bd.yb[40],"b")
plot(obj.bd.xb[41],obj.bd.yb[41],"b")
plot(obj.bd.xb[42],obj.bd.yb[42],"b")
plot(obj.bd.xb[43],obj.bd.yb[43],"b")
plot(obj.bd.xb[44],obj.bd.yb[44],"b")
plot(obj.bd.xb[45],obj.bd.yb[45],"b")
plot(obj.bd.xb[46],obj.bd.yb[46],"b")
plot(obj.bd.xb[47],obj.bd.yb[47],"b")
plot(obj.bd.xb[48],obj.bd.yb[48],"b")
plot(obj.bd.xb[49],obj.bd.yb[49],"b")
plot(obj.bd.xb[50],obj.bd.yb[50],"b")
plot(obj.bd.xb[51],obj.bd.yb[51],"b")
plot(obj.bd.xb[52],obj.bd.yb[52],"b")
plot(obj.bd.xb[53],obj.bd.yb[53],"b")
plot(obj.bd.xb[54],obj.bd.yb[54],"b")
plot(obj.bd.xb[55],obj.bd.yb[55],"b")
plot(obj.bd.xb[56],obj.bd.yb[56],"b")
plot(obj.bd.xb[57],obj.bd.yb[57],"b")
plot(obj.bd.xb[58],obj.bd.yb[58],"b")
plot(obj.bd.xb[59],obj.bd.yb[59],"b")
plot(obj.bd.xb[60],obj.bd.yb[60],"b")
plot(obj.bd.xb[61],obj.bd.yb[61],"b")
plot(obj.bd.xb[62],obj.bd.yb[62],"b")
plot(obj.bd.xb[63],obj.bd.yb[63],"b")
plot(obj.bd.xb[64],obj.bd.yb[64],"b")
plot(obj.bd.xb[65],obj.bd.yb[65],"b")
plot(obj.bd.xb[66],obj.bd.yb[66],"b")
plot(obj.bd.xb[67],obj.bd.yb[67],"b")
plot(obj.bd.xb[68],obj.bd.yb[68],"b")
plot(obj.bd.xb[69],obj.bd.yb[69],"b")
plot(obj.bd.xb[70],obj.bd.yb[70],"b")
plot(obj.bd.xb[71],obj.bd.yb[71],"b")
plot(obj.bd.xb[72],obj.bd.yb[72],"b")
plot(obj.bd.xb[73],obj.bd.yb[73],"b")
plot(obj.bd.xb[74],obj.bd.yb[74],"b")
plot(obj.bd.xb[75],obj.bd.yb[75],"b")
plot(obj.bd.xb[76],obj.bd.yb[76],"b")
plot(obj.bd.xb[77],obj.bd.yb[77],"b")
plot(obj.bd.xb[78],obj.bd.yb[78],"b")
plot(obj.bd.xb[79],obj.bd.yb[79],"b")
plot(obj.bd.xb[80],obj.bd.yb[80],"b")
plot(obj.bd.xb[81],obj.bd.yb[81],"b")
plot(obj.bd.xb[82],obj.bd.yb[82],"b")
plot(obj.bd.xb[83],obj.bd.yb[83],"b")
plot(obj.bd.xb[84],obj.bd.yb[84],"b")
plot(obj.bd.xb[85],obj.bd.yb[85],"b")
plot(obj.bd.xb[86],obj.bd.yb[86],"b")
plot(obj.bd.xb[87],obj.bd.yb[87],"b")
plot(obj.bd.xb[88],obj.bd.yb[88],"b")
plot(obj.bd.xb[89],obj.bd.yb[89],"b")
plot(obj.bd.xb[90],obj.bd.yb[90],"b")
plot(obj.bd.xb[91],obj.bd.yb[91],"b")
plot(obj.bd.xb[92],obj.bd.yb[92],"b")
plot(obj.bd.xb[93],obj.bd.yb[93],"b")
plot(obj.bd.xb[94],obj.bd.yb[94],"b")
plot(obj.bd.xb[95],obj.bd.yb[95],"b")
plot(obj.bd.xb[96],obj.bd.yb[96],"b")
plot(obj.bd.xb[97],obj.bd.yb[97],"b")
plot(obj.bd.xb[98],obj.bd.yb[98],"b")
plot(obj.bd.xb[99],obj.bd.yb[99],"b")
plot(obj.bd.xb[100],obj.bd.yb[100],"b")
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
plot(obj.cd.xf[10],obj.cd.yf[10],"s")
plot(obj.cd.xf[11],obj.cd.yf[11],"s")
plot(obj.cd.xf[12],obj.cd.yf[12],"s")
plot(obj.cd.xf[13],obj.cd.yf[13],"s")
plot(obj.cd.xf[14],obj.cd.yf[14],"s")
plot(obj.cd.xf[15],obj.cd.yf[15],"s")
plot(obj.cd.xf[16],obj.cd.yf[16],"s")
plot(obj.cd.xf[17],obj.cd.yf[17],"s")
plot(obj.cd.xf[18],obj.cd.yf[18],"s")
plot(obj.cd.xf[19],obj.cd.yf[19],"s")
plot(obj.cd.xf[20],obj.cd.yf[20],"s")
plot(obj.cd.xf[21],obj.cd.yf[21],"s")
plot(obj.cd.xf[22],obj.cd.yf[22],"s")
plot(obj.cd.xf[23],obj.cd.yf[23],"s")
plot(obj.cd.xf[24],obj.cd.yf[24],"s")
plot(obj.cd.xf[25],obj.cd.yf[25],"s")
plot(obj.ab.xf[0],obj.ab.yf[0],"s")
plot(obj.ab.xf[1],obj.ab.yf[1],"s")
plot(obj.ab.xf[2],obj.ab.yf[2],"s")
plot(obj.ab.xf[3],obj.ab.yf[3],"s")
plot(obj.ab.xf[4],obj.ab.yf[4],"s")
plot(obj.ab.xf[5],obj.ab.yf[5],"s")
plot(obj.ab.xf[6],obj.ab.yf[6],"s")
plot(obj.ab.xf[7],obj.ab.yf[7],"s")
plot(obj.ab.xf[8],obj.ab.yf[8],"s")
plot(obj.ab.xf[9],obj.ab.yf[9],"s")
plot(obj.ab.xf[10],obj.ab.yf[10],"s")
plot(obj.ab.xf[11],obj.ab.yf[11],"s")
plot(obj.ab.xf[12],obj.ab.yf[12],"s")
plot(obj.ab.xf[13],obj.ab.yf[13],"s")
plot(obj.ab.xf[14],obj.ab.yf[14],"s")
plot(obj.ab.xf[15],obj.ab.yf[15],"s")
plot(obj.ab.xf[16],obj.ab.yf[16],"s")
plot(obj.ab.xf[17],obj.ab.yf[17],"s")
plot(obj.ab.xf[18],obj.ab.yf[18],"s")
plot(obj.ab.xf[19],obj.ab.yf[19],"s")
plot(obj.ab.xf[20],obj.ab.yf[20],"s")
plot(obj.ab.xf[21],obj.ab.yf[21],"s")
plot(obj.ab.xf[22],obj.ab.yf[22],"s")
plot(obj.ab.xf[23],obj.ab.yf[23],"s")
plot(obj.ab.xf[24],obj.ab.yf[24],"s")
plot(obj.ab.xf[25],obj.ab.yf[25],"s")
plot(obj.ac.xf[0],obj.ac.yf[0],"b")
plot(obj.ac.xf[1],obj.ac.yf[1],"b")
plot(obj.ac.xf[2],obj.ac.yf[2],"b")
plot(obj.ac.xf[3],obj.ac.yf[3],"b")
plot(obj.ac.xf[4],obj.ac.yf[4],"b")
plot(obj.ac.xf[5],obj.ac.yf[5],"b")
plot(obj.ac.xf[6],obj.ac.yf[6],"b")
plot(obj.ac.xf[7],obj.ac.yf[7],"b")
plot(obj.ac.xf[8],obj.ac.yf[8],"b")
plot(obj.ac.xf[9],obj.ac.yf[9],"b")
plot(obj.ac.xf[10],obj.ac.yf[10],"b")
plot(obj.ac.xf[11],obj.ac.yf[11],"b")
plot(obj.ac.xf[12],obj.ac.yf[12],"b")
plot(obj.ac.xf[13],obj.ac.yf[13],"b")
plot(obj.ac.xf[14],obj.ac.yf[14],"b")
plot(obj.ac.xf[15],obj.ac.yf[15],"b")
plot(obj.ac.xf[16],obj.ac.yf[16],"b")
plot(obj.ac.xf[17],obj.ac.yf[17],"b")
plot(obj.ac.xf[18],obj.ac.yf[18],"b")
plot(obj.ac.xf[19],obj.ac.yf[19],"b")
plot(obj.ac.xf[20],obj.ac.yf[20],"b")
plot(obj.ac.xf[21],obj.ac.yf[21],"b")
plot(obj.ac.xf[22],obj.ac.yf[22],"b")
plot(obj.ac.xf[23],obj.ac.yf[23],"b")
plot(obj.ac.xf[24],obj.ac.yf[24],"b")
plot(obj.ac.xf[25],obj.ac.yf[25],"b")
plot(obj.ac.xf[26],obj.ac.yf[26],"b")
plot(obj.ac.xf[27],obj.ac.yf[27],"b")
plot(obj.ac.xf[28],obj.ac.yf[28],"b")
plot(obj.ac.xf[29],obj.ac.yf[29],"b")
plot(obj.ac.xf[30],obj.ac.yf[30],"b")
plot(obj.ac.xf[31],obj.ac.yf[31],"b")
plot(obj.ac.xf[32],obj.ac.yf[32],"b")
plot(obj.ac.xf[33],obj.ac.yf[33],"b")
plot(obj.ac.xf[34],obj.ac.yf[34],"b")
plot(obj.ac.xf[35],obj.ac.yf[35],"b")
plot(obj.ac.xf[36],obj.ac.yf[36],"b")
plot(obj.ac.xf[37],obj.ac.yf[37],"b")
plot(obj.ac.xf[38],obj.ac.yf[38],"b")
plot(obj.ac.xf[39],obj.ac.yf[39],"b")
plot(obj.ac.xf[40],obj.ac.yf[40],"b")
plot(obj.ac.xf[41],obj.ac.yf[41],"b")
plot(obj.ac.xf[42],obj.ac.yf[42],"b")
plot(obj.ac.xf[43],obj.ac.yf[43],"b")
plot(obj.ac.xf[44],obj.ac.yf[44],"b")
plot(obj.ac.xf[45],obj.ac.yf[45],"b")
plot(obj.ac.xf[46],obj.ac.yf[46],"b")
plot(obj.ac.xf[47],obj.ac.yf[47],"b")
plot(obj.ac.xf[48],obj.ac.yf[48],"b")
plot(obj.ac.xf[49],obj.ac.yf[49],"b")
plot(obj.ac.xf[50],obj.ac.yf[50],"b")
plot(obj.ac.xf[51],obj.ac.yf[51],"b")
plot(obj.ac.xf[52],obj.ac.yf[52],"b")
plot(obj.ac.xf[53],obj.ac.yf[53],"b")
plot(obj.ac.xf[54],obj.ac.yf[54],"b")
plot(obj.ac.xf[55],obj.ac.yf[55],"b")
plot(obj.ac.xf[56],obj.ac.yf[56],"b")
plot(obj.ac.xf[57],obj.ac.yf[57],"b")
plot(obj.ac.xf[58],obj.ac.yf[58],"b")
plot(obj.ac.xf[59],obj.ac.yf[59],"b")
plot(obj.ac.xf[60],obj.ac.yf[60],"b")
plot(obj.ac.xf[61],obj.ac.yf[61],"b")
plot(obj.ac.xf[62],obj.ac.yf[62],"b")
plot(obj.ac.xf[63],obj.ac.yf[63],"b")
plot(obj.ac.xf[64],obj.ac.yf[64],"b")
plot(obj.ac.xf[65],obj.ac.yf[65],"b")
plot(obj.ac.xf[66],obj.ac.yf[66],"b")
plot(obj.ac.xf[67],obj.ac.yf[67],"b")
plot(obj.ac.xf[68],obj.ac.yf[68],"b")
plot(obj.ac.xf[69],obj.ac.yf[69],"b")
plot(obj.ac.xf[70],obj.ac.yf[70],"b")
plot(obj.ac.xf[71],obj.ac.yf[71],"b")
plot(obj.ac.xf[72],obj.ac.yf[72],"b")
plot(obj.ac.xf[73],obj.ac.yf[73],"b")
plot(obj.ac.xf[74],obj.ac.yf[74],"b")
plot(obj.ac.xf[75],obj.ac.yf[75],"b")
plot(obj.ac.xf[76],obj.ac.yf[76],"b")
plot(obj.ac.xf[77],obj.ac.yf[77],"b")
plot(obj.ac.xf[78],obj.ac.yf[78],"b")
plot(obj.ac.xf[79],obj.ac.yf[79],"b")
plot(obj.ac.xf[80],obj.ac.yf[80],"b")
plot(obj.ac.xf[81],obj.ac.yf[81],"b")
plot(obj.ac.xf[82],obj.ac.yf[82],"b")
plot(obj.ac.xf[83],obj.ac.yf[83],"b")
plot(obj.ac.xf[84],obj.ac.yf[84],"b")
plot(obj.ac.xf[85],obj.ac.yf[85],"b")
plot(obj.ac.xf[86],obj.ac.yf[86],"b")
plot(obj.ac.xf[87],obj.ac.yf[87],"b")
plot(obj.ac.xf[88],obj.ac.yf[88],"b")
plot(obj.ac.xf[89],obj.ac.yf[89],"b")
plot(obj.ac.xf[90],obj.ac.yf[90],"b")
plot(obj.ac.xf[91],obj.ac.yf[91],"b")
plot(obj.ac.xf[92],obj.ac.yf[92],"b")
plot(obj.ac.xf[93],obj.ac.yf[93],"b")
plot(obj.ac.xf[94],obj.ac.yf[94],"b")
plot(obj.ac.xf[95],obj.ac.yf[95],"b")
plot(obj.ac.xf[96],obj.ac.yf[96],"b")
plot(obj.ac.xf[97],obj.ac.yf[97],"b")
plot(obj.ac.xf[98],obj.ac.yf[98],"b")
plot(obj.ac.xf[99],obj.ac.yf[99],"b")
plot(obj.ac.xf[100],obj.ac.yf[100],"b")
var extra = 'blinewidth 1 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

var end = buffer + text + extra;
console.log(end);

function writer(){
  var str = '';
  for(i=0;i<=smallN;i++){
    str+= 'plot(obj.cd.xb[' + i + '],obj.cd.yb[' + i + '],"s")' + '\n';
  }
  for(i=0;i<=smallN;i++){
    str+= 'plot(obj.ab.xb[' + i + '],obj.ab.yb[' + i + '],"s")' + '\n';
  }
  for(i=0;i<=bigN;i++){
    str+= 'plot(obj.bd.xb[' + i + '],obj.bd.yb[' + i + '],"b")' + '\n';
  }
  for(i=0;i<=smallN;i++){
    str+= 'plot(obj.cd.xf[' + i + '],obj.cd.yf[' + i + '],"s")' + '\n';
  }
  for(i=0;i<=smallN;i++){
    str+= 'plot(obj.ab.xf[' + i + '],obj.ab.yf[' + i + '],"s")' + '\n';
  }
  for(i=0;i<=bigN;i++){
    str+= 'plot(obj.ac.xf[' + i + '],obj.ac.yf[' + i + '],"b")' + '\n';
  }
  return str
}
var str = writer();
//console.log(str)
