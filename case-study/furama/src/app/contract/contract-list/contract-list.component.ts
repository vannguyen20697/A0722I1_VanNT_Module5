import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[];
  contract: Contract;
  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAllContract();
  }

  private getAllContract() {
    this.contractService.findAll().subscribe(next => {
      this.contracts = next;
    });
  }
}
