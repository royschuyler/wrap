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

function separateFrontAndBack(d,x,y,backCount,xfront,xback,yfront,yback){
  for(i=0;i<d;i++){
    if(i<backCount){
      xback.push(x[0][i])
      yback.push(y[0][i])
    }else{
      xfront.push(x[0][i])
      yfront.push(y[0][i])
    }
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

function combine(x1,x2,y1,y2,newx,newy){
  for(i=0;i<x1.length;i++){
    newx.push(x1[i]);
    newx.push(x2[i]);
    newy.push(y1[i]);
    newy.push(y2[i]);
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
    var ringRadArr = [];
    var mainStart = mainStart;
    for(i=0;i<rings;i++){
      ringRadArr.push((i+1)*radians(mainStart + (360/rings)));
    }

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

    obj.ax.reverse();
    obj.ay.reverse();
    obj.bx.reverse();
    obj.by.reverse();
    obj.cx.reverse();
    obj.cy.reverse();
    obj.dx.reverse();
    obj.dy.reverse();

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

    separateFrontAndBack(d,obj.ax,obj.ay,aBackCount,obj.axFront,obj.axBack,obj.ayFront,obj.ayBack);
    separateFrontAndBack(d,obj.bx,obj.by,bBackCount,obj.bxFront,obj.bxBack,obj.byFront,obj.byBack);
    separateFrontAndBack(d,obj.cx,obj.cy,cBackCount,obj.cxFront,obj.cxBack,obj.cyFront,obj.cyBack);
    separateFrontAndBack(d,obj.dx,obj.dy,dBackCount,obj.dxFront,obj.dxBack,obj.dyFront,obj.dyBack);

    var shadeObj = {
      acObj: {
        aBackCount: obj.aBackCount,
        aFrontCount: obj.aFrontCount,
        axBack: obj.axBack,
        axFront: obj.axFront,
        ayBack: obj.ayBack,
        ayFront: obj.ayFront,
        cBackCount: obj.cBackCount,
        cFrontCount: obj.cFrontCount,
        cxBack: obj.cxBack,
        cxFront: obj.cxFront,
        cyBack: obj.cyBack,
        cyFront: obj.cyFront,
        newx: [],
        newy: []
      }
    }



equalOut(shadeObj.acObj.axBack,shadeObj.acObj.ayBack,shadeObj.acObj.cxBack,shadeObj.acObj.cyBack,shadeObj.acObj.axFront,shadeObj.acObj.ayFront,shadeObj.acObj.cxFront,shadeObj.acObj.cyFront);

combine(shadeObj.acObj.axBack,shadeObj.acObj.cxBack,shadeObj.acObj.ayBack,shadeObj.acObj.cyBack,shadeObj.acObj.newx,shadeObj.acObj.newy)

  } //end loop
    return(shadeObj)
} //end funtion

var wrapObj = getWraps(1,0,1000,sqrt(2),15,1,1.1,0,20,.88,.99,.88);
//console.log(wrapObj);

//in the main funtion, pair real connections
//separate backs and fronts
//a and c front
//ba and d back
//c and d front and back

//**********SHADE TESTS***************************
var text = '';
var buffer = '';
var finalCount = 0;

function plot(x1,y1,x2,y2,s){
   //1 = white
   //0 = black
  var scale = 1;
  var use = 1/(x1.length/2);
  var k = 0;
  var m = 0;

   for(i=0;i<x1.length;i++){
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
      text += 'addvalue ' + k + ' ' + x1[i] + ' ' + y1[i] + '\n';
      text += 'addvalue ' + k + ' ' + x2[i] + ' ' + y2[i] + '\n';

      if(s == 's'){
        text += 'bcolor ' + .9 + ' ' + put + ' ' + put + ' ' + k + '\n'
      } else{
        text += 'bcolor ' + put + ' ' + put + ' ' + put + ' ' + k + '\n'
      }
      k++
   }
}

var x1 = wrapObj.acObj.axBack;
var x2 = wrapObj.acObj.cxBack;
var y1 = wrapObj.acObj.ayBack;
var y2 = wrapObj.acObj.cyBack;
var s = 'b';
plot(x1,y1,x2,y2,s)

var extra = 'blinewidth 1 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

var end = buffer + text + extra;
console.log(end);
