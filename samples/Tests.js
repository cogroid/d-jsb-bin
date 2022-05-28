function __exec__(data) {
	runTestWithInput('/T01.js', data.input());
	runTestWithInput('/T02.js', data.input());
	runTestWithInput('/T03.js', data.input());
}

function runTestWithInput(testFile, inputMap) {
	log().info('===== ' + testFile + ' =====');
	var outputMap = mch().exec(testFile, 60000, inputMap);
	log().info('Result: ' + tool().toJson(outputMap));
}
