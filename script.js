alert('DISCLAIMER! \n\nThe content on this website is intended for personal practice and learning purposes only. It is not intended to infringe upon the intellectual property rights of others. If any content appears similar to someone elses work, I do not claim it as my own. The purpose of this website is solely for educational and skill development purposes, and no commercial use or unauthorized reproduction of others work is intended.\n\nAll efforts have been made to ensure that the pictures on this website is original and does not violate any copyrights or licenses. If you believe that any content on this website may be infringing upon your intellectual property rights, please contact me immediately so that appropriate actions can be taken. \n\nThank you for understanding the educational nature of this website and respecting the rights of all creators and artists.');


      var menuBtn = document.getElementById("menuBtn")
      var sideNav = document.getElementById("sideNav")
      var menu = document.getElementById("menu")

      sideNav.style.right = "-250px"
      
      menuBtn.onclick = function(){
        if (sideNav.style.right == "-250px"){
            sideNav.style.right = "0";
            menu.src = "image/close.png";
        }
        else {
            sideNav.style.right = "-250px";
            menu.src = "image/menu.png";
        }

      }

var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
});




