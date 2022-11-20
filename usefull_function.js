
//Pour faire apparaitre/disparaitre html 

function hideThis(id){
  var obj = document.getElementById(id);
  obj.style.display = "none";
  }
function showThis(id)
  {
  var obj = document.getElementById(id);
  obj.style.display = "block";
  }


// Fonction pour recuperer un nom exemple pdb
  function get_name(id){
    var name = document.getElementById(id).value;
    return name;
  }



// Fonction de redirection 
// pas utilse elle sert d'exemple pour l'instant
function RedirectionHome(){
    document.location.href="./index.html";
  }
  
  
  
  
  
  
  
  // Pour le drag and drop fichier en cours...
  function dropHandler(ev) {
    console.log('File(s) dropped');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }
  
  function dragOverHandler(ev) {
    console.log('File(s) in drop zone');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }