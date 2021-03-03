let tileSize;
let sheetWidth = 2000;
let sheetHeight = 667;
let pieceWidth = sheetWidth / 6;
let pieceHeight = sheetHeight / 2;
let spritesheet;
let board;
let mousex;
let mousey;

function preload()
{
    spritesheet = loadImage("spritesheet.png");
}

function setup()
{
    // setting up size of canvas according to window size
    if (windowWidth > windowHeight)
    {
        createCanvas(windowHeight - 100,windowHeight - 100);

        tileSize = (windowHeight -100) / 8;
    }
    else 
    {
        createCanvas(windowWidth,windowWidth);

        tileSize = windowWidth / 8;
    }

    board = new Board();
}

function draw() 
{
    updateMousePos();
    showGrid();
    board.show();
}

function showGrid()
{
    for (let file = 0; file < 8; file++)
    {
        for (let rank = 0; rank < 8; rank++)
        {
            if ((rank + file) % 2 == 0)
            {
                fill(255, 219, 170);
            }
            else
            {
                fill(0, 74, 0);
            }

            rect(file * tileSize, rank * tileSize, tileSize);
        }
    }
}

function updateMousePos() 
{
    mousex = mouseX;
    mousey = mouseY;
}

function mouseIsWithinBoard()
{
    if ((mouseX > 0 && mouseX < board.width) && (mouseY > 0 && mouseY < board.width))
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

function mousePressed()
{
    if(!board.isHoldingPiece && mouseIsWithinBoard()) // if mouse is within the board and not holding a piece
    {
        board.pickUpPiece(mouseX, mouseY);
    }
    else if (board.isHoldingPiece && mouseIsWithinBoard())
    {
        board.putDownPiece(mouseX, mouseY);
    }
}
