<<<<<<< HEAD
// components
export { Homepage } from "./Homepage";
=======
/**
 * Hub file
 */

import { ReduxMW } from "./ReduxMW";
import { Homepage as Homepage_ } from "./Homepage";
export * from "./type";
export const Homepage = ReduxMW(Homepage_);
>>>>>>> 08953d48cabb3e9b7848039bfa10ca6a9aa752f7
