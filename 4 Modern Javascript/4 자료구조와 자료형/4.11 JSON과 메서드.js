JSON.stringify(value, replacer, space); // 객체를 JSON형태의 문자열로 변환
JSON.parse(str, [reviver]); // JSON형태의 문자열을 객체로 변환

//------------------------------------------------------------------------------------------------------------------------------------------
// JSON.stringify
let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    },
  };
  
alert(JSON.stringify(meetup)); // 객체 전체가 문자열로 변환

예시1 ;
let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  alert(JSON.stringify(user, null, 2));
/*  {
        "name": "John",
        "age": 25,
        "roles": {
        "isAdmin": false,
        "isEditor": true
        }
    }
*/

//------------------------------------------------------------------------------------------------------------------------------------------
// JSON.parse
let numbers = "[0, 1, 2, 3]"; // 문자열로 변환된 배열

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1


예시1 ; // 서버로부터 문자열로 변환된 schedule 객체를 전송받았을 시
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
}`;
  
  schedule = JSON.parse(schedule, function(key, value) {
    if (key == "date") return new Date(value);
    return value;
  });
  
  alert(schedule.meetups[1].date.getDate()); // Birthday 


//------------------------------------------------------------------------------------------------------------------------------------------
과제예시1 ; // 객체를 JSON으로 바꾼 후 다시 객체로 바꾸기 

let user = {
    name: "John Smith",
    age: 35
};
  
let user2 = JSON.parse(JSON.stringify(user)); // 제 2의 변수에 바뀐 객체 저장


과제예시2 ;
let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
    alert( JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined : value;
    }));
    
/*
    {
        "title":"Conference",
        "occupiedBy":[{"name":"John"},{"name":"Alice"}],
        "place":{"number":23}
    }
*/