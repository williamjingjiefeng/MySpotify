
import { Reducer, Action, Store } from "redux";
import { store } from "../../index";

/**
 * Helper class to make action dispatchers (self-dispatching action creator) and also reducers.
 */
export class DispatchBuilder<TState> {

    /** 
     * Initial text of all action types made by this builder.
     * This helps generate unique action types across the application.
     * The name of the state slice is a good suggestion.
     */
    private actionNamePrefix: string;

    /** The default value of this slice of the state */
    private defaultState: TState;

    /**
     * All the actions that have been created by this builder. Used to make a reducer.
     * The key is the action type.
     * The value is a reducer function that supports that particular action.
     * This can't be strongly typed, because each action potentially has a different payload type.
     */
    private actionReducers: Map<string, Reducer<TState, ActionWithPayload<any>>>;

    constructor(actionNamePrefix: string, defaultState: TState) {
        this.actionNamePrefix = actionNamePrefix;
        this.defaultState = defaultState;
        this.actionReducers = new Map<string, Reducer<TState, ActionWithPayload<any>>>();
    }

    /**
     * Registers a new action. Returns a function which dispatches this action.
     * @param actionName human-readable name for this action. Must be unique across this DispatchBuilder. For diagnostics (Redux debug) only.
     * @param reducer The reducer function for this particular action. 
     */
    AddAction<TPayload>(actionName: string, reducer: (originalState: TState, payload: TPayload) => TState): (payload: TPayload) => void {

        const actionType = `${this.actionNamePrefix} ${actionName}`;

        // full reducer for just this action
        const fullReducer: Reducer<TState, ActionWithPayload<TPayload>> = (state: TState | undefined, action: ActionWithPayload<TPayload>) => {

            const payload = action.Payload;
            const newState = reducer(state ?? this.defaultState, payload);
            return newState;
        }

        // save it!
        this.actionReducers.set(actionType, fullReducer);

        // action dispatcher = self-dispatching action creator
        const actionDispatcher: (payload: TPayload) => void = (payload) => {

            const action: ActionWithPayload<TPayload> = {
                type: actionType,
                Payload: payload,
            };

            const appStore = store as Store;
            appStore.dispatch(action);
        };

        return actionDispatcher;
    }

    /**
     * Makes a reducer that supports all the actions that have been defined so far.
     */
    MakeReducer(): Reducer<TState, ActionWithPayload<any>> {

        const combinedReducer: Reducer<TState, ActionWithPayload<any>> = (state: TState | undefined, action: ActionWithPayload<any>) => {

            const reducerForThisAction = this.actionReducers.get(action.type);

            // skip actions from a different state slice
            if (!reducerForThisAction) return state ?? this.defaultState;

            const newState = reducerForThisAction(state, action);
            return newState;
        }

        return combinedReducer;
    }
}

/**
 * Generic Action interface used by DispatchBuilder.
 */
interface ActionWithPayload<TPayload> extends Action<string> {

    /** The payload included in this action. */
    Payload: TPayload;
}