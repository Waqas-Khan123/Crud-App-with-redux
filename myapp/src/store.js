import { createStore } from "redux";
import rootReducer from "./components/root";

const store = createStore(rootReducer);

export default store;