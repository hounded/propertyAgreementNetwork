import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HyperledgerService} from '../shared/services/hyperledger.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PropertiesComponent implements OnInit {
  closeResult: string;
  listPropertyData: any;
  currentParticipant: string;
  properties: any;

  constructor(private modalService: NgbModal, private hyperledgerService: HyperledgerService ) {
    this.listPropertyData = {};
  }

  ngOnInit() {
    this.hyperledgerService.getCurrentParticipant().subscribe((res: any) => {
      this.currentParticipant = res.participant;
      this.hyperledgerService.getProperties(this.currentParticipant).subscribe( (properties) => {
        console.log(properties);
        this.properties = properties;
      });
    });
  }

  openListPropertyModal(content: any) {
    this.modalService.open(content).result.then((result) => {
      if (result === 'CREATE') {
        console.log(this.listPropertyData);
        this.hyperledgerService.createProperty(this.listPropertyData.ct,
          this.listPropertyData.address,
          this.listPropertyData.estate,
          this.listPropertyData.legalDescription,
          this.listPropertyData.area,
          this.listPropertyData.lotFlatUnit,
          this.listPropertyData.dp,
          'resource:' + this.currentParticipant).subscribe( (status) => {
            console.log(status);
        });
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
