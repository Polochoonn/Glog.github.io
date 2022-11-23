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
 


  





function test(){
    console.log("test");
    var file = document.getElementById('upload_pdb').files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        pdb_protein = initialize_4qwo(reader.result);
        let a = display3D(pdb_protein);  
        console.log("bbbbb",a);
        return a;
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


function initialize_4qwo(current_protein){
    let protein_4qw0 = new Protein("molecule");
    protein_4qw0.set_pdb(current_protein);
    protein_4qw0.set_fasta("./rcsb_pdb_4QWO.fasta");
    return protein_4qw0;
}