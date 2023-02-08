import { Cell } from './Cell'

export default {
     title: 'Cell',
     component: Cell
}
export const Alive = () => <Cell alive height={10} width={10} id="1" />
export const Dead = () => <Cell alive={false} height={10} width={10} id="2" />
