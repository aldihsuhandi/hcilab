var gameplayIdx = 0;
var gameImg;
var len;

initGameSlides();

function initGameSlides()
{
    gameImg = $(".gameImgSlider").get();
    len = gameImg.length;
    showGameSlides(gameplayIdx);
}

function addGameSlide(n)
{
    showGameSlides(gameplayIdx += n);
}

function showGameSlides(n)
{
    $(".gameImgSlider").remove();
    console.log(gameImg[1]);

    if(n > len)
    {
        gameplayIdx = 0;
    }
    else if(n < 0)
    {
        gameplayIdx = len - 1;
    }

    for(var i = gameplayIdx;i < gameplayIdx + 3;++i){
        var t = i % len;
        console.log(t);
        $("#gameScreenshotSlider").append(gameImg[t]);
    }
}
