document.addEventListener("touchstart", function() {}, true);
var theme__icon = document.getElementById("theme__icon");
    theme__icon.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")) {
            theme__icon.className="fas fa-sun fa-sm";
        } else {
            theme__icon.className="fas fa-moon fa-sm";
        }
    }

