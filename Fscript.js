function day() {
      var sel = document.getElementById("i").selected;
      if (sel === true) {
            function give() {
                  var interval = setInterval(function () {
                        var currentDate = new Date();
                        // For Monday
                        if (currentDate.getDay() === 1 && currentDate.getHours() < 9)
                              window.location.href = "upcoming mon.html"
                        else if (currentDate.getDay() === 1 && currentDate.getHours() === 9)
                              window.location.href = "monday f1.html"
                        else if (currentDate.getDay() === 1 && currentDate.getHours() === 10)
                              window.location.href = "monday f2.html"
                        else if (currentDate.getDay() === 1 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11)
                              window.location.href = "monday f3.html"
                        else if (currentDate.getDay() === 1 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 1 && currentDate.getHours() === 12 && currentDate.getMinutes() < 11)
                              window.location.href = "monday f4.html"
                        else if (currentDate.getDay() === 1 && currentDate.getHours() === 12 && currentDate.getMinutes() >= 10)
                              window.location.href = "monday f5.html"
                        else if (currentDate.getDay() === 1 && currentDate.getHours() === 13 || currentDate.getDay() === 1 && currentDate.getHours() === 14)
                              window.location.href = "monday f6.html"
                        else if (currentDate.getDay() === 1 && currentDate.getHours() === 15 || currentDate.getDay() === 1 && currentDate.getHours() === 16)
                              window.location.href = "monday f7.html"
                        // For Tuesday
                        else if (currentDate.getDay() === 2 && currentDate.getHours() < 9)
                              window.location.href = "upcoming tue.html"
                        else if (currentDate.getDay() === 2 && currentDate.getHours() === 9 || currentDate.getDay() === 2 && currentDate.getHours() === 10)
                              window.location.href = "tuesday f1.html"
                        else if (currentDate.getDay() === 2 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11)
                              window.location.href = "tuesday f2.html"
                        else if (currentDate.getDay() === 2 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 2 && currentDate.getHours() === 12 || currentDate.getDay() === 2 && currentDate.getHours() === 13 && currentDate.getMinutes() < 11)
                              window.location.href = "tuesday f3.html"
                        else if (currentDate.getDay() === 2 && currentDate.getHours() === 13 && currentDate.getMinutes() >= 10)
                              window.location.href = "tuesday f4.html"
                        else if (currentDate.getDay() === 2 && currentDate.getHours() === 14)
                              window.location.href = "tuesday f5.html"
                        else if (currentDate.getDay() === 2 && currentDate.getHours() === 15)
                              window.location.href = "tuesday f6.html"
                        else if (currentDate.getDay() === 2 && currentDate.getHours() === 16)
                              window.location.href = "tuesday f7.html"
                        // For Wednesday
                        else if (currentDate.getDay() === 3 && currentDate.getHours() < 9)
                              window.location.href = "upcoming wed.html"
                        else if (currentDate.getDay() === 3 && currentDate.getHours() === 9)
                              window.location.href = "wednesday f1.html"
                        else if (currentDate.getDay() === 3 && currentDate.getHours() === 10)
                              window.location.href = "wednesday f2.html"
                        else if (currentDate.getDay() === 3 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11)
                              window.location.href = "wednesday f3.html"
                        else if (currentDate.getDay() === 3 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 3 && currentDate.getHours() === 12 && currentDate.getMinutes() < 11)
                              window.location.href = "wednesday f4.html"
                        else if (currentDate.getDay() === 3 && currentDate.getHours() === 12 && currentDate.getMinutes() >= 10)
                              window.location.href = "wednesday f5.html"
                        else if (currentDate.getDay() === 3 && currentDate.getHours() === 13 || currentDate.getDay() === 3 && currentDate.getHours() === 14)
                              window.location.href = "wednesday f6.html"
                        else if (currentDate.getDay() === 3 && currentDate.getHours() === 15 || currentDate.getDay() === 3 && currentDate.getHours() === 16)
                              window.location.href = "wednesday f7.html"
                        // For Thursday
                        else if (currentDate.getDay() === 4 && currentDate.getHours() < 11 || currentDate.getDay() === 4 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11)
                              window.location.href = "upcoming thu.html"
                        else if (currentDate.getDay() === 4 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 4 && currentDate.getHours() === 12 && currentDate.getMinutes() < 11)
                              window.location.href = "thursday f1.html"
                        else if (currentDate.getDay() === 4 && currentDate.getHours() === 12 && currentDate.getMinutes() >= 10)
                              window.location.href = "thursday f2.html"
                        else if (currentDate.getDay() === 4 && currentDate.getHours() === 13 || currentDate.getDay() === 4 && currentDate.getHours() === 14)
                              window.location.href = "thursday f3.html"
                        else if (currentDate.getDay() === 4 && currentDate.getHours() === 15 || currentDate.getDay() === 4 && currentDate.getHours() === 16)
                              window.location.href = "thursday f4.html"
                        // For Friday
                        else if (currentDate.getDay() === 5 && currentDate.getHours() < 9)
                              window.location.href = "upcoming fri.html"
                        else if (currentDate.getDay() === 5 && currentDate.getHours() === 9 || currentDate.getDay() === 5 && currentDate.getHours() === 10)
                              window.location.href = "friday f1.html"
                        else if (currentDate.getDay() === 5 && currentDate.getHours() === 11 && currentDate.getMinutes() < 11)
                              window.location.href = "friday f2.html"
                        else if (currentDate.getDay() === 5 && currentDate.getHours() === 11 && currentDate.getMinutes() >= 10 || currentDate.getDay() === 5 && currentDate.getHours() === 12 || currentDate.getDay() === 5 && currentDate.getHours() === 13 && currentDate.getMinutes() < 11)
                              window.location.href = "friday f3.html"
                        else if (currentDate.getDay() === 5 && currentDate.getHours() === 13 && currentDate.getMinutes() >= 10)
                              window.location.href = "friday f4.html"
                        else if (currentDate.getDay() === 5 && currentDate.getHours() === 14)
                              window.location.href = "friday f5.html"
                        else if (currentDate.getDay() === 5 && currentDate.getHours() === 15 || currentDate.getDay() === 5 && currentDate.getHours() === 16)
                              window.location.href = "friday f6.html"
                        else (
                              window.location.href = "nolec.html"
                        )
                  }, 1000);
            }
            give()
      }
      else {
            console.log("Not my division")
      }
}