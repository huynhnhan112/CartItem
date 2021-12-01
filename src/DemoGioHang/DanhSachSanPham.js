import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {

    renderSanPham = () => {
        let {xemChiTiet} = this.props;
        return this.props.mangSanPham.map((sanPham, index)=>{
            return <div className="col-md-6 col-lg-4" key={index}>
                <SanPham sanPham={sanPham} xemChiTiet={xemChiTiet} />
            </div>
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
