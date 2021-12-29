//creating array of marks
var marks=[36,44,48,38,40]

//declaring variables
var sum=0,average,s1,s2,s3,s4,sprites;

//function to find the average
function marksAverage(){
  
// sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
for(var i=0;i<marks.length;i++){
  sum=sum+marks[i];
}
avg=sum/marks.length
//console.log(avg)
}


function setup() {
  createCanvas(400, 400);

  //calling the function 
  marksAverage()

  //creating Sprites
  s1=createSprite(50,200,40,40);
  s2=createSprite(200,200,40,40);
  sprites=[s1,s2]
  for(var i=0;i<sprites.length;i++){
    console.log(sprites[i].position.x)
  }
  
}

function draw() {
  background(220);




  drawSprites()
}