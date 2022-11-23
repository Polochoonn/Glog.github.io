// Fonciton 
class Protein {
    id_pdb;
    fasta_file;
    pdb_file;

    constructor(id_pdb) {
        this.id_pdb = id_pdb;
    }

    set_fasta(fasta_file) {
        this.fasta_file = fasta_file;
    }
    set_pdb(pdb_file) {
        this.pdb_file = pdb_file;
    }

    get_fasta() {
        return this.fasta_file;
    }
    get_pdb() {
        return this.pdb_file;
    }
}

function download_with_id(id_pdb) {
    console.log("id test");
    display3D(id_pdb);
    console.log("after display");
}
function test() {
    console.log("test");
    var file = document.getElementById('upload_pdb').files[0];
    console.log("1");
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log("lecture du fichier");
        pdb_protein = initialize_protein(reader.result);
        let res = pdb_protein.get_pdb();
        display3D(res);
        console.log("after display");
    }


    // la faire pour voir le fichier pdb
    //     if (file) {
    //        

    //         reader.onload = function (evt) {
    //             // console.log("/4qw0.pdb".valueOf())
    //             file = evt.target.result
    //             console.log(file);
    //             // b=initialize_4qwo(file);
    //         };

    //         reader.onerror = function (evt) {
    //             console.error("An error ocurred reading the file",evt);
    //         };

    //         reader.readAsText(file, "UTF-8");


    //     }
}



// alert(pdb_file);


function initialize_protein(current_protein) {
    let protein = new Protein("molecule");
    protein.set_pdb(current_protein);
    protein.set_fasta("./rcsb_pdb_4QWO.fasta");
    return protein;
}