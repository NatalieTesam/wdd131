const select = document.querySelector("select");
const logo = document.getElementById("logo");
select.addEventListener("change", (event) => {
    function changeTheme() {
        if (event.target.value === "dark") {
            document.body.classList.add("dark");
            logo.src = "byui-logo_white.png";
        } else if (event.target.value === "light") {
            document.body.classList.remove("dark");
            logo.src = "byui-logo_blue.webp";
        }
    }
    changeTheme();
})