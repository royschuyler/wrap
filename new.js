var rings = 3;

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

function equalOut (bx1,by1,bx2,by2,fx1,fy1,fx2,fy2){
  var dif = Math.abs(bx1.length - bx2.length);
  if(bx1.length>bx2.length){
    for(i=bx2.length;i<bx1.length;i++){
      bx2.push(bx2[bx2.length-1]);
      by2.push(by2[by2.length-1]);
      fx1.push(fx1[fx1.length-1]);
      fy1.push(fy1[fy1.length-1]);
    }
  }else{
    for(i=bx1.length;i<bx2.length;i++){
      bx1.push(bx1[bx1.length-1]);
      by1.push(by1[by1.length-1]);
      fx2.push(fx2[fx2.length-1]);
      fy2.push(fy2[fy2.length-1]);
    }
  }
}

//********************************************************
function getWraps(rings,mainStart,d,a,n,f1,f2,ringStart,startAdd,wrapSizeS,bHyp,sHyp){
  var obj = {
    ax: [],
    ay: [],
    aBackCount: [],
    aFrontCount: [],
    axBack: [],
    axFront: [],
    ayBack: [],
    ayFront: [],
    bx: [],
    by: [],
    bBackCount: [],
    bFrontCount: [],
    bxBack: [],
    bxFront: [],
    byBack: [],
    byFront: [],
    cx: [],
    cy: [],
    cBackCount: [],
    cFrontCount: [],
    cxBack: [],
    cxFront: [],
    cyBack: [],
    cyFront: [],
    dx: [],
    dy: [],
    dBackCount: [],
    dFrontCount: [],
    dxBack: [],
    dxFront: [],
    dyBack: [],
    dyFront: []
  }

  for (k=0;k<rings;k++){
    var rings = rings;
    var baseArrab = [];
    var baseArrcd = [];
    var ringStart = ringStart;
    var mainStart = mainStart;
    var startAdd = startAdd;
    var base = 360/rings;
    var abStart;
    var cdStart;
    for(i=0;i<rings;i++){
      baseArrab.push(radians(mainStart+(i+1)*base));
      baseArrcd.push(radians(startAdd+mainStart+(i+1)*base));
    }
    //console.log(baseArrab);
    //console.log(baseArrcd)
    var d = d;
    var a = a;
    var n = n;
    var f1 = f1;
    var f2 = f2;
    //NON-TOUCHERS
    var ringStartab = baseArrab[k];
    var ringStartcd = baseArrcd[k];
    var wrapSizeB = 1;
    var ringRad = radians(360/rings);
    var startRad = radians(ringStart);
    var addRad = startAdd;
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

    var wrapAx = wrapXFun(wrapRadArr,ringStartab,pathx,wrapSizeB);
    var wrapAy = wrapYFun(pathx,e,wrapRadArr,ringStartab,pathy,wrapSizeB);
    var wrapBx = wrapXFun(wrapRadArr,ringStartab,pathx,wrapSizeS);
    var wrapBy = wrapYFun(pathx,e,wrapRadArr,ringStartab,pathy,wrapSizeS);
    var wrapCx = wrapXFun(wrapRadArr,ringStartcd,pathx,wrapSizeB);
    var wrapCy = wrapYFun(pathx,e,wrapRadArr,ringStartcd,pathy,wrapSizeB);
    var wrapDx = wrapXFun(wrapRadArr,ringStartcd,pathx,wrapSizeS);
    var wrapDy = wrapYFun(pathx,e,wrapRadArr,ringStartcd,pathy,wrapSizeS);

    obj.ax.push(wrapAx);
    obj.ay.push(wrapAy);
    obj.bx.push(wrapBx);
    obj.by.push(wrapBy);
    obj.cx.push(wrapCx);
    obj.cy.push(wrapCy);
    obj.dx.push(wrapDx);
    obj.dy.push(wrapDy);

    // obj.ax.reverse();
    // obj.ay.reverse();
    // obj.bx.reverse();
    // obj.by.reverse();
    // obj.cx.reverse();
    // obj.cy.reverse();
    // obj.dx.reverse();
    // obj.dy.reverse();

    var aBackCount = getFront(wrapAx,wrapAy,bHyp);
    var bBackCount = getFront(wrapBx,wrapBy,sHyp);
    var cBackCount = getFront(wrapCx,wrapCy,bHyp);
    var dBackCount = getFront(wrapDx,wrapDy,sHyp);

    obj.aBackCount.push(aBackCount);
    obj.bBackCount.push(bBackCount);
    obj.cBackCount.push(cBackCount);
    obj.dBackCount.push(dBackCount);

    obj.aFrontCount.push(d - aBackCount);
    obj.bFrontCount.push(d - bBackCount);
    obj.cFrontCount.push(d - cBackCount);
    obj.dFrontCount.push(d - dBackCount);

      } //end loop
    return(obj)
} //end funtion

var wrapObj = getWraps(rings,5,1000,sqrt(2),15,1,1.1,0,20,.88,.99,.88);

function more (obj){
  frontAndBack(obj.aBackCount,obj.ax,obj.ay,obj.axBack,obj.axFront,obj.ayBack,obj.ayFront);
  frontAndBack(obj.bBackCount,obj.bx,obj.by,obj.bxBack,obj.bxFront,obj.byBack,obj.byFront);
  frontAndBack(obj.cBackCount,obj.cx,obj.cy,obj.cxBack,obj.cxFront,obj.cyBack,obj.cyFront);
  frontAndBack(obj.dBackCount,obj.dx,obj.dy,obj.dxBack,obj.dxFront,obj.dyBack,obj.dyFront);
  return obj
}

