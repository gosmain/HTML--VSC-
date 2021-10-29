정적메서드
// prototype이 아닌 클래스 함수 자체에 메서드를 설정할 수 있음 : 이런 메서드를 static(정적)메서드라고 부름
// 정적 메서드는 특정 클래스 인스턴스가 아닌 클래스 '전체’에 필요한 기능을 만들 때 사용

예시1;
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
  
    static compare(articleA, articleB) {  // 정적 메서드 : compare (인스턴스끼리의 비교)
        return articleA.date - articleB.date;
    }
}

let articles = [
new Article("HTML", new Date(2019, 1, 1)),
new Article("CSS", new Date(2019, 0, 1)),
new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS


예시2;
class Article {  // 매개변수(title, date 등)를 이용해 관련 정보가 담긴 article 생성
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
  
    static createTodays() {
        return new this("Today's digest", new Date());  // this = Article
    }
}
let article = Article.createTodays();  // 오늘 날짜를 기반으로 비어있는 article 생성 (클래스에 정적 메서드를 만들어 구현)
//Article.createTodays()는 article의 메서드가 아닌 전체 클래스의 메서드

console.log(article.title); // Today's digest

// 정적 메서드는 아래 예시와 같이 항목 검색, 저장, 삭제 등을 수행해주는 데이터베이스 관련 클래스에도 사용됨
Article.remove({id: 12345});


//--------------------------------------------------------------------------------------------------------------
// 정적 프로퍼티와 정적 메서드 상속

class Animal {
    static planet = "지구";    // 정적 프로퍼티
  
    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }
  
    run(speed = 0) {
        this.speed += speed;
        alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }
  
    static compare(animalA, animalB) {  // 정적 메서드
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal {   // Animal을 상속
    hide() {
        alert(`${this.name}가 숨었습니다!`);
    }
}

let rabbits = [
    new Rabbit("흰 토끼", 10),
    new Rabbit("검은 토끼", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // 검은 토끼가 속도 5로 달립니다.

alert(Rabbit.planet); // 지구
