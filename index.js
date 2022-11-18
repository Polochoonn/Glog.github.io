// Fonction de extend pour la navbar

window.onload = function(){
  let header=
  document.querySelector("#header");
  header.innerHTML = `
  <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
        <a class="navbar-brand" href="/"
          ><img
            src="https://cdn-icons-png.flaticon.com/512/3024/3024310.png"
            height="60"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link mx-2 active"
                aria-current="page"
                href="/"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link mx-2"
                href="https://ent.u-bordeaux.fr/uPortal/f/welcome/normal/render.uP"
                >Prediction</a
              >
            </li>
            <li class="nav-item">
              <a 
                  class="nav-link mx-2" 
                  href="/prediction.html">Visualisation</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link mx-2 dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Test
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Action1</a></li>
                <li><a class="dropdown-item" href="#">Action2</a></li>
                <li><a class="dropdown-item" href="#">Action3</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`
}




// navbar extend 

var clients = document.getElementById('clients');
var services = document.getElementById('services');

clients.addEventListener('click', function() {
  $(clients).toggleClass("active");
  $(".parent:not(#clients)").toggleClass("invisible");
}, false);

services.addEventListener('click', function() {
  $(services).toggleClass("active");
  $(".parent:not(#services)").toggleClass("invisible");
}, false);


// Fonction de redirection 
// pas utilse elle sert d'exemple pour l'instant
function RedirectionHome(){
  document.location.href="./index.html";
}
