
      function debounce (method, delay) {
        clearTimeout(method._tId);
        method._tId = setTimeout(function(){
          method();
        }, delay);
      }

      function handleScroll()
      {
        var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
  
        var scrollPercent = (s / (d - c));
        var scroll = this.scrollY;
       
          console.log(this.scrollMax);
          console.log("We're running our scroll code. Amount is"+ scrollPercent + ".");
          var mugElement = document.getElementById("spillMug");

          if(scrollPercent < .15 )
          {
            mugElement.style.transform = "rotate(" + ( scrollPercent) * -360 + "deg)";
            DisableDotsStartingAt(0);

          }
          else
          {
            mugElement.style.transform = "rotate(" + -54 + "deg)";

            if(scrollPercent <.2)
            {             
              dotElement.style.opacity = 1;
              DisableDotsStartingAt(1);
            }
            else if (scrollPercent<.25)
            {
              dotElement1.style.opacity=1
              DisableDotsStartingAt(2);
            }
            else if( scrollPercent<.3)
            {
              dotElement2.style.opacity = 1;
              DisableDotsStartingAt(3);
            }
            else if( scrollPercent<.35)
            {
              dotElement3.style.opacity = 1;
              DisableDotsStartingAt(4);
            }
            else if( scrollPercent<.4)
            {
              dotElement4.style.opacity = 1;
              DisableDotsStartingAt(5);
            }
            else if( scrollPercent<.45)
            {
              dotElement5.style.opacity = 1;
              DisableDotsStartingAt(6);
            }
            else if( scrollPercent<.5)
            {
              dotElement6.style.opacity = 1;
             // DisableDotsStartingAt();
            }
          }
      }
      
      var dotElement = document.getElementById("spillDot");   
      dotElement.style.opacity = 0;
      var dotElement1 =document.getElementById("spillDot1");
      dotElement1.style.opacity = 0;
      var dotElement2 = document.getElementById("spillDot2");   
      dotElement2.style.opacity = 0;
      var dotElement3 = document.getElementById("spillDot3");   
      dotElement3.style.opacity = 0;
      var dotElement4 = document.getElementById("spillDot4");   
      dotElement4.style.opacity = 0;
      var dotElement5 = document.getElementById("spillDot5");   
      dotElement5.style.opacity = 0;
      var dotElement6 = document.getElementById("spillDot6");   
      dotElement6.style.opacity = 0;

      const dotElementArray = [dotElement, dotElement1, dotElement2, dotElement3, dotElement4, dotElement5, dotElement6];

      function DisableDotsStartingAt(disableAfterThisIndex)
      {
        for( let i = 0; i < dotElementArray.length; i++)
        {
          if(i == disableAfterThisIndex)
          {
            dotElementArray[i].style.opacity = 0;
          }
        }
      }



/*BELOW () subscribing the window scroll event. the lower the number the more the scroll events, the smoother the animation of mug rotation*/ 
      $(window).scroll(function(){
        handleScroll();
      })
