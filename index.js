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
`
}



// Fonction de redirection 
// pas utilse elle sert d'exemple pour l'instant
function RedirectionHome(){
  document.location.href="./index.html";
}







// Pour le drag and drop fichier en cours...
function dropHandler(ev) {
  console.log('File(s) dropped');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}

function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}