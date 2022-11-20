function uploadPDB(){
    var pdb_file = document.getElementById("PDB").value;
    return pdb_file
}


function initialize_4qwo(){
    let protein_4qw0 = new Protein("molecule");
    protein_4qw0.set_pdb("/4qw0.pdb");
    protein_4qw0.set_fasta("./rcsb_pdb_4QWO.fasta");
    console.log(protein_4qw0);
    return protein_4qw0;
    }