import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPham extends Component {
    render() {
        let { sanPham, xemChiTiet } = this.props;
        return (
            <div className="card">
                <img className="w-100" src={sanPham.hinhAnh} height={350} alt="..." />
                <div className="card-body bg-dark text-white text-center">
                    <h3>{sanPham.tenSP}</h3>
                    <p>{(sanPham.giaBan).toLocaleString()}đ</p>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <button className="btn btn-outline-success w-100" onClick={() => {
                                const action = {
                                    type: 'THEM_GIO_HANG',
                                    sanPhamClick: sanPham
                                }
                                this.props.dispatch(action);
                            }}>
                                Add Cart
                            </button>
                        </div>
                        <div className="col-md-6 col-sm-12 col-lg-6">
                            <button className="btn btn-outline-danger w-100" onClick={() => {
                                { xemChiTiet(sanPham) }
                            }}>
                                View Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default connect()(SanPham)
