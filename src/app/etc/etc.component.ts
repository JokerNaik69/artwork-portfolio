import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EtcService } from '../etc.service';
import { ImageID } from '../image';

@Component({
  selector: 'app-etc',
  templateUrl: './etc.component.html',
  styleUrls: ['./etc.component.css']
})
export class EtcComponent implements OnInit {
  public etcList = [];
  public selectedWork: ImageID;
  public selectedImage: string;
  
  @Output() public childEvent = new EventEmitter();

  constructor(private _service: EtcService) { }

  ngOnInit() {
    this._service.getEtc().subscribe(data => this.etcList = data);
  }
  
  selectEtc(member: ImageID) {
    this.selectedWork = member;
    this.selectedImage = "./assets/images/Etc/etc_" + this.selectedWork.id + ".jpg";
  }
}
