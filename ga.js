/* 補助金レーダー — アクセス計測ローダー（Google Analytics 4）
   使い方：TowaがGA4の「測定ID（G-から始まる）」をここに入れるだけで、全ページの計測が始まる。
   空のままでもサイトは正常動作（計測だけOFF）。 */
var GA_MEASUREMENT_ID = "G-KJ2JFQZLCC"; // 補助金レーダー GA4（2026-06-24 設定）

window.dataLayer = window.dataLayer || [];
window.gtag = function(){ dataLayer.push(arguments); };

if (GA_MEASUREMENT_ID) {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

/* ファネル計測用ヘルパー。IDが未設定なら何もしない＝安全。
   srTrack('diagnose_complete') / srTrack('lead_submit') / srTrack('cta_click', {from:'article'}) */
window.srTrack = function(name, params){
  try { if (GA_MEASUREMENT_ID) gtag('event', name, params || {}); } catch(e){}
};
