import {Status} from './status';

export interface Product1 {
  id?: number;
  productNo?: string;
  productName?: string;
  productPrice?: number;
  productDay?: string;
  productEnd?: string;
  productDescription?: string;
  status?: Status;
}
