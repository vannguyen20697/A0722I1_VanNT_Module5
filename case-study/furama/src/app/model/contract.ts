import {Service} from "./service";
import {Customer} from "./customer";
import {Employee} from "./employee";

export interface Contract {
  id?: number;
  code?: string;
  employee?: Employee;
  customer?: Customer;
  service?: Service;
  ngayLamHopDong?: string;
  ngayKetThuc?: string;
  tienDatCoc?: number;
  tongTien?: number;
}
