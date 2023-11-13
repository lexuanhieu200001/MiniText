//bai1
/*let num=+prompt('number?');
let pow = Math.pow(num,2);
document.write('Bình phương của number =' + pow);

//bai2
/*function onepiece2() {
    let nhapso1 = +document.getElementById('nhapso1').value;
    let nhapso2 = +document.getElementById('nhapso2').value;
    ketqua = nhapso1 * nhapso2
    document.getElementById('ketqua').innerText = ketqua;
}
//bai3 a
/*function onepiece3() {
    let nhapa = +document.getElementById('nhapa').value;
    chuvi = nhapa * 4;
    document.getElementById('chuvi').innerText = chuvi;
    dientich = nhapa * nhapa;
    document.getElementById('dientich').innerText = dientich;
    document.getElementById('canha').innerText = nhapa;
}

 */
//bai3 b
/*function onepiece4(){
let nhapvaoa=+document.getElementById('nhapvaoa').value;
let nhapvaob=+document.getElementById('nhapvaob').value;

    let pow = Math.pow(nhapvaoa,2);
    document.write('Bình phương của number a =' + pow);
    let pow2 = Math.pow(nhapvaoa, nhapvaob)
    document.write('Bình phương của number ab=' + pow2);
}*/

//bai3 c
/*function onepiece5() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n1 = b-a+1
    let n2= a-b+1
    if (b>a) {
        let tonggiatri = (n1 * (a + b)) / 2;
        document.getElementById("ab").innerText = tonggiatri;
    }else{
        let tonggiatri = (n2 * (a + b)) / 2;
        document.getElementById("ab").innerText = tonggiatri;
    }
} */
//bai3 d
/*function onepiece6(){
    let year = +document.getElementById('year').value;
    let theky = year/100
    document.getElementById('theky').innerText=("thế kỷ = "+ theky);
} */
//bai3 e
function onepiece7() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    if (a + b > c || b + c > a || a + c > b) {
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            document.getElementById('tamgiac').innerText=('tam giac vuong');
        } else if (a == b && b == c && a == c) {
            document.getElementById('tamgiac').innerText=('tam giac deu');
        } else if (a == b || b == c || c == a) {
            document.getElementById('tamgiac').innerText=('tam giac can');
        } else {
            document.getElementById('tamgiac').innerText=('day la hinh giac');
        }
    } else {
        document.getElementById('tamgiac').innerText=('khong phai la hinh tam giac');
    }
}