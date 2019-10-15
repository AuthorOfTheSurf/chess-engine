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
            expect(isSyntacticallyValidMove('e9')).toEqual([false, 'Illegal destination: "e9"']);
            expect(isSyntacticallyValidMove('a0')).toEqual([false, 'Illegal destination: "a0"']);
        });

        it('rejects multiple usages of the capture delimiter', () => {
            expect(isSyntacticallyValidMove('xxe5')).toEqual([false, 'Syntax error, illegal use of capture delimiter: "xxe5"']);
            expect(isSyntacticallyValidMove('xXx')).toEqual([false, 'Syntax error, illegal use of capture delimiter: "xXx"']);
        });

        it('rejects illegal pieces on capturing moves', () => {
            expect(isSyntacticallyValidMove('Zxd5')).toEqual([false, 'Illegal piece: "Z"']);
            expect(isSyntacticallyValidMove('ixe5')).toEqual([false, 'Illegal piece: "i"']);
        });

        it('rejects illegal destinations on capturing moves', () => {
            expect(isSyntacticallyValidMove('Rxj5')).toEqual([false, 'Illegal destination: "j5"']);
            expect(isSyntacticallyValidMove('QxK5')).toEqual([false, 'Illegal destination: "K5"']);
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
