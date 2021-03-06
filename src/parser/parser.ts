import { flatMap } from 'lodash';

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8];
const SQUARES = flatMap(FILES, (file) => RANKS.map((rank) => file + rank));

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
// export function isValidMove(move: string): [boolean, string] {
//     return [false, ""];
// }
