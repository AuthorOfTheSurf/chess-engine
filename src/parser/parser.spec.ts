import { isSyntacticallyValidMove, isValidSquare } from './parser';

describe('Parser', () => {
    describe('#isValidSquare', () => {
        it('should reject squares outside of the board', () => {
            expect(isValidSquare('z-1')).toEqual(false);
            expect(isValidSquare('h9')).toEqual(false);
            expect(isValidSquare('a0')).toEqual(false);
        });

        it('should accept squares within the board', () => {
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

        it('rejects illegal en passat captures', () => {
            expect(isSyntacticallyValidMove('Qxd6e.p.')).toEqual([false, 'Only pawns may capture en passat: "Q"']);
            expect(isSyntacticallyValidMove('exh9e.p.')).toEqual([false, 'Illegal destination: "h9"']);
            expect(isSyntacticallyValidMove('exd6e.p.e.p.')).toEqual([false, 'Syntax error, illegal use of en passat designation: "exd6e.p.e.p."']);
            expect(isSyntacticallyValidMove('ed6e.p.')).toEqual([false, `Syntax error, en passat must be a capture: "ed6e.p."`]);
        });

        it('accepts en passat captures', () => {
            expect(isSyntacticallyValidMove('exd6e.p.')).toEqual([true, null]);
        });
    });
});
