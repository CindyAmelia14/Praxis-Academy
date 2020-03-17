function f() {
    try {
        alert('Hai Cindy cantik disini');
        throw new Error("an error");
    } catch (e) {
        //...
        if("can't handle the error") {
            throw e;
        }
    } finally {
        alert('Terimakasih !')
    }
}

f();