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




function home(){
  document.location.href="./index.html";
}

function RedirectionJavascript(){
  document.location.href="https://ent.u-bordeaux.fr/uPortal/f/welcome/normal/render.uP"; 
}

function redirectionlocal(){
  document.location.href="./nouvellepage.html";
}