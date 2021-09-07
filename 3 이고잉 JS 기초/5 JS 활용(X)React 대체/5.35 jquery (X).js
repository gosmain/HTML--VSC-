// 하지만 REACT프레임워크가 Jquery 라이브러리보다 월등히 좋으니 쓸 이유가 없다. 




var Links = {                                
    setColor:function (color){                   
        // var alist = document.querySelectorAll('a');        
        // for (var i = 0; i < alist.length; i++) { 
        //     alist[i].style.color = color;
        // }
        $('a').css('color', color);                  //위와 같은일을 하는 jquery 1 (모든 a의 색깔)
    }
}
var Body  = {                                
    setColor:function (color){              
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);                  //jquery 2
    },
    setBackgroundColor:function (color){     
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);        //jquery 3
    }
}

function nightDayHandler(self){              
var target = document.querySelector('body');
    if(self.value === 'night') {                         
        Body.setBackgroundColor('black');   
        Body.setColor('white');
        self.value = 'day';
       
        Links.setColor('powderblue');       
        
    } else {                                               
        Body.setBackgroundColor('white');              
        Body.setColor('black');
        self.value = 'night';
        
        Links.setColor('lightgreen');
    }
}