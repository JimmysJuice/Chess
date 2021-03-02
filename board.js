class Board
{
    constructor()
    {
        this.whitePieces = [];
        this.blackPieces = [];
        this.width = tileSize * 8;
        this.isHoldingPiece = false;
        this.isWhitesTurn = true;

        this.setUpPieces();
    }

    setUpPieces()
    {
        this.whitePieces.push(new Rook(0, 0, true));
        this.whitePieces.push(new Knight(1, 0, true));
        this.whitePieces.push(new Bishop(2, 0, true));
        this.whitePieces.push(new Queen(3, 0, true));
        this.whitePieces.push(new King(4, 0, true));
        this.whitePieces.push(new Bishop(5, 0, true));
        this.whitePieces.push(new Knight(6, 0, true));
        this.whitePieces.push(new Rook(7, 0, true));

        this.whitePieces.push(new Pawn(0, 1, true));
        this.whitePieces.push(new Pawn(1, 1, true));
        this.whitePieces.push(new Pawn(2, 1, true));
        this.whitePieces.push(new Pawn(3, 1, true));
        this.whitePieces.push(new Pawn(4, 1, true));
        this.whitePieces.push(new Pawn(5, 1, true));
        this.whitePieces.push(new Pawn(6, 1, true));
        this.whitePieces.push(new Pawn(7, 1, true));

        this.blackPieces.push(new Rook(0, 7, false));
        this.blackPieces.push(new Knight(1, 7, false));
        this.blackPieces.push(new Bishop(2, 7, false));
        this.blackPieces.push(new Queen(3, 7, false));
        this.blackPieces.push(new King(4, 7, false));
        this.blackPieces.push(new Bishop(5, 7, false));
        this.blackPieces.push(new Knight(6, 7, false));
        this.blackPieces.push(new Rook(7, 7, false));

        this.blackPieces.push(new Pawn(0, 6, false));
        this.blackPieces.push(new Pawn(1, 6, false));
        this.blackPieces.push(new Pawn(2, 6, false));
        this.blackPieces.push(new Pawn(3, 6, false));
        this.blackPieces.push(new Pawn(4, 6, false));
        this.blackPieces.push(new Pawn(5, 6, false));
        this.blackPieces.push(new Pawn(6, 6, false));
        this.blackPieces.push(new Pawn(7, 6, false));
    }

    show()
    {
        for (let i = 0; i < this.whitePieces.length; i++)
        {
            this.whitePieces[i].show();
        }
        for (let i = 0; i < this.blackPieces.length; i++)
        {
            this.blackPieces[i].show();
        }
    }

    findPiece(x, y)
    {
        x = Math.floor(x / tileSize);
        y = (Math.floor(y / tileSize) -7) * -1;

        if (this.isWhitesTurn)
        {
            for (let i = 0; i < this.whitePieces.length; i++)
            {
                if (this.whitePieces[i].boardPosition.x === x && this.whitePieces[i].boardPosition.y === y)
                {
                    return this.whitePieces[i];
                }
            }
            return null;
        }
        else
        {
            for (let i = 0; i < this.blackPieces.length; i++)
            {
                if (this.blackPieces[i].boardPosition.x === x && this.blackPieces[i].boardPosition.y === y)
                {
                    return this.blackPieces[i];
                }
            }
            return null;
        }
    }

    pickUpPiece(x, y)
    {
        let piece = this.findPiece(x, y);
        if (piece != null)
        {
            piece.isPickedUp = true;
            board.isHoldingPiece = true;
        }
    }

    putDownPiece(x, y)
    {
        //need to change findPiece function to findsquare
    }
}