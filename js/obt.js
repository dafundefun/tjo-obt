$(document).ready(function(){
    function gradient(){
        var Text = $(this).text();
        $(this).attr('data-content-after',Text);
    };

    $('.gradient,.gradient2').each(gradient);

    $('.navbar .btn').click(function(){
        //切換按鈕樣式
        $(this).addClass('current').siblings('.btn').removeClass('current');
        $(this).find('em').addClass('gradient');
        $(this).siblings().find('em').removeClass('gradient').attr('data-content-after','');
        $('.gradient').each(gradient);

        //開啟及關閉對應內容
        var source = $(this).attr('id');
        var targetTab = "#" + source + "Tab"; //開啟右側上方對應區塊
        var targetText = "#" + source + "Block"; //開啟對應活動內容
        $(targetTab).addClass('current').siblings().removeClass('current');
        $(targetText).addClass('current').siblings('.articleContent').removeClass('current');
        if($(targetTab).children('.btn').first().hasClass('current')){
            $(targetText).find('.textBlock').first().addClass('current');
            $(targetText).siblings().find('.textBlock').removeClass('current');
        }else{
            var event ="#" + $(targetTab).children('.current').attr('id') + "Block";
            $(event).addClass('current').siblings().removeClass('current');
            console.log(event);
        }
        $('.costume').fadeOut();
    });
//開啟活動內小活動的對應內容
    $('.tabbar .btn').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        var target = "#" + $(this).attr('id') + "Block";
        $(target).addClass('current').fadeIn().siblings().removeClass('current').fadeOut();
    });
//開啟詳細活動資訊
    $('.eventMore').click(function(){
        var target = '#' + $(this).closest('.textBlock').attr('id') + "-pop";
        $(target).fadeIn();
        $('body').css('overflow','hidden');
    });
    
    function closePop(){
        $(this).closest('.pop').fadeOut();
        $('body').removeAttr('style');
    }

    $('.close').click(closePop);
    $('.pop::before').click(closePop);

    $('#costume').click(function(){
        $('.costume').fadeIn();
    });

    $('.costume .close').click(function(){
        $('.costume').fadeOut();
    })

});