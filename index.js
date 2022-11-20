// Pour notre page index.html


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
                href="/prediction.html"
                >Prediction</a
              >
            </li>
            <li class="nav-item">
              <a 
                  class="nav-link mx-2" 
                  href="/visualisation.html">Visualisation</a>
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
`
}


