//we are using fabric.js to remove old position of the player

var canvas = new fabric.Canvas('myCanvas');//variable to store canvas elements

//variables to store the starting x and y position of the player
player_x = 10;
player_y = 10;

//variables to store the width and height of the block images
block_image_width = 30;
block_image_height = 30;

//variables to store images from fabric.js which are stored there in the form of objects
var player_object= "";
var block_image_object= "";


function player_update()//uploads player image on the canvas
{
    fabric.Image.fromURL("player.png", function(Img)//player image is being fetched and uploaded from fabric.js library
     {
    player_object = Img;

    player_object.scaleToWidth(150);//to set width of image
    player_object.scaleToHeight(130);
   //to set height of image

    //to set the x and y position of the player on the canvas
    player_object.set({
    top:player_y,
    left:player_x
    });

    canvas.add(player_object);//to add the image on the canvas
    });
}

//same function to fetch block objects from fabric library and upload in the  canvas
function new_image(get_image)//get_image is a variable which is used to store a specific block image on a specific key press from fabric.js
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });

}


window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    code = e.keyCode;
    console.log(code);
    
    if(e.shiftKey == true && code == '80'){

         block_image_width = block_image_width + 10;
         block_image_height = block_image_height + 10;
         document.getElementById("current_width_span").innerHTML=block_image_width;
         document.getElementById("current_height_span").innerHTML=block_image_height;

    }

    if(e.shiftKey == true && code == '77'){

        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width_span").innerHTML=block_image_width;
        document.getElementById("current_height_span").innerHTML=block_image_height;

   }


   if(code=='38'){
      up();
   }

   if(code=='40'){
       down();
   }

   if(code=='37'){
    left();
}

if(code=='39'){
     right();
}

if(code=='80'){
    new_image('Captain left arm.jpeg');
}

if(code=='82'){
    new_image('Thor right arm.jpeg');
}

if(code=='76'){
    new_image('Hulk legs.jpeg');
}

if(code=='76'){
    new_image('Hulk legs.jpeg');
}

if(code=='72'){
    new_image('iron_head.jpg');
}

if(code=='67'){
    new_image('Spider man chest.jpg');
}



function up(){

    if(player_y >=0){

    player_y=player_y - block_image_height;
    canvas.remove(player_object);
    player_update();

    }
}

function down(){

    if(player_y <=500){

    player_y=player_y + block_image_height;
    canvas.remove(player_object);
    player_update();

    }
}

function left(){

    if(player_x >=0){

    player_x=player_x - block_image_width;
    canvas.remove(player_object);
    player_update();

    }
}

function right(){

    if(player_x <=800){

    player_x=player_x + block_image_width;
    canvas.remove(player_object);
    player_update();

    }
}
}