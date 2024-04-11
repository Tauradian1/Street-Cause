var navLinks = document.getElementById("navLinks")

        function showMenu(){
            navLinks.style.right = "0";
        }

        function hideMenu(){
            navLinks.style.right = "-200px";
        }

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
// options
cellAlign: 'left',
          contain: true
        });        