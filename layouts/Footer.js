import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Footer(props) {
	return (
		<div className="text-center h6 my-4">
			<div>{props.footer}</div>
		</div>
	);
}
