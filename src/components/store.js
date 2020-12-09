import { createStore } from 'redux';
import Resume from "./reducers";
let store = createStore(Resume);
export default store;