class Protein {
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
 




async function readFile(ev){
    console.log(ev.target.files[0]);
    const file = ev.target.files[0]; //on récupère l'objet files
    const txt = await file.text();
    console.log(txt.length);
}


// pour upload 



function uploadFasta(){
    var input = document.getElementById("charge").value;
    console.log("test");
    console.log(input);
}


function uploadPDB(){
    var pdb_file = document.getElementById("PDB").value;
    console.log("test");
    console.log(pdb_file);
}


// Test pour faire apparaitre un bouton 

function hideThis(id){
    var obj = document.getElementById(id);
    obj.style.display = "none";
    }
function showThis(id)
    {
    var obj = document.getElementById(id);
    obj.style.display = "block";
    }


    function display3D(protein) {
        console.log("Start 3D visualisation");
        console.log("Proteine",protein)
        let element = $('#container-01');
        let config = { backgroundColor: ' #f0e8db' };
        let viewer = $3Dmol.createViewer(element, config);
        let pdbUri = protein.get_pdb();
        console.log("PDB",pdbUri);
        jQuery.ajax(pdbUri, {
            success: function (data) {
                let v = viewer;
                v.addModel("pdb:1MO8", "pdb");                       /* load data */
                v.setStyle({}, { cartoon: { color: 'spectrum' } });  /* style all atoms */
                v.zoomTo();                                      /* set camera */
                v.render();                                      /* render scene */
                v.zoom(1.2, 1000);                               /* slight zoom */
            },
            error: function (hdr, status, err) {
                console.error("Failed to load PDB " + pdbUri + ": " + err);
            },
        })
    }


function visualisation(molecule){
    console.log(molecule);
    let test=
    document.querySelector("#molecule");
    test.innerHTML = `
    <iframe id="inlineFrameExample"
    title="Visualisation proteine connus"
    width="600"
    height="600"
    src="https://3Dmol.org/viewer.html?pdb=${molecule}">
</iframe>
  `
  }


function get_name(id){
    var name = document.getElementById(id).value;
    return name;
  }