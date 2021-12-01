
const gioHang = [
    // { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg", soLuong: 1 }
]


export const gioHangReducer = (state = gioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            const spGH = { ...action.sanPhamClick, soLuong: 1 };
            //Kiểm tra sản phẩm có trong giỏ hàng chưa
            let gioHangCapNhat = gioHang;

            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === spGH.maSP);
            if (spGioHang) {
                spGioHang.soLuong += 1;
            } else {
                gioHangCapNhat.push(spGH);
            }

            return [...gioHangCapNhat]
        }
        case 'XOA_GIO_HANG': {
            const gioHangCapNhat = state.filter(sp => sp.maSP !== action.sanPhamClick);

            return [...gioHangCapNhat]
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state];
            let spGH = gioHangCapNhat.find(sp => sp.maSP === action.sanPhamClick);

            if (spGH) {
                spGH.soLuong += action.soLuong;
                if (spGH.soLuong < 1) {
                    alert('Sản phẩm tối thiểu bằng 1');
                    spGH.soLuong -= action.soLuong;
                }
            }

            return [...gioHangCapNhat]
        }

        default: return state
    }
}
