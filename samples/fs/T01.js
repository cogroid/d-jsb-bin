function __exec__(data) {
	var outputMap = util().newHashMap();
	var a = 0;
	if (data.input().containsKey('a')) {
		a = parseInt(data.input().get('a'));
	}
	a += 10;
	a = lang().newInteger(a);
	outputMap.put('a', a);
	data.output(outputMap);
}
