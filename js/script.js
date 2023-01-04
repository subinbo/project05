$(function(){
    
    var banner = $('.slide>ul>li');
    var current = 0;
    var setIntervalId00;

    timer();

    function timer(){
        setIntervalId00 = setInterval(function(){
            var prev = banner.eq(current);
            move(prev, 0, '-100%');
            current++; 

            if(current == banner.size()){current=0}
            var next = banner.eq(current);
            move(next, '100%',0);
    
        },2000);
    }

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
    }

    //배너 멈추기
    $('.slide').on({mouseover:function(){
        clearInterval(setIntervalId00);
    }, mouseout:function(){
        timer();
    }});

    //탭메뉴
    var tab =$('.tab>li'); //공지사항, 갤러리 메뉴
    var content =$('.tab_con>div'); //탭메뉴의 내용영역

    content.hide().eq(0).show();
    //컨텐츠영역은 초기에 모두 감추고 순번 0번만 보여지도록 함

    tab.click(function(e){
        e.preventDefault(); //a링크의 원래의 링크 속성 없애기

        var tg = $(this); //텝메뉴에 클릭되어진 대상
        var i = tg.index(); //인덱스는 순번을 의미함. 선택되어진 순번
        tab.removeClass('active'); //활성화된 스타일 제거
        tg.addClass('active'); //클릭한 대상에 스타일 활성화

        content.css('display','none');
        content.eq(i).css('display','block'); //선택되어진 순번의 i 컨텐츠가 보여지도록 함
    });






});




