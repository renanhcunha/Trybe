// Chess moves

let piece = "KING";
let lowerPiece = piece.toLocaleLowerCase();

switch (lowerPiece) {
  case "pawn":
    console.log(lowerPiece + " move: forward");
    break;
  case "rook":
    console.log(lowerPiece + " moves: forward, backward, left or right");
    break;
  case "knight":
    console.log(lowerPiece + " move: L format");
    break;
  case "bishop":
    console.log(lowerPiece + " move: diagonally");
    break;
  case "queen":
    console.log(lowerPiece + " move: any direction");
    break;
  case "king":
    console.log(lowerPiece + " move: one squad, any direction");
    break;
  default:
    console.log("Error: Inexistent piece!")
}