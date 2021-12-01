import React, { Component } from 'react'
import {connect} from 'react-redux'

class SanPham extends Component {
    render() {
        let {sanPham, xemChiTiet} = this.props; 
        return (
            <div className="card">
                <img className="w-100" src={sanPham.hinhAnh} height={350} alt="..." />
                <div className="card-body bg-dark text-white text-center">
                    <h3>{sanPham.tenSP}</h3>
                    <p>{(sanPham.giaBan).toLocaleString()}đ</p>
                    <button className="btn btn-outline-success mr-5" onClick={()=>{
                        const action = {
                            type: 'THEM_GIO_HANG',
                            sanPhamClick: sanPham
                        }
                        this.props.dispatch(action);
                    }}>Thêm giỏ hàng</button>
                    <button className="btn btn-outline-danger" onClick={()=>{
                        {xemChiTiet(sanPham)}
                    }}>
                        Xem chi tiết
                    </button>
                </div>
            </div>
        )
    }
}



export default connect()(SanPham)
