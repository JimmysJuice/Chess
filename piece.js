class Piece
{
    constructor(x, y, white)
    {
        this.boardPosition = {x: x, y: y};
        this.pixelPosition = {x: x * tileSize, y: (((y - 8) * -1) - 1) * tileSize};

        this.isWhite = white;
        this.isTaken = false;
        this.sy = white ? 0 : pieceHeight + 1;
    }

    updatePixelPosition()
    {
        this.pixelPosition.x = this.boardPosition.x * tileSize;
        this.pixelPosition.y = (((this.boardPosition.y - 8) * -1) -1) * tileSize;
    }
}
class Rook extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth * 4;
    }

    show()
    {
        //canvas.drawImage(spritesheet, pieceWidth * 4, 0, pieceWidth, pieceHeight, this.x, this.y, 60, 60);
        image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, 100, 100, this.sx, this.sy, pieceWidth, pieceHeight);
    }
}

class Knight extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth * 3;
    }

    show()
    {
        image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, 100, 100, this.sx, this.sy, pieceWidth, pieceHeight);
    }
}

class Bishop extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth * 2;
    }

    show()
    {
        image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, 100, 100, this.sx, this.sy, pieceWidth, pieceHeight);
    }
}

class King extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = 0;
    }

    show()
    {
        image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, 100, 100, this.sx, this.sy, pieceWidth, pieceHeight);
    }
}

class Queen extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth;
    }

    show()
    {
        image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, 100, 100, this.sx, this.sy, pieceWidth, pieceHeight);
    }
}

class Pawn extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth * 5;
    }

    show()
    {
        image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, 100, 100, this.sx, this.sy, pieceWidth, pieceHeight);
    }
}