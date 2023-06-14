import {RentalType} from './RentalType';

export interface Service {
  id?: number;
  idService?: string;
  nameService?: string;
  dienTichService?: number;
  soTangService?: number;
  soNguoiToiDa?: number;
  chiPhiThue?: number;
  rentalType?: RentalType;
  trangThai?: string;
}
