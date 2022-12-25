var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("Violin Huasteco - Jimena Contreras.mp3");
}
function setup() {

 createCanvas(windowWidth, windowHeight);
 background("#faedcd")
 music_btn = createButton("音樂跳舞")
 music_btn.position(10,10)
 music_btn.size(350, 150);
 music_btn.style('background-color', 'black');
 music_btn.style('font-size', '44px');
 music_btn.style('color', 'white');
 music_btn.mousePressed(music_btn_pressed)

 mouse_btn = createButton("滑鼠移動")
 mouse_btn.position(400,10)
 mouse_btn.size(350, 150);
 mouse_btn.style('background-color', 'black');
 mouse_btn.style('font-size', '44px');
 mouse_btn.style('color', 'white');
 mouse_btn.mousePressed(mouse_btn_pressed)

 Speech_btn = createButton("語音辨識(跳舞/不要跳)")
 Speech_btn.position(800,10)
 Speech_btn.size(350, 150);
 Speech_btn.style('background-color', 'black');
 Speech_btn.style('font-size', '33px');
 Speech_btn.style('color', 'white');
 Speech_btn.mousePressed(Speech_btn_pressed)
 }


function preload(){
  song = loadSound("Violin Huasteco - Jimena Contreras.mp3");
}

function music_btn_pressed(){
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()  

}

if(songIsplay){
  vol = amp.getLevel()
  face_x =map(vol,0,1,0,width) 
  face_y= map(vol,0,1,0,height)
}
else
if(mosueIsplay)
{
  face_x = mouseX
  face_y= mouseY

}

function mouse_btn_pressed(){
  song.pause()
  songIsplay = false

}

function Speech_btn_pressed(){
  myRec.onResult = showResult;
	myRec.start();
 
  // Speech_btn.style('value', '請發音');

}

function showResult()
	{
		if(myRec.resultValue==true) {
            //顯示辨識文字
          push()
            translate(0,0)
            background(192, 255, 192);
            fill(255,0,0)
            textStyle("italic")
            text(myRec.resultString,1200,10);
            text(myRec.resultString,0, height/2);
          pop()
        //=======================
          result = myRec.resultString
          if(myRec.resultString==="跳舞")
          {
            music_btn_pressed()
          }
          if(myRec.resultString==="不要跳")
          {
            song.pause()
            mosueIsplay = true
            songIsplay = false
            }
		}
	}

  

 
  function draw() {
    background(220);
    fill("#9c6644")
    stroke("#9c6644")
    rect(985,600,40,200)//木棍
    fill("#ff8fab")
    stroke("#ff8fab")
    ellipse(1000,520,250)//粉色糰子
    fill("#ffffff")
    stroke("#ffffff")
    ellipse(1000,410,250)//白色糰子
    fill("#a1c181")
    stroke("#a1c181")
    ellipse(1000,300,250)//綠色糰子
    //右眼
    fill("#ffffff")
    ellipse(1050,300,70)
    fill("#7f5539")
    ellipse(1050+mouseX/80,300+mouseY/100,20)
    //左眼
    fill("#ffffff")
    ellipse(960,300,70)
    fill("#7f5539")
    ellipse(960+mouseX/80,300+mouseY/100,20)
    //嘴巴
    fill("#e56b6f")
    arc(1000,400,50,30,0,180)
    if(mouseIsPressed)
    {  //mouseIsPressed為true,代表有按下滑鼠
       arc(1000,400,50,30,0,180)
    }
    else
    {
      //mouseIsPressed為false,代表有按下滑鼠
      arc(1000,400,65,60,0,200)
    }
  
  pop()
  
    fill("#9c6644")
    stroke("#9c6644")
    rect(685,480,30,130)//木棍
    fill("#ff8fab")
    stroke("#ff8fab")
    ellipse(700,450,150)//粉色糰子
    fill("#ffffff")
    stroke("#ffffff")
    ellipse(700,350,150)//白色糰子
    fill("#a1c181")
    stroke("#a1c181")
    ellipse(700,250,150)//綠色糰子
    //右眼
    fill("#ffffff")
    ellipse(730,250,50)
    fill("#7f5539")
    ellipse(730+mouseX/80,250+mouseY/100,15)
    //左眼
    fill("#ffffff")
    ellipse(670,250,50)
    fill("#7f5539")
    ellipse(670+mouseX/80,250+mouseY/100,15)
    //嘴巴
    fill("#e56b6f")
    arc(700,300,50,25,0,180)
    if(mouseIsPressed)
    {  //mouseIsPressed為true,代表有按下滑鼠
       arc(700,300,50,20,0,180)
    }
    else
    {
      //mouseIsPressed為false,代表有按下滑鼠
      arc(700,300,45,35,0,200)
    }
  
  pop()
  
    //產生不同顏色的圖
    fill("#9c6644")
    stroke("#9c6644")
    rect(1285,480,30,130)//木棍
    fill("#fec89a")
    stroke("#fec89a")
    ellipse(1300,450,150)//第一顆糰子
    fill("#f9dcc4")
    stroke("#f9dcc4")
    ellipse(1300,350,150)//第二顆糰子
    fill("#f8edeb")
    stroke("#f8edeb")
    ellipse(1300,250,150)//第三顆糰子
     //右眼
     fill("#ffffff")
     ellipse(1340,250,50)
     fill("#7f5539")
     ellipse(1340+mouseX/80,250+mouseY/100,15)
     //左眼
     fill("#ffffff")
     ellipse(1260,250,50)
     fill("#7f5539")
     ellipse(1260+mouseX/80,250+mouseY/100,15)
     //嘴巴
     fill("#e56b6f")
     arc(1300,300,50,25,0,180)
     if(mouseIsPressed)
    {  //mouseIsPressed為true,代表有按下滑鼠
       arc(1300,300,50,20,0,180)
    }
    else
    {
      //mouseIsPressed為false,代表有按下滑鼠
      arc(1300,300,45,35,0,200)
    }
  
  noFill()
pop()

  function mousePressed()
 {
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
}
}

