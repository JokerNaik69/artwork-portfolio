import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommissionsService } from '../commissions.service';
import { ImageID } from '../image';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent implements OnInit {
  
  public commissionsList = [];
  public selectedWork: ImageID;
  public selectedImage: string;
  
  @Output() public childEvent = new EventEmitter();

  constructor(private _service: CommissionsService) { }

  ngOnInit() {
    this._service.getCommissions().subscribe(data => this.commissionsList = data);
  }
  selectCommission(member: ImageID) {
    this.selectedWork = member;
    this.selectedImage = "src/app/assets/images/Commissioned/commissions_" + this.selectedWork.id + ".jpg";
  }
}
