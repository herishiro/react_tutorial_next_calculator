import { useState } from "react";

const Persist = (ky, initVal) => {
	const key = "hooks:" + ky;
	const value = () => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initVal;
		} catch (error) {
			console.log(error);
			return initVal;
		}
	};
	const [savedValue, setSavedValue] = useState(value);
	const setValue = (val) => {
		try {
			setSavedValue(val);
			window.localStorage.setItem(key, JSON.stringify(val));
		} catch (error) {
			console.log(error);
		}
	};

	return [savedValue, setValue];
};

export default Persist;
