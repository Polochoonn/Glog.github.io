/**
 * Ce fichier contient une fonction qui permet d'afficher la navbar
 *
 */


window.onload = function(){
  let header=
  document.querySelector("#header");
  header.innerHTML = `
  <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
  crossorigin="anonymous"
></script>
  <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
        <a class="navbar-brand" href="/html"
          ><img id="logo"
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
                href="/html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link mx-2"
                href="../html/prediction.html"
                >Prediction</a
              >
            </li>
            <li class="nav-item">
              <a 
                  class="nav-link mx-2" 
                  href="../html/visualisation.html">Visualisation</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`
}

