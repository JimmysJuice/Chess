let tileSize = 100;
let board = new Board();

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
                fill(255);
            }
            else
            {
                fill(0);
            }

            rect(file * tileSize, rank * tileSize, tileSize);
        }
    }
}