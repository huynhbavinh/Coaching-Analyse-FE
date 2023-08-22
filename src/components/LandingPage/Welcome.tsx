import { GridTwoRowThreeColInterface } from "../../models/GridTwoRowThreeCol.models";
import GridTwoRowThreeCol from "../../pages/GridTwoRowThreeCol";

export function Welcome () {
    const elements: GridTwoRowThreeColInterface = {
        elementsFirstRow: [{isWider: false, element: <>col 1</>}, {isWider: true, element: <>col 2 - Wider</>}, {isWider: false, element: <>col 3</>}],
        elementsSectRow: [{isWider: false, element: <>col 2 - img</>},{isWider: false, element: <>col 2 - img</>},],
        options: {
            background: 'bg-primary-subtle'
        }
    }
    return (
        <>
            <GridTwoRowThreeCol {...elements}/>
        </>
    )
}