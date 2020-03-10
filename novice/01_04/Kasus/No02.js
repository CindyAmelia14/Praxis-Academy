    var re = /[\w-]+@([\w-]+\.)+[\w-]+$/i;
    var rgname = /([^@]*)/;
    var rgtld = /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
function testInfo(answer) {
    var OK = re.exec(answer.value);
    var uname = rgname.exec(answer.value);
    var nametld = rgtld.exec(answer.value);
    if (!OK)
        alert(answer.value + ' Format email salah!');
    else {
        alert('Halo, username anda ' + uname[0] + ' domain anda adalah ' + nametld[0]);
    }
}