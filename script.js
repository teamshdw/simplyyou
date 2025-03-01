document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const logo = document.getElementById("logo");
    
    // Check for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        logo.src = "logo-dark.png";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Change logo based on theme
        if (document.body.classList.contains("dark-mode")) {
            logo.src = "logo-dark.png";
            localStorage.setItem("theme", "dark");
        } else {
            logo.src = "logo-light.png";
            localStorage.setItem("theme", "light");
        }
    });
});
