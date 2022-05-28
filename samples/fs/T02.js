function __exec__(data) {
	var d = pkg('jsb.lang').newData();
	d.input('John');
	lang().thread('t1', d);
	
	d = lang().newData();
	d.input('Mai');
	lang().thread('t2', d);	
	
	data.output(data.input());
}

function t1(data) {
	pkg('jsb.log').info('Hello ' + data.input());
	lang().sleep(1000 * 2);
	log().info('Bye ' + data.input());	
}

function t2(data) {
	log().info('Chao ' + data.input());
	lang().sleep(1000 * 1);
	pkg('jsb.log').info('Tam biet ' + data.input());	
}