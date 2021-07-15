import { PreferenceDispatcher } from "./Songs/PreferenceRedux";

/**
 * Global access to Redux action dispatch.
 * There is one property per state slice.
 */
export const Dispatch = {

    /** The user's preferences such as favourite colour. */
    Preference: PreferenceDispatcher,
};