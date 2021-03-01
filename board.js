class Board
{
    constructor()
    {
        this.whitePieces = [];
        this.blackPieces = [];

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
}