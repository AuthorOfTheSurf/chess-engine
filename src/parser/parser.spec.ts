import test from 'tape';
import { isValidMove, isValidSquare } from './parser';

test('Parser', (t) => {
    test('Out of board moves', (t) => {
        t.equals(isValidSquare('z1'), false, 'An impossible move: outside of board');
        t.equals(isValidSquare('h9'), false, 'An impossible move: outside of board');
        t.equals(isValidSquare('a0'), false, 'An impossible move: outside of board');
        t.equals(isValidSquare('e4'), true, 'A valid square');
        t.equals(isValidSquare('h8'), true, 'A valid square');
        t.end();
    });

    test('Pawn moves', (t) => {
        t.equals(isValidMove('e4'), [true, null], 'A legal pawn move');
        t.equals(isValidMove('d4'), [true, null], 'A legal pawn move');
        t.equals(isValidMove('exd5'), [true, null], 'Pawn on e-file captures the piece on d5');
        t.equals(isValidMove('exd6e.p.'), [true, null], 'En passat capture by pawn on e-file on d-file. Capturing pawn ends up on d6');
        t.end();
    });

    t.end();
});
