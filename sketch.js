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
    let isRedSquare = false;
    let i = 0;
    noStroke();

    for (let file = 0; file < 8; file++)
    {
        for (let rank = 0; rank < 8; rank++)
        {
            while (i < board.heldPieceValidMoves.length && !isRedSquare)
            {
                if (board.heldPieceValidMoves[i].x === file && board.heldPieceValidMoves[i].y === ((rank - 8) * -1) - 1)
                {
                    isRedSquare = true;
                }
                i++;
            }

            i = 0;

            if ((rank + file) % 2 == 0)
            {
                if(isRedSquare) {
                    fill(255, 74, 0);
                }
                else
                {
                    fill(255, 219, 170);
                }
            }
            else
            {
                if(isRedSquare) {
                    fill(255, 0, 0);
                }
                else
                {
                    fill(0, 74, 0);
                }
                
            }
            rect(file * tileSize, rank * tileSize, tileSize);
            isRedSquare = false;
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
