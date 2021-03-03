class Board
{
    constructor()
    {
        this.whitePieces = [];
        this.blackPieces = [];
        this.width = tileSize * 8;
        this.isHoldingPiece = false;
        this.heldPiece = {};
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
            if (!this.whitePieces[i].isTaken)
            {
                this.whitePieces[i].show();
            }
        }
        for (let i = 0; i < this.blackPieces.length; i++)
        {
            this.blackPieces[i].show();
        }

        if (this.isHoldingPiece)
        {
            this.heldPiece.show();
        }
    }

    idSquare(x, y)
    {
        let square = {};
        square.isEmpty = true;

        square.x = Math.floor(x / tileSize);
        square.y = (Math.floor(y / tileSize) -7) * -1;
        
        for (let i = 0; i < this.whitePieces.length; i++)
        {
            if (this.whitePieces[i].boardPosition.x === square.x && this.whitePieces[i].boardPosition.y === square.y)
            {
                square.piece = this.whitePieces[i];
                square.isEmpty = false;
                return square;
            }
        }
        
        for (let i = 0; i < this.blackPieces.length; i++)
        {
            if (this.blackPieces[i].boardPosition.x === square.x && this.blackPieces[i].boardPosition.y === square.y)
            {
                square.piece = this.blackPieces[i];
                square.isEmpty = false;
                return square;
            }
        }

        return square;
    }

    isOffBoard(x, y)
    {
        if (x < 0 || x > 7 || y < 0 || y > 7)
        {
            return true;
        }
        return false;
    }

    isLegalMove(square)
    {
        if (!square.isEmpty)
        {
            if (this.heldPiece.isWhite === square.piece.isWhite)
            {
                return false;
            }
        }
        return true;
    }

    pickUpPiece(x, y)
    {
        let square = this.idSquare(x, y);

        if (!square.isEmpty && square.piece.isWhite === this.isWhitesTurn)
        {
            this.heldPiece = square.piece;
            square.piece.isPickedUp = true;
            board.isHoldingPiece = true;
        }
    }

    putDownPiece(x, y)
    {
        let square = this.idSquare(x, y);

        if (this.isLegalMove(square))
        {
            if (!square.isEmpty) 
            {
                square.piece.take();
            }

            this.heldPiece.boardPosition.x = square.x;
            this.heldPiece.boardPosition.y = square.y;
            this.heldPiece.updatePixelPosition();

            if(!this.heldPiece.hasMoved)
            {
                this.heldPiece.hasMoved = true;
            }


            board.isHoldingPiece = false;
            this.heldPiece.isPickedUp = false;

            if (this.isWhitesTurn)
            {
                this.isWhitesTurn = false;
            }
            else
            {
                this.isWhitesTurn = true;
            }
        }
        else
        {
            this.heldPiece.updatePixelPosition();
            board.isHoldingPiece = false;
            this.heldPiece.isPickedUp = false;
        }
    }
}