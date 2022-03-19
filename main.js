//bài tập 1: quản lý tuyển sinh
document.getElementById("btnKetQuaTS").onclick = function (){
    var  diem_chuan= document.getElementById("diemChuan").value*1;
    var diem_mon_1 = document.getElementById("diem1").value*1;
    var diem_mon_2 = document.getElementById("diem2").value*1;
    var diem_mon_3 = document.getElementById("diem3").value*1;
    var kv= document.getElementById("diemKhuVuc").value;
    var dt = document.getElementById("diemDoiTuong").value*1;    
    diem_tong_ket(diem_mon_1, diem_mon_2, diem_mon_3, kv, dt, diem_chuan);
}
function diem_khu_vuc(diem) {
  if (diem === "X") return 0;
  if (diem === "A") return 2;
  if (diem === "B") return 1.5;
  if (diem === "C") return 1;
}

function diem_doi_tuong(diem) {
  if (diem === 1) return 2.5;
  if (diem === 2) return 1.5;
  if (diem === 3) return 1;
  if (diem === 0) return 0;
}
function diem_tong_ket(a, b, c, kv, dt, dc) {
  if (a > 0 && b > 0 && c > 0) {
    var diem = a + b + c + diem_khu_vuc(kv) + diem_doi_tuong(dt);
    if (diem >= dc) {
      console.log("Trung tuyen");
      document.getElementById("footerkQ").innerText="điểm tổng" + diem + " Trung tuyen";
    } else {
      console.log("Khong trung tuyen");
      document.getElementById("footerkQ").innerText="điểm tổng" + diem + " Khong Trung tuyen";
    }
  } else {
    console.log("Khong trung tuyen");
  }
}
 



//bài tập 2: 


const KW = 500;
const KW_50 = 650;
const KW_100 = 850;
const KW_200 = 1100;
const KW_PLUS = 1300;
const BILL_50 = 50*KW;
const BILL_100 = BILL_50 + 50*KW_50;
const BILL_200 = BILL_100 + 100*KW_100;
const BILL_PLUS = BILL_200 + 150*KW_200;

document.getElementById("btnTinhTien").onclick = function (){
    var nhapTen = document.getElementById("txtTen").value;
    var nhapSoKw = document.getElementById("txtSoKW").value*1;
    inHoaDon (nhapTen, nhapSoKw);
}


const formatVND = new Intl.NumberFormat('vn-VN').format
function formatD9 (money) { return money.tolocaleString('it-IT',{Sstyle : 'currency', currency : 'VND'})}

function donGiaPhaiTra (kw) {
    let result;
    if (kw >0 && kw < 51) result = kw * KW;
    else if (kw >50 && kw <101) result = (kw - 50)*KW_50 + BILL_50;
    else if (kw >100 && kw <201) result = (kw -100)*KW_100 + BILL_100;
    else if (kw >200 && kw < 351) result = (kw -200)*KW_200 + BILL_200;
    else if (kw >350) result = (kw -350)*KW_PLUS +BILL_PLUS;
    else result ="vui lòng nhập lại đúng số KW"
    return result;

};

function inHoaDon (ten, kw) {
    document.getElementById("footerkQ2").innerText = "Hóa đơn của " + ten + " với số kw" + kw +" là " + formatVND(donGiaPhaiTra(kw));
}