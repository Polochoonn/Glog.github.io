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
    
  }); viewer.render();
}

var colorSpectrum = function(viewer) {
  //color by secondary structure
  var m = viewer.getModel();
  m.setStyle({}, { cartoon: { color: 'spectrum' } });
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

	glviewer = $3Dmol.createViewer($(element), { backgroundColor: '#669bbc' }); //defaultcolors: $3Dmol.elementColors.rasmol, 

	if (pdbUri.startsWith('pdb:')) {
		glviewer, v = $3Dmol.download(pdbUri, glviewer, { doAssembly: true, noSecondaryStructure: false }, function () {
      glviewer.setStyle({}, { cartoon: { color: 'spectrum' } });
      glviewer.render(); 
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





function visualisation_nous(){

  let test=
    document.querySelector("#molecule2");
    test.innerHTML = `
      <div id="container-molecule2-close">
      <br>
      <br>
      <h1>Outils</h1>
      <div class="border-drag">
      <h2>Styles</h2>
      <div class="border-drag">

      <input class="buttonbox" type="button" value="Stick" onclick="glviewer.setStyle({},{stick:{}}); glviewer.render();">
      <input class="buttonbox" type="button" value="Line" onclick="glviewer.setStyle({},{line:{}}); glviewer.render();">
      <input class="buttonbox" type="button" value="Cross" onclick="glviewer.setStyle({},{cross:{linewidth:2}}); glviewer.render();">
      <input class="buttonbox" type="button" value="Sphere" onclick="glviewer.setStyle({},{sphere:{}}); glviewer.render();">
      <input class="buttonbox" type="button" value="Cartoon" onclick="glviewer.setStyle({},{cartoon:{}}); glviewer.render();">
      </div>
      <h2>Atomes & Couleurs</h2>
      <div class="border-drag">

      <input class="buttonbox" type="button" value="Label C??" onclick="addLabels(glviewer); glviewer.render();">
      <input class="buttonbox" type="button" value="SS" onclick="colorSS(glviewer);">
      <input class="buttonbox" type="button" value="Spectrum" onclick="colorSpectrum(glviewer);">
      </div>

      <h2>Surfaces</h2>
      <div class="border-drag">

      <input class="buttonbox" type="button" value="Surface1" onclick="surf1 = glviewer.addSurface($3Dmol.SurfaceType.VDW, {}, {hetflag:false,chain:'A'},{hetflag:false,chain:'A'});">
      <input class="buttonbox" type="button" value="Surface2" onclick="surf2 = glviewer.addSurface($3Dmol.SurfaceType.MS, {map:{prop:'partialCharge',scheme:new $3Dmol.Gradient.RWB(-.6,.6)}, opacity:0.85}, {chain:'B'},{chain:'B'});">
      <input class="buttonbox" type="button" value="RM Surfaces" onclick="glviewer.removeAllSurfaces();">
      </div>

      <h2>Plus</h2>
      <div class="border-drag">

      <input class="buttonbox" type="button" value="Recenter" onclick="glviewer.zoomTo();">
      <a id="download_img" download="image.png">
      <button class="buttonbox" type="button" onClick="download_png()">PNG</button></a>
      </div>

      </div>
      </div>

  `
}


function close_button(){
  let test=
  document.querySelector("#close_button-id");
  test.innerHTML = `
  <div class="container-close">
    <div id ="test-button" onclick="hideThis('test-button'),hideThis('container-01'),hideThis('molecule2'),hideThis('inlineFrameExample')" class="btn-c btn3"></div>
   </div>

`
}
