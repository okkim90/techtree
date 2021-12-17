$(function(){
    setWinH()
    $(window).on('load resize',function(){
        setWinH();
    });
});

function setWinH(){
    let winH = $(window).height();
    $('.winH').height(winH);
}