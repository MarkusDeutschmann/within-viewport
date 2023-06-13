// This order must match the shorthand used for CSS, e.g. for `margin: T R B L`
export const sides = ['top', 'right', 'bottom', 'left'];
export function isSide(side) {
    return Boolean(side) && typeof side === 'string' && sides.includes(side);
}
export function isMultipleSides(sideList) {
    if (typeof sideList !== 'string') {
        return false;
    }
    return sideList.split(' ').every((side) => sideList.includes(side));
}
//# sourceMappingURL=sides.js.map