function __exec__(data) {
	var f = mnt().newFile('/T01.js');
	var js = lang().newString(f.readFile(), 'UTF-8');
	log().info(js);
}
