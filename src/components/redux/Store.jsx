import { legacy_createStore as createStore } from "redux";
import rootred from "./reducers/Main";

const store = createStore(
    rootred
)

export default store