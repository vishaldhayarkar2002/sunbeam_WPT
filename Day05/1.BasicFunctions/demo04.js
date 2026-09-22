//parameterized
function f1(n1, n2) {
    console.log('Inside f1(n1,n2)')
}
// JS do not support function overloading imp
// paramterless
function f1() {
    console.log('Inside f1()')
}

f1()
f1(10, 20)

// Inside f1()
// Inside f1()