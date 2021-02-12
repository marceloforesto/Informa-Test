import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.css']
})
export class ShowAlbumComponent implements OnInit {

  constructor(private service:SharedService) { }

  AlbumList:any=[];

  ModalTitle:string;
  ActivateAddEditAlbumComp:boolean=false;
  album:any;

  AlbumIdFilter:string="";
  AlbumNameFilter:string="";
  AlbumYearFilter:string="";
  ArtistIdFilter:string="";
  AlbumListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshAlbumList();
  }

  addClick(){
    this.album={
      AlbumId:0,
      AlbumName:"",
      AlbumYear:"",
      AlbumImage:"",
      ArtistId:0
    }
    this.ModalTitle="Add Album";
    this.ActivateAddEditAlbumComp=true;

  }

  editClick(item){
    this.album=item;
    this.ModalTitle="Edit Album";
    this.ActivateAddEditAlbumComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteAlbum(item.AlbumId).subscribe(data=>{
        alert(data.toString());
        this.refreshAlbumList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditAlbumComp=false;
    this.refreshAlbumList();
  }


  refreshAlbumList(){
    this.service.getAlbumList().subscribe(data=>{
      this.AlbumList=data;
      this.AlbumListWithoutFilter=data;
    });
  }

  FilterFn(){
    var AlbumIdFilter = this.AlbumIdFilter;
    var AlbumNameFilter = this.AlbumNameFilter;
    var AlbumYearFilter = this.AlbumYearFilter;
    var ArtistIdFilter = this.ArtistIdFilter;
    
    this.AlbumList = this.AlbumListWithoutFilter.filter(function (el){
        return el.AlbumId.toString().toLowerCase().includes(
          AlbumIdFilter.toString().trim().toLowerCase()
        )&&
        el.AlbumName.toString().toLowerCase().includes(
          AlbumNameFilter.toString().trim().toLowerCase()
        )
        &&
        el.AlbumYear.toString().toLowerCase().includes(
          AlbumYearFilter.toString().trim().toLowerCase()
        )&&
        el.ArtistId.toString().toLowerCase().includes(
          ArtistIdFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.AlbumList = this.AlbumListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}