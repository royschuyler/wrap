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

// function equalOut (x1,y1,x2,y2){
//   var obj = {
//   x1: [],
//   y1: [],
//   x2: [],
//   y2: []
//   }
//   for(w=0;w<x1.length;w++){
//     obj.x1.push(x1[w]);
//     obj.y1.push(y1[w]);
//   }
//   for(g=0;g<x2.length;g++){
//     obj.x2.push(x2[g]);
//     obj.y2.push(y2[g]);
//   }
//   var dif = Math.abs(x1.length - x2.length);
//      if(x1.length>x2.length){
//        for(q=x2.length;q<x1.length;q++){
//          obj.x2.push(x2[x2.length-1]);
//          obj.y2.push(y2[y2.length-1]);
//         }
//       }else{
//         for(q=x1.length;q<x2.length;q++){
//           obj.x1.push(x1[x1.length-1]);
//           obj.y1.push(y1[y1.length-1]);
//         }
//       }
//   return obj
// }



// function combine(x1,x2,y1,y2,newx,newy){
//   for(i=0;i<x1.length;i++){
//     newx.push(x1[i]);
//     newx.push(x2[i]);
//     newy.push(y1[i]);
//     newy.push(y2[i]);
//   }
// }

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

var wrapObj = getWraps(rings,0,1000,sqrt(2),15,1,1.1,0,20,.88,.99,.88);

function more (obj){
  frontAndBack(obj.aBackCount,obj.ax,obj.ay,obj.axBack,obj.axFront,obj.ayBack,obj.ayFront);
  frontAndBack(obj.bBackCount,obj.bx,obj.by,obj.bxBack,obj.bxFront,obj.byBack,obj.byFront);
  frontAndBack(obj.cBackCount,obj.cx,obj.cy,obj.cxBack,obj.cxFront,obj.cyBack,obj.cyFront);
  frontAndBack(obj.dBackCount,obj.dx,obj.dy,obj.dxBack,obj.dxFront,obj.dyBack,obj.dyFront);
  return obj
}

var moreWrapObj = more(wrapObj);
console.log(moreWrapObj)

  var shadeObj = {
  ac:{
    axf: [],
    ayf: [],
    axb: [],
    ayb: [],
    cxf: [],
    cyf: [],
    cxb: [],
    cyb: []
  },
  bd:{
    bxf: [],
    byf: [],
    bxb: [],
    byb: [],
    dxf: [],
    dyf: [],
    dxb: [],
    dyb: []
  },
  ab:{
    axf: [],
    ayf: [],
    axb: [],
    ayb: [],
    bxf: [],
    byf: [],
    bxb: [],
    byb: []
  },
  cd:{
    cxf: [],
    cyf: [],
    cxb: [],
    cyb: [],
    dxf: [],
    dyf: [],
    dxb: [],
    dyb: []
  }
}

