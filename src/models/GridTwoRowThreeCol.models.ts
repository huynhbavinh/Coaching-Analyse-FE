interface option {
    background: string,
}

interface element {
    isWider: boolean,
    element: JSX.Element,
}

export interface GridTwoRowThreeColInterface {
    elementsFirstRow: Array<element>;
    elementsSectRow: Array<element>;
    options?: option;
}