import Layout from "../layouts/Layout";
import Calc from "../components/Calc";

export default function Calculator(params) {
	return (
		<div>
			<Layout header="Calc" title="calculator">
				<div className="text-center">
					<Calc />
				</div>
			</Layout>
		</div>
	);
}
