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

Copy [samples](https://github.com/cogroid/d-jsb-bin/tree/main/samples) folder to /storage/emulated/Download/jsb

```
int timeout = 60000;
String jsFile = "/storage/emulated/Download/jsb/Tests.js";
String inputFile = "/storage/emulated/Download/jsb/input.json";
String outputFile = "/storage/emulated/Download/jsb/output.json";

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

---
[Head icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/head)
