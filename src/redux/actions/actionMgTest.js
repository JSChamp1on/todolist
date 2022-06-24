// redux
import { constants } from "@redux";

// constants
const {
    METHOD_MGTEST,
} = constants;
const URL = `${env.API_LINK}/api/MG_test`;

export const actionMgTest = () => dispatch => {
    dispatch({ type: METHOD_MGTEST, payload: { data: null, fail: null, loading: true } });

    const 
        successCallback = (payload) => {
            dispatch({ type: METHOD_MGTEST, payload: { data: payload, fail: null, loading: false } });
        },
        failCallback = (e) => {
            dispatch({ type: METHOD_MGTEST, payload: { data: null, fail: e, loading: false } });
        };

    (async () => {
        try {
            const res = await fetch(URL);
            
            if (res.ok) {
                return successCallback(await res.json());
            }

            failCallback({
                status: res.status,
                statusText: res.statusText,
            });
        } catch (e) {
            failCallback({
                statusText: e.message,
            });
        }
    })();
};
