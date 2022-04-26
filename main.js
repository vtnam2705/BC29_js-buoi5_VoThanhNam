// fucntion lấy DOM thẻ ID
var getID = function (id) {
    return document.getElementById(id);
};

var currentFormat = new Intl.NumberFormat("vn-VN");

// Bài tập 1

var diemTongKet = 0;

document.getElementById("btn-result").onclick = function () {
    var mon1 = parseFloat(getID("txtMon1").value);
    var mon2 = parseFloat(getID("txtMon2").value);
    var mon3 = parseFloat(getID("txtMon3").value);
    var khuVuc = parseFloat(getID("selectKhuVuc").value);
    var doiTuong = parseFloat(getID("selectDoiTuong").value);
    var diemChuan = getID("txtDiemChuan").value;

    diemTongKet = mon1 + mon2 + mon3 + khuVuc + doiTuong;

    if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
        var inKetQua = getID("result").innerHTML = "Không đủ điểu kiện vì có môn 0 điểm !!!";
        getID("result").classList.add("alert-danger");
    } else if (diemTongKet >= diemChuan) {
        var inKetQua = getID("result").innerHTML = `Chúc mừng bạn!! Điểm của bạn: ${diemTongKet}`;
        getID("result").classList.add("alert-success");
    } else if (diemTongKet < diemChuan) {
        var inKetQua = getID("result").innerHTML = "Chúc bạn may mắn lần sau !!!";
        getID("result").classList.add("alert-warning");
    }
}

// *********************************************************************************************
// Bài tập 2
// Công thức
/*
    + Nếu soDien <= 50 => tongTien = soDien * kw_1;

    + Nếu 50 < soDien <= 100 => tongTien = (soDien - 50) * kw_2 + 50 * kw_1;

    + Nếu 100 < soDien <= 200 => tongTien = 50 * kw_1 + 50 * kw_2 + (soDien - 50 - 50) * kw_3

    + Nếu 200 < soDien <= 350 => tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soDien - 50 - 50 - 100) * kw_4;

    + Nếu soDien > 350 => tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (soDien -50 -50 -100 -150) * kw_5;
*/
const kw_1 = 500;
const kw_2 = 650;
const kw_3 = 850;
const kw_4 = 1100;
const kw_5 = 1300;


document.getElementById("btn-console").onclick = function () {
    var tenKhachHang = getID("txtKhachHang").value;
    var soDien = getID("txtSoDien").value;
    var tongTien = 0;

    if (soDien <= 50) {
        tongTien = soDien * kw_1;
        console.log(tongTien);
    } else if (soDien > 50 && soDien <= 100) {
        tongTien = (soDien - 50) * kw_2 + 50 * kw_1;
    } else if (soDien > 100 && soDien <= 200) {
        tongTien = 50 * kw_1 + 50 * kw_2 + (soDien - 50 - 50) * kw_3;
    } else if (soDien > 200 && soDien <= 350) {
        tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soDien - 50 - 50 - 100) * kw_4;
    } else if (soDien > 350) {
        tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (soDien - 50 - 50 - 100 - 150) * kw_5;
    }

    var inHoaDon = getID("ketQua").innerHTML = `Tên khách hàng: ${tenKhachHang} <br> Tổng tiền: ${currentFormat.format(tongTien)} VND`;

    document.getElementById("ketQua").classList.add("alert-success");
}


// Bài tập thêm 1 - Tính thuế thu nhập cá nhân
/*
    Thu nhập chịu thuế (A)
    Tông thu nhập năm (B)
    Số người phụ thuộc (C)
    Thuế thu nhập (T)

*/
const a = 4e+6;
const b = 1.6e+6;

const tn60 = 6e+7;
const tn120 = 12e+7;
const tn210 = 21e+7;
const tn384 = 384e+6;
const tn624 = 624e+6;
const tn960 = 960e+6;

const thue5 = 5 / 100;
const thue10 = 10 / 100;
const thue15 = 15 / 100;
const thue20 = 20 / 100;
const thue25 = 25 / 100;
const thue30 = 30 / 100;
const thue35 = 35 / 100;

getID("btn-ketqua").onclick = function () {
    var T = 0;
    var A = 0;
    var hoTen = getID("txtHoTen").value;
    var B = getID("txtThuNhap").value;
    var C = getID("txtPhuThuoc").value;

    // Công thức tính thu nhập chịu thuế
    A = B - a - C * b;

    // Phép logic để tính Thuế thu nhập (T)
    if (A <= tn60) {
        T = A * thue5;
    } else if (A > tn60 && A <= tn120) {
        T = A * thue10;
    } else if (A > tn120 && A <= tn210) {
        T = A * thue15;
    } else if (A > tn210 && A <= tn384) {
        T = A * thue20;
    } else if (A > tn384 && A <= tn624) {
        T = A * thue25;
    } else if (A > tn624 && A <= tn960) {
        T = A * thue30;
    } else if (A > tn960) {
        T = A * thue35;
    }

    // In số tiền thuế phải trả 
    var inThue = getID("inKetQua").innerHTML = `Thuế thu nhập cá nhân ${hoTen}: ${currentFormat.format(T)} VND`;
    getID("inKetQua").classList.add("alert-success");
}

// Bài tập thêm 2: Tính tiền cáp
/*
    - Phí xử lý hóa đơn: A
    - Phí dịch vụ cơ bản: B
    - Thuê kênh cao cấp: C
    - Số kênh cao cấp: D
*/
const hoaDonND = 45 / 10;
const cobanND = 205 / 10;
const kenhND = 75 / 10;

const hoadonDN = 15;
const cobanDN_75 = 75;
const cobanDN_5 = 5;
const kenhDN = 50;

function changeStatus() {
    var status = getID("selectKhachHang");

    if (status.value == "DN") {
        getID("appear").style.visibility = "visible";
    } else {
        getID("appear").style.visibility = "hidden";
    }
}

getID("btn-hoadon").onclick = function () {
    var maKhachHang = getID("maKhachHang").value;
    var soKenh = getID("soKenh").value;
    var ketNoi = getID("soKetNoi").value;

    var tongTienCap = 0;
    var khachHang = getID("selectKhachHang");
    var inBill = getID("inHoaDon");

    // In hóa đơn khi khách hàng là "Nhà dân"
    if (khachHang.value == "ND") {
        tongTienCap = hoaDonND + cobanND + soKenh * kenhND;
        inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Tổng tiền: $${tongTienCap}`
    }

    // In hóa đơn khi khách hàng là "Doanh nghiệp"
    if (khachHang.value == "DN") {
        if (ketNoi <= 10) {
            tongTienCap = hoadonDN + cobanDN_75 + soKenh * kenhDN;
            inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Số kết nối: ${ketNoi} <br> Tổng tiền: $${tongTienCap}`;
        } else {
            tongTienCap = hoadonDN + (ketNoi - 10) * cobanDN_5 + cobanDN_75 + soKenh * kenhDN;
            inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Số kết nối: ${ketNoi} <br> Tổng tiền: $${tongTienCap}`;
        }
    }
}