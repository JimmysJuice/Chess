let tileSize = 100;
let sheetWidth = 2000;
let sheetHeight = 667;
let pieceWidth = sheetWidth / 6;
let pieceHeight = sheetHeight / 2;
let spritesheet;
let board = new Board();

function preload()
{
    spritesheet = loadImage("spritesheet.png");
}

function setup()
{
    createCanvas(800,800);
}

function draw() 
{
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