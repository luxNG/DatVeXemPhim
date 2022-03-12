import React, { Component, Fragment } from 'react'
import style from './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGhe from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'
export default class BaiTapDatGheXemPhim extends Component {

    renderHangGhe = () => {
        return danhSachGhe.map((ghe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={ghe} soHangGhe={index}></HangGhe>
            </div>
        })
    }


    render() {
        return (
            <div className={`${style}`} style={{ position: 'fixed', backgroundImage: 'url(./img/bgmovie.jpg)', width: '100vw', height: '100vh', backgroundPosition: 'center' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8'>
                                <h1 style={{ color: 'white' }}>Bài tập đặt vé xem phim</h1>
                                <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    {/* <div className='screen'></div> */}
                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className='col-4 text-center'>
                                <h2 className='text-light'>Chọn ghế</h2>
                                <ThongTinDatGhe></ThongTinDatGhe>
                            </div>
                        </div>
                    </div>
                    {/* <DienThongTin></DienThongTin>
                    <ChonGhe></ChonGhe>
                    <ConfirmInfo></ConfirmInfo> */}
                </div>
            </div>
        )
    }
}
