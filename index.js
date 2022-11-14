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
    let config = { backgroundColor: 'white' };
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