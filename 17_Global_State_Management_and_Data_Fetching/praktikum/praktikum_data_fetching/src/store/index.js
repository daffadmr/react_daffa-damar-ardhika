import { configureStore} from "@reduxjs/toolkit";
import rootReducer from "./features";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export { store };

export default store;