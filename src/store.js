import { legacy_createStore as createStore } from "redux";
import rootReducer from "./redux/reducer/rootReducer";

const storeObject = createStore(rootReducer)

export default storeObject