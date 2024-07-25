function delay(sec) {
    let start = Date.now();
    let x = true
    while(x) {
        let current = Date.now();
        if(current - start >= sec * 1000) {
            console.log("Hi")
            x = false
        }
    }
}
// delay(10)
