    function display3D(protein) {

        let element = $('#container-01');
        let config = { backgroundColor: ' #fdf0d5' };
        let viewer = $3Dmol.createViewer( element, config );
        let pdbUri = protein.get_pdb();
      console.log("displau",pdbUri);
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
}