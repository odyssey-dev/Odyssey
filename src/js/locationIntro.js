export var locationIntro;

export async function locationIntroSettings() {
    
    locationIntro = document.querySelector('#intro_location_setting input').checked;
    
    if (locationIntro == true) {
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          console.log("Calling Geolocation", position);
          localStorage.setItem('locationIntro', locationIntro);
          },
          function errorCallback(error) {
            console.log(error);
            console.log("Geolocation Error");
            localStorage.setItem('locationIntro', false);
            locationIntro = false;
          },
          {
              timeout:8000
          },
          { enableHighAccuracy: true }
      );
      } else { 
        console.log("Geolocation is not supported by this browser.");
        localStorage.setItem('locationIntro', false);
        locationIntro = false;
      }
    }

  }