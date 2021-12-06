
function setup() {

    canvas = createCanvas(300, 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 200);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelLoaded);
  
  }
  function draw() {
    image(video, 0, 0, 300, 200);
  }
    
  console.log('ml5 version:', ml5.version);
  
  
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  function check() {
    classifier.classify(video, gotResult);
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