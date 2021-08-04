// Use CommonJS require below so we can dynamically import during build-time.
import { Store } from "redux";
import { IAppState } from "./AppState";

let configureStore: (state?: IAppState) => Store<IAppState>;

if (process.env.NODE_ENV === "production") {
    configureStore = require("./configureStore.prod").default;
} else {
    configureStore = require("./configureStore.dev").default;
}

export default configureStore;