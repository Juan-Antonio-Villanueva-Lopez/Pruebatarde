var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
      
      background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(202, 200, 300, 300); //egg
ellipse(214, 250, 100, 100); //egg

fill(252, 236, 10);
stroke(216, 230, 14);
ellipse(216, 250, 50, 50);

stroke(61, 232, 5);
stroke(245, 10, 104);
triangle(223, 81, 188, 150, 300, 200); //sanwich

stroke(240, 240, 240);
fill(173, 19, 19);
rect(88, 116, 34, 170);

stroke(240, 240, 240);
fill(173, 19, 19);
rect(115, 116, 34, 170);

      
    }
  };
  
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc); 