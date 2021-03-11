import React, { useState, useEffect } from "react";
import usePersist from "./Persist";

export default function Calc(props) {
	const [message, setMessage] = useState("");
	const [input, setInput] = useState("");
	const [data, setData] = usePersist("calc-history", []);
	const [func, setFunc] = useState({ func: {} });

	const fetchFunc = (address) => {
		return fetch(address).then((res) => res.json());
	};

	useEffect(() => {
		fetchFunc("/api/func").then((json) => {
			setFunc(json);
		});
	}, [data]);

	const onChange = (event) => {
		setInput(event.target.value);
	};

	const onKeyPress = (event) => {
		if (event.key !== "Enter") {
			return;
		}
		onEnterPress(event);
	};

	const onEnterPress = (event) => {
		const answer = eval(input);
		setMessage(answer);
		data.unshift(input + " = " + answer);
		setData(data);
		setInput("");
	};

	const clear = (event) => {
		setData([]);
		setMessage("history was cleaned up!");
	};

	const executeFunc = (event) => {
		const arr = input.split(",");
		const fid = event.target.id;
		const f = func.func[fid];
		const fe = eval(f.function);
		const answer = fe(arr);
		setMessage(answer);
		data.unshift(input + " = " + answer);
		setData(data);
		setInput("");
	};
	return (
		<div>
			<div className="alert alert-primary">
				<h5>Result: {message}</h5>
				<div className="form-group">
					<input
						type="text"
						value={input}
						className="form-control"
						onChange={onChange}
						onKeyPress={onKeyPress}
					/>
				</div>
				{Object.entries(func.func).map((val, key) => {
					return (
						<button
							className="btn btn-secondary m-1"
							key={key}
							title={val[1].caption}
							id={val[0]}
							onClick={executeFunc}
						>
							{val[0]}
						</button>
					);
				})}
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>History:</th>
					</tr>
				</thead>
				<tbody>
					{data.map((val, key) => (
						<tr key={key}>
							<td>{val}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={clear} className="btn btn-warning">
				Clear History
			</button>
		</div>
	);
}
