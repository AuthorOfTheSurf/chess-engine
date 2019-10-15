import { isSyntacticallyValidMove, isValidSquare } from './parser';

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

    describe('#isSyntacticallyValidMove', () => {
        it('affirms basic pawn moves', () => {
            expect(isSyntacticallyValidMove('e4')).toEqual([true, null]);
            expect(isSyntacticallyValidMove('a8')).toEqual([true, null]);
        });

        it('rejects impossible pawn moves with reason', () => {
            expect(isSyntacticallyValidMove('e9')).toEqual([false, 'Target square invalid: "e9"']);
            expect(isSyntacticallyValidMove('a0')).toEqual([false, 'Target square invalid: "a0"']);
        });

        it('accepts pawn moves that capture', () => {
            expect(isSyntacticallyValidMove('exd5')).toEqual([true, null]);
            expect(isSyntacticallyValidMove('fxe5')).toEqual([true, null]);
        });

        it('accepts major and minor piece moves that capture', () => {
            expect(isSyntacticallyValidMove('Kxa4')).toEqual([true, null]);
            expect(isSyntacticallyValidMove('Qxh8')).toEqual([true, null]);
            expect(isSyntacticallyValidMove('Bxb5')).toEqual([true, null]);
            expect(isSyntacticallyValidMove('Nxf3')).toEqual([true, null]);
            expect(isSyntacticallyValidMove('Rxc7')).toEqual([true, null]);
        });

        //     t.equals(isValidMove('exd6e.p.'), [true, null], 'En passat capture by pawn on e-file on d-file. Capturing pawn ends up on d6');
    });
});
