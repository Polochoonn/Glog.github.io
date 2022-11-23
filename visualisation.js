function display3D(protein) {

  let element = $('#container-01');
  let config = { backgroundColor: ' #fdf0d5' };
  let viewer = $3Dmol.createViewer(element, config);
  let pdbUri = protein.get_pdb();
  
  jQuery.ajax(pdbUri, {
    success: function (data) {
      let v = viewer;
      v.addModel(data, "pdb");                       /* load data */
      v.setStyle({}, { stick: { color: 'spectrum' } });  /* style all atoms */
      v.zoomTo();                                      /* set camera */
      v.render();                                      /* render scene */
      v.zoom(1.2, 1000);
      console.log('vvvv', v);
      return v;
    },
    error: function (hdr, status, err) {
      console.error("Failed to load PDB " + pdbUri + ": " + err);
    },

  }

  )


}
function modify_viewer(viewer) {

  viewer.setStyle({}, { cartoon: { colorscheme: 'yellowCarbon' }, line: { colorscheme: 'yellowCarbon' } });
  viewer.render()
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


