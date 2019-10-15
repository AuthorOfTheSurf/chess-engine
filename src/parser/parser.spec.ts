import { isValidSquare } from './parser';

describe('Parser', () => {
    describe('#isValidSquare', () => {
        it('correctly identifies squares as outside of the board', () => {
            expect(isValidSquare('z-1')).toEqual(false);
            expect(isValidSquare('h9')).toEqual(false);
            expect(isValidSquare('a0')).toEqual(false);
        });

        it('correctly identifies squares as within the board', () => {
            expect(isValidSquare('e4')).toEqual(true);
            expect(isValidSquare('h8')).toEqual(true);
        });
    });

    // describe('Pawn moves', (t) => {
    //     t.equals(isValidMove('e4'), [true, null], 'A legal pawn move');
    //     t.equals(isValidMove('d4'), [true, null], 'A legal pawn move');
    //     t.equals(isValidMove('exd5'), [true, null], 'Pawn on e-file captures the piece on d5');
    //     t.equals(isValidMove('exd6e.p.'), [true, null], 'En passat capture by pawn on e-file on d-file. Capturing pawn ends up on d6');
    //     t.end();
    // });
});
