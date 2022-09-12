let nama = "Ridwan"
var jabatan = "Manager"
var statusPernikahan = "Menikah"

// perhitungan kategori gaji
if (jabatan == "Manager") {
    gajiPokok = 15000000
} else if (jabatan == "Asisten Manager") {
    gajiPokok = 10000000
} else {
    gajiPokok = 5000000
}

// perhitungan tunjangan
const tunjangan = 15/100
var tunjanganJabatan = gajiPokok * tunjangan

// perhitungan BPJS
const bpjs = 10/100
var bpjsJabatan = gajiPokok * bpjs

//tunjangan keluarga
if (statusPernikahan == "Menikah") {
    const tunjangan = 20/100
    var tunjanganKeluarga = gajiPokok * tunjangan
} else {
    var tunjanganKeluarga = 0
}

// gaji bersih
var gajiBersih = gajiPokok+tunjanganJabatan+tunjanganKeluarga+bpjsJabatan