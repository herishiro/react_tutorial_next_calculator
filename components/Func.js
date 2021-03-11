export default {
	func: {
		tax1: {
			caption: "入力した金額から消費税10％を計算します。",
			function: "(...param)=> { return Math.floor(param[0] * 1.1)}",
		},
		tax2: {
			caption: "入力した金額から消費税8％を計算します。",
			function: "(...param)=> { return Math.floor(param[0] * 1.08)}",
		},
		total: {
			caption:
				"10,20,30...というようにカンマで区切った数字の合計を計算します。",
			function: `(...param)=> {
        let result = 0
        for (let i in param) {
          result += param[i] * 1
        }
        return result
      }
      `,
		},
		factorial: {
			caption: "ゼロから入力値までの合計を計算します。",
			function: `(...param)=> {
        let result = 0
        for (let i =0; i <= param[0]; i++) {
          result +=  1
        }
        return result
      }
      `,
		},
	},
};
