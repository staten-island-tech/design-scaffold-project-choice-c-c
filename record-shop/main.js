import './style.css'

document.querySelector('#content').innerHTML = `
      <div id="home">
        <div class="homeTitle">RECORD SHOP</div>
      </div>
`
document.getElementById("learn").onclick = function () {
  document.querySelector('#content').innerHTML = `
<div class="learn-page">
  <div class="learn-content">LEARN PAGE HERE</div>
      </div>
`
};

document.getElementById("recordIcon").onclick = function () {
  document.querySelector('#content').innerHTML = `
  <div id="home">
    <div class="homeTitle">RECORD SHOP</div>
  </div>
`
};

