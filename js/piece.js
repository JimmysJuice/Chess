class Piece
{
    constructor(x, y, white)
    {
        this.boardPosition = {x: x, y: y};
        this.pixelPosition = {x: x * tileSize, y: ((y - 8) * -1) * tileSize};

        this.isWhite = white;
        this.isTaken = false;
    }

    updatePixelPosition()
    {
        this.pixelPosition.x = this.boardPosition.x;
        this.pixelPosition.y = (this.boardPosition.y - 8) * -1 * tileSize;
    }
}
class Rook extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
    }

    show()
    {
        textSize(30);
        text("R", this.pixelPosition.x, this.pixelPosition.y);
    }
}

class Knight extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
    }

    show()
    {
        textSize(30);
        text("N", this.pixelPosition.x, this.pixelPosition.y);
    }
}

class Bishop extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
    }

    show()
    {
        textSize(30);
        text("B", this.pixelPosition.x, this.pixelPosition.y);
    }
}

class King extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
    }

    show()
    {
        textSize(30);
        text("K", this.pixelPosition.x, this.pixelPosition.y);
    }
}

class Queen extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
    }

    show()
    {
        textSize(30);
        text("Q", this.pixelPosition.x, this.pixelPosition.y);
    }
}

class Pawn extends Piece 
{
    constructor(x, y, white)
    {
        super(x, y, white);
    }

    show()
    {
        textSize(30);
        text("p", this.pixelPosition.x, this.pixelPosition.y);
    }
}