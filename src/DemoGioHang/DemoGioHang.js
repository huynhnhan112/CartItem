import React, { Component } from 'react'
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'
import {connect} from 'react-redux'

class DemoGioHang extends Component {

    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPham: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    }

    xemChiTiet = (sanPhamClick) => {
        this.setState({
            sanPham: sanPhamClick
        })
    }

    render() {
        let {sanPham} = this.state;

        return (
            <div className="container mt-3">
                <h3 className="text-center font-weight-bold text-success">Cart Items</h3>
                <div className="text-right mb-3">
                    <span style={{ cursor: 'pointer' }} className="text-danger font-weight-bold" data-toggle="modal" data-target="#modelId">
                        <i class="fas fa-shopping-cart mr-2"></i>
                        Cart ({
                            this.props.gioHang.reduce((tsl, spGH, index)=>{
                                return tsl += spGH.soLuong;
                            },0) 
                        } - {this.props.gioHang.reduce((tongTien, spGH, index)=>{
                            return tongTien += ((spGH.giaBan * spGH.soLuong))
                        },0).toLocaleString()}đ)
                    </span>
                </div>
                <GioHang />
                <DanhSachSanPham mangSanPham={this.dataPhone} xemChiTiet={this.xemChiTiet} />
                <div className="row mt-5">
                    <div className="col-4">
                        <h3 className="text-center">{sanPham.tenSP}</h3>
                        <img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} height={300} width={350} />
                    </div>
                    <div className="col-6">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{sanPham.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{sanPham.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{sanPham.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{sanPham.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{sanPham.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{sanPham.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return{
        gioHang: rootReducer.gioHangReducer
    }
}

export default connect(mapStateToProps)(DemoGioHang)