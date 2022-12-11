function hideThis(id){
  var obj = document.getElementById(id);
  obj.style.display = "none";
  }

  
function showThis(id)
  {
  var obj = document.getElementById(id);
  obj.style.display = "block";
  }


// utilisée ??
  function getName(id){
    var name = document.getElementById(id).value;
    return name;
  }


// Fonction de redirection 
// pas utilse elle sert d'exemple pour l'instant
function RedirectionHome(){
    document.location.href="./index.html";
  }
  


  function uploadFiles() {
    var files = document.getElementById('upload_pdb').files;
    if(files.length==0){
        alert("Please first choose or drop any file(s)...");
        hideThis('container-molecule2-close');
        return;
    }
    var filenames="";
    for(var i=0;i<files.length;i++){
        filenames+=files[i].name+"\n";
    }
}

function targetPopup(form) {
  window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
  form.target = 'formpopup';
}
