[![cogroid.com](https://github.com/cogroid/resources/raw/main/images/banner/cogroid-48.png)](https://cogroid.com)

# Binaries of JSB - JavaScript Sandbox

### Release

[JSB 0.1](https://github.com/cogroid/d-jsb-bin/releases/download/jsb-0.1/jsb.jar)

[API documents](https://cogroid.com/api/jsb/)

### Maven

```
        <dependency>
            <groupId>com.cogroid.jsb</groupId>
            <artifactId>jsb</artifactId>
            <version>0.1</version>
            <scope>system</scope>
            <systemPath>${project.basedir}/lib/jsb.jar</systemPath>
        </dependency>
```

### How to use

Copy [samples](https://github.com/cogroid/d-jsb-bin/tree/main/samples) folder to /storage/emulated/0/Download/jsb

```
int timeout = 60000;
String jsFile = "/storage/emulated/0/Download/jsb/Tests.js";
String inputFile = "/storage/emulated/0/Download/jsb/input.json";
String outputFile = "/storage/emulated/0/Download/jsb/output.json";

com.cogroid.jsb.SBRun sbRun = new com.cogroid.jsb.SBRun();
sbRun.exec(jsFile, timeout, inputFile, outputFile);

```

### Tests.js

```
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
```

### fs/T01.js

```
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
```

### fs/T03.js

```
function __exec__(data) {
	var f = mnt().newFile('/T01.js');
	var js = lang().newString(f.readFile(), 'UTF-8');
	log().info(js);
}
```

### base.js

base.js is added to javascript file when it is executed.

```
var STARO = undefined;

function prepare(data) {
	if (STARO == undefined) {
	    STARO = data.store()
	}
}

function getInteger(name, defval) {
    return parseInt(get(name, defval));
}

function getFloat(name, defval) {
    return parseFloat(get(name, defval));
}

function getDouble(name, defval) {
    return parseDouble(get(name, defval));
}

function get(name, defval) {
    return STARO.get(name, defval);
}

function set(name, value) {
    STARO.set(name, value);
}

function install(path) {
    return STARO.machine().install(path);
}

function cfg() {
    return STARO.machine().cfg();
}

function imp() {
    return STARO.machine().imp();
}

function imp(ns) {
    return STARO.machine().imp(ns);
}

function mch() {
    return STARO.machine();
}

function mnt() {
    return STARO.machine().mnt();
}

function pkg(ns) {
    return STARO.machine().pkg(ns);
}

function mod(ns) {
    return STARO.machine().mod(ns);
}

function lang() {
    return STARO.machine().lang();
}

function io() {
    return STARO.machine().io();
}

function log() {
    return STARO.machine().log();
}

function net() {
    return STARO.machine().net();
}

function text() {
    return STARO.machine().text();
}

function tool() {
    return STARO.machine().tool();
}

function util() {
    return STARO.machine().util();
}

function __set__(data) {
	prepare(data);
	var key = data.input().get("name").toString();
	var val = data.input().get("value");
	set(key, val);
}

function __get__(data) {
	prepare(data);
	var key = data.input().get("name").toString();
	var defval = data.input().get("defval");
	data.output(get(key, defval));
}
```

---
[Head icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/head)
