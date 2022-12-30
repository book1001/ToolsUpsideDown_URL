// 미지원 브라우저 indexie.html페이지 띄우기
var userAgent = window.navigator.userAgent;
var isChrome = userAgent.indexOf('Chrome');
var isChromeMobile = userAgent.indexOf('CriOS');
var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
var isWindows = userAgent.indexOf('Windows NT');
var isEdge = userAgent.indexOf('Edge');
var isIE = userAgent.indexOf('Trident');

// 익스플로러 브라우저 체크
if(isIE > -1){
    window.location.href="index_ie.html"
}

// // 크로미움 브라우저가 아닌 경우 체크
// if(isChrome < 0 || isChromeMobile < 0) {
//   window.location.href = "http://naver.com";
// }
//
// // 크로미움 브라우저 체크
// if(isChrome > -1 || isChromeMobile > -1){
//   if(isSamsungBrowser < 0 && isEdge < 0){
//     window.location.href="http://naver.com"
//   }
// }
