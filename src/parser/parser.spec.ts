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
        it('Affirms basic pawn moves', () => {
            expect(isSyntacticallyValidMove('e4')).toEqual([true, null]);
            expect(isSyntacticallyValidMove('a8')).toEqual([true, null]);
        });

        it('Rejects impossible pawn moves with reason', () => {
            expect(isSyntacticallyValidMove('e9')).toEqual([false, 'Target square invalid: "e9"']);
            expect(isSyntacticallyValidMove('a0')).toEqual([false, 'Target square invalid: "a0"']);
        });
    });
});
