function tambah(){
    var frm = document.getElementById('calcForm')
    var a1 = parseFloat(frm.angka1.value)
    var a2 = parseFloat(frm.angka2.value)
    switch (true) {
        case isNaN(a1) || isNaN(a2):
            alert("Harap masukkan angka!!")
            break;
    
        default:
            var total = a1 + a2
            frm.hasil.value = total
            break;
    }
}

function kurang(){
    var frm = document.getElementById('calcForm')
    var a1 = parseFloat(frm.angka1.value)
    var a2 = parseFloat(frm.angka2.value)
    
    switch (true) {
        case isNaN(a1) || isNaN(a2):
            alert("Harap masukkan angka!!")
            break;
    
        default:
            var total = a1 - a2
            frm.hasil.value = total
            break;
    }
}

function kali() {
    var frm = document.getElementById('calcForm')
    var a1 = parseFloat(frm.angka1.value)
    var a2 = parseFloat(frm.angka2.value)
    
    switch (true) {
        case isNaN(a1) || isNaN(a2):
            alert("Harap masukkan angka!!")
            break;
    
        default:
            var total = a1 * a2
            frm.hasil.value = total
            break;
    }
}

function bagi() {
    var frm = document.getElementById('calcForm')
    var a1 = parseFloat(frm.angka1.value)
    var a2 = parseFloat(frm.angka2.value)
    
    switch (true) {
        case isNaN(a1) || isNaN(a2):
            alert("Harap masukkan angka!!")
            break;
    
        default:
            var total = a1 / a2
            frm.hasil.value = total
            break;
    }
}

function pangkat(){
    var frm = document.getElementById('calcForm')
    var a1 = parseFloat(frm.angka1.value)
    var a2 = parseFloat(frm.angka2.value)

    switch (true) {
        case isNaN(a1) || isNaN(a2):
            alert("Harap masukkan angka!!")
            break;
    
        default:
            var total = Math.pow(a1,a2)
            frm.hasil.value = total
            break;
    }
}
