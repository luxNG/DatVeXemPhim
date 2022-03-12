// State bắt buộc phải có default trc 
const stateDefault = {
    banChon: true,//true là tài false là xỉu
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucSac: [
        { soDiem: 1, img: './img/gameXucSac/1.png' },
        { soDiem: 2, img: './img/gameXucSac/2.png' },
        { soDiem: 3, img: './img/gameXucSac/3.png' }
    ]
}

export const baiTapGameXucSacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state }
        }

        case 'PLAY_GAME': {
            // Tạo ra mảng xúc sắc ngẫu nhiên
            let mangXucSacNN = [];
            // Thực hiện random 3 lần => tạo ra object ngẫu nhiên
            for (let i = 1; i <= 3; i++) {
                // Mỗi lần lập tạo ra 1 số ngẫu nhiên
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                // Từ số ngẫu nhiên tạo ra object xúc sắc ngẫu nhiên
                let xsnn = { soDiem: soNgauNhien, img: `./img/gameXucSac/${soNgauNhien}.png` };
                // Thêm vào mảng xúc sắc ngẫu nhiên
                mangXucSacNN.push(xsnn);
            }
            // Cập nhật lại state.mangXucSac = mang ngau nhien
            state.mangXucSac = mangXucSacNN;
            // Chạy reduce hoặc for tính điểm
            let tongDiem = state.mangXucSac.reduce((diem, xx, index) => {
                return diem += xx.soDiem
            }, 0);
            if ((tongDiem <= 11 && state.banChon === false) || (tongDiem > 11 && state.banChon === true)) {
                // Nếu thắng thì cộng state bàn thắng
                state.soBanThang += 1;
            }
            // Cập nhật số bàn chơi
            state.tongSoBanChoi += 1;
            return { ...state }
        }
        default: return state
    }
}