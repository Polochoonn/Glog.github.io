function pipe(file, job) {
    const { spawnSync } = require('child_process');
    const sensor = spawnSync('python', ['./python/main.py', file, job]);
    var content = sensor.stdout.toString();
    return content;
}

function uploadFilesFasta() {
    var files = document.getElementById('upload_fasta').files;
    if (files.length == 0) {
        alert("Please first choose or drop any file(s)...");
        hideThis('container-molecule2-close');
        return;
    }
    var filenames = "";
    for (var i = 0; i < files.length; i++) {
        filenames += files[i].name + "\n";
    }
    console.log("Hello");
    return filenames;

}

function Predict() {
    let filename = uploadFilesFasta();
    let content = pipe(filename,'test');
    let area = document.getElementById("test");
    area.value=content;

}
var test = [];
while (test.length === 0) {
    console.log("Processing");
    test.push(pipe('P23276.fasta', 'test'));
}
console.log(test[0])

file = document.getElementById("upload_fasta")
