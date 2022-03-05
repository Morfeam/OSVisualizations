function draw() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');
    var xVar  = [100,300,150];
    var yVar = [10, 20, 30]; 
    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;

    // draw a red line
    
    ctx.beginPath();
    ctx.moveTo(100, 100);
    /*
    ctx.lineTo(300, 100);
    ctx.stroke();

    ctx.moveTo(300, 100);
    ctx.lineTo(150, 350);
    ctx.stroke();
    */
   
    /*
    for(var i = 0; i < 3; i++)
    {
        ctx.lineTo(xVar[i], yVar[i]);
        ctx.stroke();
        ctx.lineTo(xVar[i+1], yVar[i+1]);
    }*/

}
draw();

function myFunction(){
    var i = 0;
    ctx.lineTo(xVar[i], yVar[i]);
    ctx.stroke();
    ctx.lineTo(xVar[i+1], yVar[i+1]);
    i++; 
}