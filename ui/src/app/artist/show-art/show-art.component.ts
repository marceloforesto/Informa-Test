import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-art',
  templateUrl: './show-art.component.html',
  styleUrls: ['./show-art.component.css']
})
export class ShowArtComponent implements OnInit {

  constructor(private service:SharedService) { }

  ArtistList:any=[];

  ModalTitle:string;
  ActivateAddEditArtistComp:boolean=false;
  artist:any;

  ArtistIdFilter:string="";
  ArtistNameFilter:string="";
  ArtistListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshArtistList();
  }

  addClick(){
    this.artist={
      ArtistId:0,
      ArtistName:""
    }
    this.ModalTitle="Add Artist";
    this.ActivateAddEditArtistComp=true;

  }

  editClick(item){
    this.artist=item;
    this.ModalTitle="Edit Artist";
    this.ActivateAddEditArtistComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteArtist(item.ArtistId).subscribe(data=>{
        alert(data.toString());
        this.refreshArtistList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditArtistComp=false;
    this.refreshArtistList();
  }


  refreshArtistList(){
    this.service.getArtistList().subscribe(data=>{
      this.ArtistList=data;
      this.ArtistListWithoutFilter=data;
    });
  }

  FilterFn(){
    var ArtistIdFilter = this.ArtistIdFilter;
    var ArtistNameFilter = this.ArtistNameFilter;

    this.ArtistList = this.ArtistListWithoutFilter.filter(function (el){
        return el.ArtistId.toString().toLowerCase().includes(
          ArtistIdFilter.toString().trim().toLowerCase()
        )&&
        el.ArtistName.toString().toLowerCase().includes(
          ArtistNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.ArtistList = this.ArtistListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}