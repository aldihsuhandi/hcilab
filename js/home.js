var eventIdx = 0;
var eventElement;
var len;

initEventSlider();

function changeEvent(n)
{
    $(".eventContainer").fadeOut(function(){
        $(".eventContainer").fadeIn();
    });
    showEventSlide(eventIdx += n);
}

function initEventSlider()
{
    eventElement = $(".eventContainer").get();
    len = eventElement.length;
    console.log(len);
    showEventSlide(eventIdx);
}

function showEventSlide(n)
{
    $(".eventContainer").remove();

    if(n >= len)
    {
        eventIdx = 0;
    }
    else if(n < 0)
    {
        eventIdx = len - 1;
    }

    $("#event").append(eventElement[eventIdx]);
}
