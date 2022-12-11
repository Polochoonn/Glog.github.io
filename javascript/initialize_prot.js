class Protein {
    idPdb;
    fastaFile;
    pdbFile;

    constructor(idPdb) {
      this.idPdb = idPdb;
    }

    setFasta(fastaFile){
        this.fastaFile= fastaFile;
    }
    setPdb(pdbFile){
        this.pdbFile= pdbFile;
    }

    getFasta(){
        return this.fastaFile;
    }
    getPdb(){
        return this.pdbFile;
    }
    getID(){
        return this.idPdb;
    }
  }
 

function uploadNewProtein() {
    var file = document.getElementById('upload_pdb').files[0];
    var fileName = file.name;
    fileName = fileName.replace('.pdb', ''); //remove extension from filename
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        let newProtein = initializeProtein(reader.result,fileName);
        let res = newProtein.getPdb();
        display3D(res);
    }

}


function initializeProtein(protein,proteinName){
    let newProtein = new Protein(proteinName);
    newProtein.setPdb(protein);
    return newProtein;
}
