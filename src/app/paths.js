// pages
import { Homepage } from "@pages/Homepage";

// constants
import { paths } from "@app";

const {
    HOMEPAGE,
} = paths;

export const commonComponents = [
    {
        path: HOMEPAGE.PATH,
        component: Homepage,
    },
];
