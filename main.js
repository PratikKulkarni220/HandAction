var camera=document.getElementById("camera");
Webcam.set({
    width:300,
    height:450,
    image_format:'png',
    png_quality:99,
})

Webcam.attach("#camera");

function takeImage()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("snap_div").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }