import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-track',
  templateUrl: './add-edit-track.component.html',
  styleUrls: ['./add-edit-track.component.css']
})
export class AddEditTrackComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() track:any;
  TrackId:string;
  TrackName:string;

  ngOnInit(): void {
    this.TrackId=this.track.TrackId;
    this.TrackName=this.track.TrackName;
  }

  addTrack(){
    var val = {TrackId:this.TrackId,
                TrackName:this.TrackName};
    this.service.addTrack(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTrack(){
    var val = {TrackId:this.TrackId,
      TrackName:this.TrackName};
    this.service.updateTrack(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
