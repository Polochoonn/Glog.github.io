var glviewer = null;

async function display3D(protein) {
	console.log("start display");
	let element = document.getElementById('container-01');
	let pdbUri = protein

	glviewer = $3Dmol.createViewer($(element), { defaultcolors: $3Dmol.elementColors.rasmol, backgroundColor: 'black' });
	
	if (pdbUri.startsWith('pdb:')) {
		glviewer = $3Dmol.download(pdbUri, glviewer, { doAssembly: true, noSecondaryStructure: false }, function () {
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


