import BaiTapDatGheXemPhim from "../../BaiTapDatGheXemPhim/BaiTapDatGheXemPhim";
import { HUY_GHE } from "../types/BaiTapDatVeType";

const initialState = {
    danhSachGheDangDat: []
}
export const baiTapDatGheXemPhim = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state }
        }

        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state }
        }
        default: return { ...state }
    }
}

