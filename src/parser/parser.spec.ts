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
        it('Affirms legal pawn moves', () => {
            expect(isSyntacticallyValidMove('e4')).toEqual([true, null]);
            expect(isSyntacticallyValidMove('a8')).toEqual([true, null]);
        });
    });
});
