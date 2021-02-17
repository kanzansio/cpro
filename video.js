if (document.getElementById("vid1")) {
    videojs("vid1").ready(function() {
      
      var myPlayer = this;
  
      //Set initial time to 0
      var currentTime = 0;
      
      //This example allows users to seek backwards but not forwards.
      //To disable all seeking replace the if statements from the next
      //two functions with myPlayer.currentTime(currentTime);
  
      myPlayer.on("seeking", function(event) {
        if (currentTime < myPlayer.currentTime()) {
          myPlayer.currentTime(currentTime);
        }
      });
  
      myPlayer.on("seeked", function(event) {
        if (currentTime < myPlayer.currentTime()) {
          myPlayer.currentTime(currentTime);
        }
      });
  
      setInterval(function() {
        if (!myPlayer.paused()) {
          currentTime = myPlayer.currentTime();
        }
      }, 1000);
  
    });
  }