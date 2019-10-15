import { flatMap } from 'lodash';

// Board constants
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8];
const SQUARES = flatMap(FILES, (file) => RANKS.map((rank) => file + rank));

// Algebraic notation constants
const LENGTH_OF_SQUARE = 2; // "e4"
const CAPTURE = 'x';
const PIECES = ['K', 'Q', 'B', 'N', 'R'];

/**
 * Return true IFF the given square is a square that exists on a standard chess board.
 * @param square A square in algebraic notation, e.g. "d4"
 */
export function isValidSquare(square: string): boolean {
    return SQUARES.includes(square);
}

/**
 * Return [true, null] IFF the given chess notation string is syntactically correct
 *
 * Returns [false, "<error_message>"] in the case of a syntactically invalid move. The error
 * message string should state the first syntactic error found.
 *
 * @param move A proposed chess move in chess notation, e.g. "Ne3"
 */
export function isSyntacticallyValidMove(move: string): [boolean, string] {
    if (move.length === LENGTH_OF_SQUARE) {
        const squareIsValid = isValidSquare(move);
        if (squareIsValid) {
            return [true, null];
        } else {
            return [false, `Illegal destination: "${move}"`]
        }
    }

    if (move.includes(CAPTURE) && move.split(CAPTURE).length > 2) {
        return [false, `Syntax error, illegal use of capture delimiter: "${move}"`];
    }

    if (move.includes(CAPTURE)) {
        const [piece, targetSquare]: string[] = move.split(CAPTURE);
        const pieceIsLegal: boolean = FILES.includes(piece) || PIECES.includes(piece);
        const destinationIsLegal: boolean = isValidSquare(targetSquare);
        if (!pieceIsLegal) {
            return [false, `Illegal piece: "${piece}"`];
        } else if (!destinationIsLegal) {
            return [false, `Illegal destination: "${targetSquare}"`];
        } else {
            return [true, null];
        }
    }
}
