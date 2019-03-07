import Training from "./page/Training";
import Translate from "./page/Translate";
import Add from "./page/Add";

export const Routes = [
    {
        path: '/training',
        name: 'Training',
        component: Training
    },
    {
        isExact: true,
        path: '/',
        name: 'Translate',
        component: Translate
    },
    {
        path: '/add',
        name: 'Add',
        component: Add
    }
];

export default Routes;