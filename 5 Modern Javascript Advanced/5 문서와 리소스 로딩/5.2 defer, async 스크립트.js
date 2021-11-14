async;
// 문서 내 순서와 상관없이 먼저 다운로드된 스크립트가 먼저 실행 (load-first order)
<script async src="https://google-analytics.com/analytics.js"></script>

defer;
// 문서에 추가된 순
<script defer src="https://javascript.info/article/script-async-defer/long.js"></script>

/* 
실무 ==>
1. defer: DOM 전체가 필요한 스크립트나 실행 순서가 중요한 경우 적용
2. async: 방문자 수 카운터나 광고 관련 스크립트같이 독립적인 스크립트(실행 순서가 중요하지 않은 경우) 적용
*/