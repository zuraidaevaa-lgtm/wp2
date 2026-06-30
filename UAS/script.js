//=================== NOMOR 2 =================
// Event pada button untuk mengubah warna div menjadi biru
const button = document.getElementById("btnUbah");
const boxDiv = document.getElementById("boxDiv");

button.addEventListener("click", function () {
    boxDiv.style.backgroundColor = "blue";
    boxDiv.style.color = "white";
});

// ================= NOMOR 3 =================
// Menambah elemen dan atribut menggunakan JavaScript
function tambahElemen() {
    const elemenBaru = document.createElement("p");
    elemenBaru.innerHTML = "Elemen ini ditambahkan menggunakan JavaScript";
    elemenBaru.setAttribute("class", "elemen");

    document.getElementById("container").appendChild(elemenBaru);
}

// ================= NOMOR 4 =================
// Function hitung dengan 3 parameter
function hitung(operasi, a, b) {
    if (operasi === "tambah") {
        return a + b;
    } else if (operasi === "kurang") {
        return a - b;
    } else if (operasi === "kali") {
        return a * b;
    } else if (operasi === "bagi") {
        return b !== 0 ? a / b : "Tidak bisa dibagi 0";
    }
}

function prosesHitung() {
    const a = parseFloat(document.getElementById("angkaA").value);
    const b = parseFloat(document.getElementById("angkaB").value);
    const operasi = document.getElementById("operasi").value;

    const hasil = hitung(operasi, a, b);
    document.getElementById("hasil").innerText = "Hasil: " + hasil;
}