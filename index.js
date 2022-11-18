window.onload = function(){
  let header=
  document.querySelector("#header");
  header.innerHTML = `
  <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
        <a class="navbar-brand" href="#"
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
                onclick="RedirectionHome()"
                class="nav-link mx-2 active"
                aria-current="page"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                onclick=" RedirectionTest()"
                class="nav-link mx-2"
                href="#"
                >Visualisation</a
              >
            </li>
            <li class="nav-item">
              <a  onclick=" RedirectionPrediction()"
                  class="nav-link mx-2" 
                  href="#">Prediction</a>
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







/*class Protein {
    id_pdb;
    fasta_file;
    pdb_file;

    constructor(id_pdb) {
      this.id_pdb = id_pdb;
    }

    set_fasta(fasta_file){
        this.fasta_file= fasta_file;
    }
    set_pdb(pdb_file){
        this.pdb_file= pdb_file;
    }

    get_fasta(){
        return this.fasta_file;
    }
    get_pdb(){
        return this.pdb_file;
    }
  }
 */ 


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




  async function readFile(ev){
    console.log(ev.target.files[0]);
    const file = ev.target.files[0]; //on récupère l'objet files
    const txt = await file.text();
    console.log(txt.length);
}

function uploadFasta(){
    var input = document.getElementById("charge").value;
    console.log("estes");
    console.log(input);
}
function display3D() {
    let element = $('#container-01');
    let config = { backgroundColor: '#eed9bd' };
    let viewer = $3Dmol.createViewer( element, config );
  let pdbUri = './4qw0.pdb';
  jQuery.ajax( pdbUri, { 
    success: function(data) {
      let v = viewer;
      v.addModel( data, "pdb" );                       /* load data */
      v.setStyle({}, {cartoon: {color: 'spectrum'}});  /* style all atoms */
      v.zoomTo();                                      /* set camera */
      v.render();                                      /* render scene */
      v.zoom(1.2, 1000);                               /* slight zoom */
    },
    error: function(hdr, status, err) {
      console.error( "Failed to load PDB " + pdbUri + ": " + err );
    },
})
}




// Navbar






function RedirectionHome(){
  document.location.href="./index.html";
}

function RedirectionTest(){
  document.location.href="https://ent.u-bordeaux.fr/uPortal/f/welcome/normal/render.uP"; 
}

function RedirectionPrediction(){
  document.location.href="./prediction.html";
}