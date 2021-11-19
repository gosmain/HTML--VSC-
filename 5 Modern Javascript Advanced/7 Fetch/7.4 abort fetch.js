/*
fetch는 항상 프로미스를 리턴함. 그리고 JS에 프로미스를 abort(어기는) 개념은 존재하지 않음. 
: 그렇다면 이미 실행중안 fetch를 멈추는 방법은 무엇일까?
예시: 사이트의 사용자 행동에 fetch가 더 이상 필요없다고 표시되는 경우

정답: 기본제공 객체 AbortController를 사용. (단순히 fetch뿐만 아니라 다른 비동기 작업들도 중단시키는데 사용가능)

AbortController는 Abort() 메서드가 호출될 때 신호 속성에 대해 중단 이벤트를 생성하는 간단한 객체(신호도 true로 설정)
fetch와의 상호작용: 옵션으로 신호 속성을 전달한 다음, fetch가 수신 대기하므로 fetch를 중단(abort)할 수 있음
코드 속 AbortController사용가능: "call abort" → "call abort event" 상호 작용은 간단하고 보편적.(fetch없이도 사용가능)
*/

let urls = [x, y, z, ...n];
let controller = new AbortController();

let ourJob = new Promise((resolve, reject) => {
    // our task
    controller.signal.addEventListener("abort", reject);
});

let fetchJobs = urls.map(url => fetch(url, { // fetches
    signal: controller.signal
}));

let results = await Promise.all([...fetchJobs, ourJob]); // 병렬로 fetches들과 ourtask 기다리기

// 다른 곳에서 controller.abort()가 호출되면 모든 fetch와 ourJob을 종료(abort)