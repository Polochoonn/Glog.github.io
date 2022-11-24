var glviewer = null;


var addLabels = function() {
  var atoms = glviewer.getModel().selectedAtoms({
    atom : "CA"
  });
  for ( var a in atoms) {
    var atom = atoms[a];

    var l = glviewer.addLabel(atom.resn + " " + atom.resi, {
      inFront : true,
      fontSize : 12,
      position : {
        x : atom.x,
        y : atom.y,
        z : atom.z
      }
    });
    atom.label = l;
    labels.push(atom);
  }
};

var colorSS = function(viewer) {
  //color by secondary structure
  var m = viewer.getModel();
  m.setColorByFunction({}, function(atom) {
    if(atom.ss == 'h') return "magenta";
    else if(atom.ss == 's') return "orange";
    else return "white";
  });
  viewer.render();
}

var atomcallback = function(atom, viewer) {
  if (atom.clickLabel === undefined
      || !atom.clickLabel instanceof $3Dmol.Label) {
    atom.clickLabel = viewer.addLabel(atom.elem + atom.serial, {
      fontSize : 14,
      position : {
        x : atom.x,
        y : atom.y,
        z : atom.z
      },
      backgroundColor: "black"
    });
    atom.clicked = true;
  }

  //toggle label style
  else {

    if (atom.clicked) {
      var newstyle = atom.clickLabel.getStyle();
      newstyle.backgroundColor = 0x66ccff;

      viewer.setLabelStyle(atom.clickLabel, newstyle);
      atom.clicked = !atom.clicked;
    }
    else {
      viewer.removeLabel(atom.clickLabel);
      delete atom.clickLabel;
      atom.clicked = false;
    }

  }
};
var readText = function(input,func) {
    if(input.files.length > 0) {
      var file = input.files[0];
      var reader = new FileReader();
        reader.onload = function(evt) {
          func(evt.target.result,file.name);
        };
        reader.readAsText(file);
        $(input).val('');
    }
  };





async function display3D(protein) {
	console.log("start display");
	let element = document.getElementById('container-01');
	let pdbUri = protein

	glviewer = $3Dmol.createViewer($(element), { backgroundColor: '0xffffff' }); //defaultcolors: $3Dmol.elementColors.rasmol, 

	if (pdbUri.startsWith('pdb:')) {
		glviewer, v = $3Dmol.download(pdbUri, glviewer, { doAssembly: true, noSecondaryStructure: false }, function () {
		});
	} else {
		jQuery.ajax(pdbUri, {
			success: function (data) {
				
				glviewer.addModel(data, "pdb");                       /* load data */
				glviewer.setStyle({}, { cartoon: { color: 'spectrum' } });  /* style all atoms */
				glviewer.zoomTo();                                      /* set camera */
				glviewer.render();                                      /* render scene */
			},
			error: function (hdr, status, err) {
				console.error("Failed to load PDB " + pdbUri + ": " + err);
			},
		})
	}
}





function download_png() {
	download = document.getElementById("download_img");
	var image = document.querySelector("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
	download.setAttribute("href", image);
}



function visualisation(molecule){
    console.log(molecule);
    let test=
    document.querySelector("#molecule");
    test.innerHTML = `
    <iframe id="inlineFrameExample"
    title="Visualisation proteine connus"
    src="https://3Dmol.org/viewer.html?pdb=${molecule}&style=cartoon:color~spectrum">
</iframe>
  `
  }


function visualisation_nous(){

  let test=
    document.querySelector("#molecule2");
    test.innerHTML = `
      <h2>Outils</h2>
      <input type="button" value="Stick" onclick="glviewer.setStyle({},{stick:{}}); glviewer.render();">
      <input type="button" value="Line" onclick="glviewer.setStyle({},{line:{}}); glviewer.render();">
      <input type="button" value="Cross" onclick="glviewer.setStyle({},{cross:{linewidth:2}}); glviewer.render();">
      <input type="button" value="Sphere" onclick="glviewer.setStyle({},{sphere:{}}); glviewer.render();">
      <input type="button" value="Cartoon" onclick="glviewer.setStyle({hetflag:false},{cartoon:{}}); glviewer.render();">
      <input type="button" value="Label alpha C's" onclick="addLabels(glviewer); glviewer.render();">
      <input type="button" value="Color SS" onclick="colorSS(glviewer);">
      <br>
      <input type="button" value="Surface1" onclick="surf1 = glviewer.addSurface($3Dmol.SurfaceType.VDW, {}, {hetflag:false,chain:'A'},{hetflag:false,chain:'A'});">
      <input type="button" value="Surface2" onclick="surf2 = glviewer.addSurface($3Dmol.SurfaceType.MS, {map:{prop:'partialCharge',scheme:new $3Dmol.Gradient.RWB(-.6,.6)}, opacity:0.85}, {chain:'B'},{chain:'B'});">
      <input type="button" value="RM Surfaces" onclick="glviewer.removeAllSurfaces();">
      <br>
      <input type="button" value="Recenter" onclick="glviewer.zoomTo();">
      <br>
      <input id="pdbid" value="1UBQ" size="4">
      <button onclick="glviewer.clear(); m = $3Dmol.download('pdb:' + $('#pdbid').val(), glviewer, {doAssembly:true, noSecondaryStructure: false});">Download</button>
      <br>
      <a id="download_img" download="image.png"><button type="button" onClick="download_png()">Télécharger PNG</button></a>

   
  
  

  `
}