for(z=0;z<rings;z++){
  shadeObj.ac.axf.push(moreWrapObj.axFront[z]);
  shadeObj.ac.ayf.push(moreWrapObj.ayFront[z]);
  shadeObj.ac.cxf.push(moreWrapObj.cxFront[z]);
  shadeObj.ac.cyf.push(moreWrapObj.cyFront[z]);

  shadeObj.ac.axb.push(moreWrapObj.axBack[z]);
  shadeObj.ac.ayb.push(moreWrapObj.ayBack[z]);
  shadeObj.ac.cxb.push(moreWrapObj.cxBack[z]);
  shadeObj.ac.cyb.push(moreWrapObj.cyBack[z]);

  shadeObj.bd.bxf.push(moreWrapObj.bxFront[z]);
  shadeObj.bd.byf.push(moreWrapObj.byFront[z]);
  shadeObj.bd.dxf.push(moreWrapObj.dxFront[z]);
  shadeObj.bd.dyf.push(moreWrapObj.dyFront[z]);

  shadeObj.bd.bxb.push(moreWrapObj.bxBack[z]);
  shadeObj.bd.byb.push(moreWrapObj.byBack[z]);
  shadeObj.bd.dxb.push(moreWrapObj.dxBack[z]);
  shadeObj.bd.dyb.push(moreWrapObj.dyBack[z]);

  shadeObj.cd.cxf.push(moreWrapObj.cxFront[z]);
  shadeObj.cd.cyf.push(moreWrapObj.cyFront[z]);
  shadeObj.cd.dxf.push(moreWrapObj.dxFront[z]);
  shadeObj.cd.dyf.push(moreWrapObj.dyFront[z]);

  shadeObj.cd.cxb.push(moreWrapObj.cxBack[z]);
  shadeObj.cd.cyb.push(moreWrapObj.cyBack[z]);
  shadeObj.cd.dxb.push(moreWrapObj.dxBack[z]);
  shadeObj.cd.dyb.push(moreWrapObj.dyBack[z]);

  shadeObj.ab.axf.push(moreWrapObj.axFront[z]);
  shadeObj.ab.ayf.push(moreWrapObj.ayFront[z]);
  shadeObj.ab.bxf.push(moreWrapObj.bxFront[z]);
  shadeObj.ab.byf.push(moreWrapObj.byFront[z]);

  shadeObj.ab.axb.push(moreWrapObj.axBack[z]);
  shadeObj.ab.ayb.push(moreWrapObj.ayBack[z]);
  shadeObj.ab.bxb.push(moreWrapObj.bxBack[z]);
  shadeObj.ab.byb.push(moreWrapObj.byBack[z]);

  //equalOut (bx1,by1,bx2,by2,fx1,fy1,fx2,fy2)
  equalOut (shadeObj.ac.axb[z],shadeObj.ac.ayb[z],shadeObj.ac.cxb[z],shadeObj.ac.cyb[z],shadeObj.ac.axf[z],shadeObj.ac.ayf[z],shadeObj.ac.cxf[z],shadeObj.ac.cyf[z]);

 equalOut (shadeObj.bd.bxb[z],shadeObj.bd.byb[z],shadeObj.bd.dxb[z],shadeObj.bd.dyb[z],shadeObj.bd.bxf[z],shadeObj.bd.byf[z],shadeObj.bd.dxf[z],shadeObj.bd.dyf[z]);

 equalOut (shadeObj.cd.cxb[z],shadeObj.cd.cyb[z],shadeObj.cd.dxb[z],shadeObj.cd.dyb[z],shadeObj.cd.cxf[z],shadeObj.cd.cyf[z],shadeObj.cd.dxf[z],shadeObj.cd.dyf[z]);

 equalOut (shadeObj.ab.axb[z],shadeObj.ab.ayb[z],shadeObj.ab.bxb[z],shadeObj.ab.byb[z],shadeObj.ab.axf[z],shadeObj.ab.ayf[z],shadeObj.ab.bxf[z],shadeObj.ab.byf[z])

}
console.log(shadeObj);


//look(shadeObj.ac.axb[0],shadeObj.ac.ayb[0])

//**********SHADE TESTS***************************
// var text = '';
// var buffer = '';
// var finalCount = 0;

// function plot(x1,y1,x2,y2,s){
//    //1 = white
//    //0 = black
//   var scale = 1;
//   var use = 1/(x1.length/2);
//   var k = 0;
//   var m = 0;

//    for(i=0;i<x1.length;i++){
//       if(k<x1.length/2){
//         var put = use * m;
//         m++
//         //end should be 1
//       }
//       if(k>=x1.length/2){
//         var put = use * m;
//         m--
//         //end should be 0
//       }
//       buffer += 'newbuffer' + '\n';
//       text += 'addvalue ' + k + ' ' + x1[i] + ' ' + y1[i] + '\n';
//       text += 'addvalue ' + k + ' ' + x2[i] + ' ' + y2[i] + '\n';

//       if(s == 's'){
//         text += 'bcolor ' + .9 + ' ' + put + ' ' + put + ' ' + k + '\n'
//       } else{
//         text += 'bcolor ' + put + ' ' + put + ' ' + put + ' ' + k + '\n'
//       }
//       k++
//    }
// }

// var x1 = shadeObj.ac.axf[0];
// var y1 = shadeObj.ac.ayf[0];
// var x2 = shadeObj.ac.cxf[0];
// var y2 = shadeObj.ac.cyf[0];
// var s = 'b';

// plot(shadeObj.ac.axf[0],shadeObj.ac.ayf[0],shadeObj.ac.cxf[0],shadeObj.ac.cyf[0],s)

// var extra = 'blinewidth 1 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

// var end = buffer + text + extra;
//console.log(end);
