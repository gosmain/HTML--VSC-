/* break 키워드가 반복문 바깥으로 빠져나가게 하는점은 while 반복문과 동일
* continue 키워드는 */
    
예시1

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;   // 1

while (i < array.length){   // 2
    console.log(array[i]);
    i++;     // 3
}

//-->위 while 예시를 for 반복문 예시로 변형 -->

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {  // (1,2,3)
    console.log(array[i]);
}

//-----------------------------------------------------------------------------

// for 반복문과 for in 반복문의 비교 예시: 

var obj = {
    name: "object",
    weight: 30,
    isObject: true,
    arr: [1, 2, 3],
    obj: {property: 1}
};

console.log("for 구문으로 object property 반복하기");
//var property_list = Object.keys(obj);           = Object.keys()함수를 이용하여 객체의 각 속성에 접근가능
//console.log("Property List : ", property_list); = 앞에서 선언한 객체의 속성 이름이 배열로 반환됨

for (var i = 0; i < property_list.length; i++) {
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

console.log("\n\nfor in 구문으로 object property 반복하기");

for(var propertyName in obj) {
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

/*----------------------------------------------------------------
for in 반복문 예제 2 */

var obj = {
    name: "object",
    age: 10,
    weight: 5
}

var sum = 0;
for (var property in obj) {
    if (typeof(obj[property]) == "number") {
        sum = sum + obj[property];
    }
}