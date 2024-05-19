document.getElementById('year').textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  if (window.innerWidth > 700) {
    document.querySelector(".menu").classList.remove("hide");
  }
  else {
    document.querySelector(".menu").classList.add("hide");
  }
}
window.addEventListener("resize", handleResize)
window.addEventListener("load", handleResize)

function viewerTemplate(image, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${image}" alt="${alt}" class="viewer-image">
</div>`;
}

function viewHandler(event) {
        const element = event.target;
        const image = element.getAttribute("src").split("-")[0] + "-full.jpeg";
        const alt = element.getAttribute("alt");
        const viewer = viewerTemplate(image, alt);
        document.body.insertAdjacentHTML("afterbegin", viewer);
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);

        function closeViewer() {
            document.querySelector(".viewer").remove();
        }

}

document.querySelectorAll(".gallery img").addEventListener("click", viewHandler());

