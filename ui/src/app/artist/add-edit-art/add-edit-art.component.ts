import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-art',
  templateUrl: './add-edit-art.component.html',
  styleUrls: ['./add-edit-art.component.css']
})
export class AddEditArtistComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() art:any;
  ArtistId:string;
  ArtistName:string;

  ngOnInit(): void {
    this.ArtistId=this.art.ArtistId;
    this.ArtistName=this.art.ArtistName;
  }

  addArtist(){
    var val = {ArtistId:this.ArtistId,
                ArtistName:this.ArtistName};
    this.service.addArtist(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateArtist(){
    var val = {ArtistId:this.ArtistId,
      ArtistName:this.ArtistName};
    this.service.updateArtist(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}