"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMultipleSides = exports.isSide = exports.sides = void 0;
// This order must match the shorthand used for CSS, e.g. for `margin: T R B L`
exports.sides = ['top', 'right', 'bottom', 'left'];
function isSide(side) {
    return Boolean(side) && typeof side === 'string' && exports.sides.includes(side);
}
exports.isSide = isSide;
function isMultipleSides(sideList) {
    if (typeof sideList !== 'string') {
        return false;
    }
    return sideList.split(' ').every((side) => sideList.includes(side));
}
exports.isMultipleSides = isMultipleSides;
//# sourceMappingURL=sides.js.map