var moreWrapObj = more(wrapObj)
console.log(moreWrapObj)



//**********SHADE TESTS***************************
var text = '';
var buffer = '';
var finalCount = 0;

function plot(x1,y1,x2,y2,s){

function getLength(x1,x2){
  if(x1.length > x2.length){
    var length = x2.length -1;
  }else{
    var length = x1.length -1;
  }
  return length
}
  var length = getLength(x1,x2)
   //1 = white
   //0 = black
  var scale = 1;
  var use = 1/(x1.length/2);
  var k = 0;
  var m = 0;

   for(i=0;i<length;i++){
      if(k<x1.length/2){
        var put = use * m;
        m++
        //end should be 1
      }
      if(k>=x1.length/2){
        var put = use * m;
        m--
        //end should be 0
      }
      buffer += 'newbuffer' + '\n';
      text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
      text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';

      if(s == 's'){
        text += 'bcolor ' + .9 + ' ' + put + ' ' + put + ' ' + finalCount + '\n'
      } else{
        text += 'bcolor ' + put + ' ' + put + ' ' + put + ' ' + finalCount + '\n'
      }
      k++
     finalCount++
   }
}

// cd back
// ab back
// bd back
// cd front
// ab front
// ac front

// for(h=0;h<rings.length;h++){
//   plot(moreWrapObj.cxBack[h],moreWrapObj.cyBack[h],moreWrapObj.dxBack[h],moreWrapObj.dyBack[h],'s');
//   plot(moreWrapObj.axBack[h],moreWrapObj.ayBack[h],moreWrapObj.bxBack[h],moreWrapObj.byBack[h],'s');
//   plot(moreWrapObj.bxBack[h],moreWrapObj.byBack[h],moreWrapObj.dxBack[h],moreWrapObj.dyBack[h],'b');

//   plot(moreWrapObj.cxFront[h],moreWrapObj.cyFront[h],moreWrapObj.dxFront[h],moreWrapObj.dyFront[h],'s');
//   plot(moreWrapObj.axFront[h],moreWrapObj.ayFront[h],moreWrapObj.bxFront[h],moreWrapObj.byFront[h],'s');
//   plot(moreWrapObj.axFront[h],moreWrapObj.ayFront[h],moreWrapObj.cxFront[h],moreWrapObj.cyFront[h],'b');
// }

//BACK
plot(moreWrapObj.cxBack[0],moreWrapObj.cyBack[0],moreWrapObj.dxBack[0],moreWrapObj.dyBack[0],'s');
plot(moreWrapObj.axBack[0],moreWrapObj.ayBack[0],moreWrapObj.bxBack[0],moreWrapObj.byBack[0],'s');
plot(moreWrapObj.bxBack[0],moreWrapObj.byBack[0],moreWrapObj.dxBack[0],moreWrapObj.dyBack[0],'b');

plot(moreWrapObj.cxBack[1],moreWrapObj.cyBack[1],moreWrapObj.dxBack[1],moreWrapObj.dyBack[1],'s');
plot(moreWrapObj.axBack[1],moreWrapObj.ayBack[1],moreWrapObj.bxBack[1],moreWrapObj.byBack[1],'s');
plot(moreWrapObj.bxBack[1],moreWrapObj.byBack[1],moreWrapObj.dxBack[1],moreWrapObj.dyBack[1],'b');

plot(moreWrapObj.cxBack[2],moreWrapObj.cyBack[2],moreWrapObj.dxBack[2],moreWrapObj.dyBack[2],'s');
plot(moreWrapObj.axBack[2],moreWrapObj.ayBack[2],moreWrapObj.bxBack[2],moreWrapObj.byBack[2],'s');
plot(moreWrapObj.bxBack[2],moreWrapObj.byBack[2],moreWrapObj.dxBack[2],moreWrapObj.dyBack[2],'b');

//FRONT
plot(moreWrapObj.cxFront[0],moreWrapObj.cyFront[0],moreWrapObj.dxFront[0],moreWrapObj.dyFront[0],'s');
plot(moreWrapObj.axFront[0],moreWrapObj.ayFront[0],moreWrapObj.bxFront[0],moreWrapObj.byFront[0],'s');
plot(moreWrapObj.axFront[0],moreWrapObj.ayFront[0],moreWrapObj.cxFront[0],moreWrapObj.cyFront[0],'b');

plot(moreWrapObj.cxFront[1],moreWrapObj.cyFront[1],moreWrapObj.dxFront[1],moreWrapObj.dyFront[1],'s');
plot(moreWrapObj.axFront[1],moreWrapObj.ayFront[1],moreWrapObj.bxFront[1],moreWrapObj.byFront[1],'s');
plot(moreWrapObj.axFront[1],moreWrapObj.ayFront[1],moreWrapObj.cxFront[1],moreWrapObj.cyFront[1],'b');

plot(moreWrapObj.cxFront[2],moreWrapObj.cyFront[2],moreWrapObj.dxFront[2],moreWrapObj.dyFront[2],'s');
plot(moreWrapObj.axFront[2],moreWrapObj.ayFront[2],moreWrapObj.bxFront[2],moreWrapObj.byFront[2],'s');
plot(moreWrapObj.axFront[2],moreWrapObj.ayFront[2],moreWrapObj.cxFront[2],moreWrapObj.cyFront[2],'b');



var extra = 'blinewidth 2 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

var end = buffer + text + extra;
console.log(end);
