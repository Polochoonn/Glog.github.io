var glviewer = null;

async function display3D(protein) {
	console.log("start display");
	let element = document.getElementById('container-01');
	let pdbUri = protein

	glviewer = $3Dmol.createViewer($(element), { defaultcolors: $3Dmol.elementColors.rasmol, backgroundColor: 'black' });

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













function visualisation(molecule) {
	console.log(molecule);
	let test =
		document.querySelector("#molecule");
	test.innerHTML = `
    <iframe id="inlineFrameExample"
    title="Visualisation proteine connus"
    src="https://3Dmol.org/viewer.html?pdb=${molecule}&style=cartoon:color~spectrum">
</iframe>
  `
}


