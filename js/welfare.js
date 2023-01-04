$(function(){
    
    var banner = $('.content2 .welfare_banner>ul>li');
    var button1 = $('.arrow1_1_center>img.next');
    var button2 = $('.arrow1_1_center>img.prev');
    var current = 0;
    var setIntervalId00;
    var p = $('.section_number>p');

    timer();

    function timer(){
        setIntervalId00 = setInterval(function(){
            var prev = banner.eq(current);
            var pn = p.eq(current);

            move(prev, 0, '-100%');
            pn.removeClass('bl');

            current++; //1씩 증가

            if(current == banner.size()){current=0}

            var next = banner.eq(current);
            var pnn = p.eq(current);

            move(next, '100%',0);
            pnn.addClass('bl');
        },2000);
    }

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
    }

    //배너 멈추기
    $('.content2').on({mouseover:function(){
        clearInterval(setIntervalId00);
    }, mouseout:function(){
        timer();
    }});

    button1.click(function(){
        var prev = banner.eq(current);
        var pn = p.eq(current);

        move(prev,0,'-100%');
        pn.removeClass('bl');

        current++;

        if(current == banner.size()){current=0}

        var next = banner.eq(current);
        var pnn = p.eq(current);
        move(next,'100%',0);
        pnn.addClass('bl');

        return false; 
    });

    button2.click(function(){
        var prev = banner.eq(current);
        var pn = p.eq(current);

        move(prev,0,'100%');
        pn.removeClass('bl');

        current--; //1씩 감소

        if(current == -banner.size()){current=0}

        var next = banner.eq(current);
        var pnn = p.eq(current);
        move(next,'-100%',0);
        pnn.addClass('bl');

        return false; 
    });


});