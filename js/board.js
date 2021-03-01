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
        this.whitePieces.push(new King(1, 1, true));
        this.whitePieces.push(new Rook(2, 2, true));
        this.whitePieces.push(new Queen(0, 0, true));
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