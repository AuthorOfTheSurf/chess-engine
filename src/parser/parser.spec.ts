import test from 'tape';
import { isValidMove } from './parser';

test('Parser', (t) => {
    test('Out of board moves', (t) => {
        t.equals(isValidMove('z1'), [true, 'Invalid square: "z" is not a file'], 'An impossible move: outside of board');
        t.equals(isValidMove('h9'), [true, 'Invalid square: "9" is not a rank'], 'An impossible move: outside of board');
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
