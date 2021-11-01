/* 
프로미스화는 콜백을 완전히 대체하지는 못함: 프로미스는 하나의 결과만 가질 수 있지만, 콜백은 여러번 호출이 가능하기 때문
따라서, 프로미스화는 콜백을 단 한 번 호출하는 함수에만 적용하는게 용이 
(프로미스화한 함수의 콜백을 여러번 호출해도 두 번째부터는 무시됨)
*/

// 콜백의 성공 결과를 담은 배열을 얻게 해주는 promisify(f, true) : 헬퍼 함수
function promisify(f, manyArgs = false) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        function callback(err, ...results) { // f에 사용할 커스텀 콜백
          if (err) {
            reject(err);
          } else {
            // manyArgs가 구체적으로 명시되었다면, 콜백의 성공 케이스와 함께 이행 상태가 됩니다.
            resolve(manyArgs ? results : results[0]);
          }
        }
  
        args.push(callback);
  
        f.call(this, ...args);
      });
    };
  };

// 사용법:
f = promisify(f, true);
f(zzz).then(arrayOfResults => xxx, err => yyy);


// 위의 헬퍼 함수 말고도 직접 프로미스화 할 수 있고 이를 도와주는 함수를 제공하는 모듈도 많음(es6-promisify)