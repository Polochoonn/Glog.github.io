var x = document.getElementById("browseID").value;
console.log(x);



$(function() {
    let element = $('#container-01');
    let config = { backgroundColor: 'white' };
    let viewer = $3Dmol.createViewer( element, config );
  let pdbUri = './4qw0.pdb';
  jQuery.ajax( pdbUri, { 
    success: function(data) {
      let v = viewer;
      v.addModel( data, "pdb" );                       /* load data */
      v.setStyle({}, {cartoon: {color: 'spectrum'}});  /* style all atoms */
      v.zoomTo();                                      /* set camera */
      v.render();                                      /* render scene */
      v.zoom(1.2, 1000);                               /* slight zoom */
    },
    error: function(hdr, status, err) {
      console.error( "Failed to load PDB " + pdbUri + ": " + err );
    },
})
});