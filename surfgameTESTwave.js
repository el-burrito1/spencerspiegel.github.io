$(document).on('ready' , function(){

var Shark = new function(height,width){
	this.height = height;
	this.width = width;
};

sharkNames = ['stan', 'bill' , 'ted'];

setInterval(function(){
	newShark(sharkNames)
},1000);

function newShark(name){
	name = new Kinetic.Rect({
		width: 10,
		height: 10,
		x: 700,
		y: 220,
		fill: 'black'
	});

	waveLayer.add(name);

	var sharkX = 700;
    

    var sharkAttack = new Kinetic.Animation(function(){
      name.setX(sharkX);
      sharkX-=2;
      },waveLayer);


 	sharkAttack.start()
}





})