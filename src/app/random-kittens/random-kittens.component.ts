import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ImageID } from '../image';
import { RandomKittenService } from '../random-kitten.service';

@Component({
  selector: 'app-random-kittens',
  templateUrl: './random-kittens.component.html',
  styleUrls: ['./random-kittens.component.css']
})
export class RandomKittensComponent implements OnInit {

  public randomKittensList = [];
  public selectedWork: ImageID;
  public selectedImage: string;
  
  @Output() public childEvent = new EventEmitter();

  constructor(private _service: RandomKittenService) { }

  ngOnInit() {
    this._service.getKittens().subscribe(data => this.randomKittensList = data);
  }
  selectKitten(member: ImageID) {
    this.selectedWork = member;
    this.selectedImage = "./assets/images/Random Kittens/random_kitten_" + this.selectedWork.id + ".jpg";
  }
}
