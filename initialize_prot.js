// Fonciton 
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
 


function uploadPDB(){
    var pdb_file = document.getElementById("upload_pdb").value;
    return pdb_file
}

function uploadFasta(){
    var fasta_file = document.getElementById("upload_fasta").value;
    return fasta
}


function initialize_4qwo(a){
    let protein_4qw0 = new Protein("molecule");
    protein_4qw0.set_pdb(a);
    protein_4qw0.set_fasta("./rcsb_pdb_4QWO.fasta");
    console.log(protein_4qw0);
    return protein_4qw0;
    }