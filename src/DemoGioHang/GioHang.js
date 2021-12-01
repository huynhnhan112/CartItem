import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHang extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} alt="..." width={50} height={50} /></td>
                <td>{(spGH.giaBan).toLocaleString()}đ</td>
                <td>
                    <button className="btn btn-outline-primary mr-1" onClick={() => {
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            sanPhamClick: spGH.maSP,
                            soLuong: 1
                        }
                        this.props.dispatch(action);
                    }}>
                        +
                    </button>
                    {spGH.soLuong}
                    <button className="btn btn-outline-primary ml-1" onClick={() => {
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            sanPhamClick: spGH.maSP,
                            soLuong: -1
                        }
                        this.props.dispatch(action);
                    }}>
                        -
                    </button>
                </td>
                <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}đ</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={() => {
                        const action = {
                            type: 'XOA_GIO_HANG',
                            sanPhamClick: spGH.maSP
                        }
                        this.props.dispatch(action);
                    }}>Xóa</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container">
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Giá bán</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gioHang: rootReducer.gioHangReducer
    }
}

export default connect(mapStateToProps)(GioHang)
