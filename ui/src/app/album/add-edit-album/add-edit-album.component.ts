import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-album',
  templateUrl: './add-edit-album.component.html',
  styleUrls: ['./add-edit-album.component.css']
})
export class AddEditAlbumComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() album:any;
  AlbumId:string;
  AlbumName:string;
  AlbumYear:string;
  AlbumImage:string;
  AlbumPath:string;
  ArtistId:number;

  ngOnInit(): void {
    this.AlbumId=this.album.AlbumId;
    this.AlbumName=this.album.AlbumName;
    this.AlbumImage=this.album.AlbumImage;
    this.AlbumYear=this.album.AlbumYear;
    this.AlbumImage=this.album.AlbumImage;
    this.AlbumPath=this.service.PhotoUrl+this.AlbumPath;
    this.ArtistId=this.album.ArtistId;
  }

  addAlbum(){
    var val = {AlbumId:this.AlbumId,
                AlbumName:this.AlbumName
                ,
                AlbumYear:this.AlbumYear
                ,
                AlbumImage:this.AlbumImage
                ,
                AlbumPath:this.AlbumPath
                ,
                ArtistId:this.ArtistId};
    this.service.addAlbum(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateAlbum(){
    var val = {
      AlbumId:this.AlbumId,
      AlbumName:this.AlbumName,
      AlbumPath:this.AlbumPath};
    this.service.updateAlbum(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.AlbumName=data.toString();
      this.AlbumPath=this.service.PhotoUrl+this.AlbumName;
    })
  }

}