export type Side = 'top' | 'right' | 'bottom' | 'left';
export type MultipleSides = `${Side} ${Side}` | `${Side} ${Side} ${Side}`;
export type Boundaries = {
    [b in Side]?: number | 'ignore' | null;
};
export type UserOptions = {
    container?: HTMLElement | Window | Document;
} & Boundaries;
export type Config = {
    container: HTMLElement | Window | Document;
} & {
    [b in Side]: number | 'ignore';
};
//# sourceMappingURL=types.d.ts.map