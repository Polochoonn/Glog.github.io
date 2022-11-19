
async function initialize_4qwo(){
let protein_4qw0 = new Protein("4qWo");
let test = await fetch("https://files.rcsb.org/view/4QWO.pdb").then(r=> r.text());
protein_4qw0.set_pdb(test);
protein_4qw0.set_fasta("/rcsb_pdb_4QWO.fasta");
return protein_4qw0;
}