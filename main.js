var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

newWidth =  screen.width - 70; 
newHeight = screen.height - 300;
	if(width < 992)
	{
	document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
	}
	canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) 
{
	console.log("myTouchStart");
  //Atividade Adicional
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  //Fim da Atividade Adicional
         
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) 
{

	console.log("myTouchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    // mesmo código utilizado para a versão web
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
    
    // fim do mesmo código utilizado para a versão web
}

    // mesmo código utilizado para a versão web
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // fim do mesmo código utilizado para a versão web


//Na tela do console a mensagem “my_touchstart” significa que a funcionalidade touch está funcionando. Enquanto desenhamos, as mensagens são imprimidas na tela do console com "my_touchmove" junto às últimas e atuais coordenadas x e y
//begin():Inicia um caminho, ou reinicia o caminho atual para desenhar qualquer coisa. Diz ao canvas para iniciar o desenho de um(a) forma/objeto
//strokeStyle: Ajusta a cor do desenho. ■ Ajustamos o valor da variável color e ela possui a cor black, portanto, o desenho será de cor black.
//lineWidth: Ajusta a width para o desenho. ■ Ajustamos o valor da variável widthLine para 2, para que a width do desenho seja 2.
//learRect(x, y, Canvas_width, Canvas_height); ○ ctx é a referência do canvas 2D que criamos no início. ○ clearRect é uma função predefinida, utilizada para limpar o canvas. ○ x: A coordenada x do canto superior esquerdo do retângulo a ser limpo. ○ y: A coordenada y do canto superior esquerdo do retângulo a ser limpo. ○ Canvas_width ○ Canvas_height
//Utilizamos: ctx.clearRect(0, 0, Canvas.width, Canvas.height); ○ x: Ajustaremos para 0, já que queremos limpar o canvas a partir da parte superior esquerda. ○ y: Ajustaremos para 0, já que queremos limpar o canvas a partir da base direita do canvas. ○ Canvas.width: Obterá a width do canvas. ○ Canvas.height: Obterá a height do canvas.
