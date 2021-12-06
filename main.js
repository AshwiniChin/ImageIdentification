
function setup() {
  
  canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

}
   function draw(){
    image(video, 0, 0, 300, 300);
   }   


  console.log('ml5 version:', ml5.version);
  

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = save('object.png');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
