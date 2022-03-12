import React, { Component } from 'react'
import styleCss from './BaiTapBookingTicket.css'
import { connect } from 'react-redux'

import { huyGheAction } from '../redux/actions/BaiTapDatVeAction'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-3 ' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    {/* ghế đã đặt */}
                    <button className='gheDuocChon' ></button>
                    <span className='text-light'>Ghế đã đặt</span>

                    <br></br>
                    <button className='gheDangChon' ></button>
                    <span className='text-light'>Ghế đang đặt</span>
                    <br></br>
                    <button className='ghe' ></button>
                    <span className='text-light'>Ghế trống</span>
                </div >

                <div>
                    <table className="table mt-3 " border='2'>
                        <thead className='text-light'>
                            <tr>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>
                                    <td><button onClick={() => { this.props.dispatch(huyGheAction(gheDangDat.soGhe)) }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot className='text-light'>
                            <tr>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia
                                }, 0)}</td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.baiTapDatGheXemPhim.danhSachGheDangDat
    }
}


export default connect(mapStateToProps)(ThongTinDatGhe)