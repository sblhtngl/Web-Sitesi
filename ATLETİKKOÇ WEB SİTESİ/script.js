
const oyunDiv = document.getElementById("oyunDiv");
function rastgeleKonum() {
    const ekranGenisligi = window.innerWidth;
    const ekranYuksekligi = window.innerHeight;

    const maxX = ekranGenisligi - oyunDiv.offsetWidth;
    const maxY = ekranYuksekligi - oyunDiv.offsetHeight;

    const rastgeleX = Math.floor(Math.random() * maxX);
    const rastgeleY = Math.floor(Math.random() * maxY);

    oyunDiv.style.left = `${rastgeleX}px`;
    oyunDiv.style.top = `${rastgeleY}px`;
}
oyunDiv.addEventListener("mouseenter", rastgeleKonum);
