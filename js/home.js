var idx = 1;
showEvent(idx);

function changeEvent(n)
{
    showEvent(idx += n);
}

function showEvent(n)
{
    var eventSlide = document.getElementsByClassName("eventContainer");
    var len = eventSlide.length;

    if(n > len)
    {
        idx = 1;
    }
    else if(n < 1)
    {
        idx = len;
    }

    for(var i = 0;i < len;++i){
        eventSlide[i].style.display = "none";
    }

    eventSlide[idx - 1].style.display = "flex";
    eventSlide[idx - 1].fadeIn("300");
}
