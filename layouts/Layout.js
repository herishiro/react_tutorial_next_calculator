import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function layout(props) {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
					crossOrigin="anonymous"
				></link>
			</Head>
			<Header header={props.header} />
			<div className="container">
				<h3 className="my-3 text-primary text-center">{props.title}</h3>
				{props.children}
			</div>
			<Footer footer="copyright TAMA" />
		</div>
	);
}
