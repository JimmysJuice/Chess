class Piece
{
    constructor(x, y, white)
    {
        this.boardPosition = {x: x, y: y};
        this.pixelPosition = {x: x * tileSize, y: (((y - 8) * -1) - 1) * tileSize};

        this.sy = white ? 0 : pieceHeight + 1;
        this.isWhite = white;
        this.isPickedUp = false;
        this.isTaken = false;
        this.hasMoved = false;
    }

    updatePixelPosition()
    {
        this.pixelPosition.x = this.boardPosition.x * tileSize;
        this.pixelPosition.y = (((this.boardPosition.y - 8) * -1) -1) * tileSize;
    }

    followMouse()
    {
        this.pixelPosition.x = mousex - (tileSize / 2);
        this.pixelPosition.y = mousey - (tileSize / 2);
    }

    take()
    {
        this.isTaken = true;
        this.boardPosition.x = null;
        this.boardPosition.y = null;
    }
}
class Rook extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth * 4;
        this.name = "rook";
    }

    show()
    {
        if (!this.isTaken)
        {
            if (this.isPickedUp) 
            {
                this.followMouse();
            }
    
            image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize, this.sx, this.sy, pieceWidth, pieceHeight);
        }
    }
}

class Knight extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth * 3;
        this.name = "knight";
    }

    show()
    {
        if (!this.isTaken)
        {
            if (this.isPickedUp) 
            {
                this.followMouse();
            }

            image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize, this.sx, this.sy, pieceWidth, pieceHeight);
        }
    }
}

class Bishop extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth * 2;
        this.name = "bishop";
    }

    show()
    {
        if (!this.isTaken)
        {
            if (this.isPickedUp) 
            {
                this.followMouse();
            }

            image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize, this.sx, this.sy, pieceWidth, pieceHeight);
        }
    }
}

class King extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = 0;
        this.name = "king";
    }

    show()
    {
        if (!this.isTaken)
        {
            if (this.isPickedUp) 
            {
                this.followMouse();
            }

            image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize, this.sx, this.sy, pieceWidth, pieceHeight);
        }

    }
}

class Queen extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth;
        this.name = "queen";
    }

    show()
    {
        if (!this.isTaken)
        {
            if (this.isPickedUp) 
            {
                this.followMouse();
            }

            image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize, this.sx, this.sy, pieceWidth, pieceHeight); 
        }
    }
}

class Pawn extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
        this.sx = pieceWidth * 5;
        this.name = "pawn";
    }

    show()
    {
        if (!this.isTaken)
        {
            if (this.isPickedUp) 
            {
                this.followMouse();
            }

            image(spritesheet, this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize, this.sx, this.sy, pieceWidth, pieceHeight);
        }
    }
}