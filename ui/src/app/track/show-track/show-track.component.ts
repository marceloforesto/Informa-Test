import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-track',
  templateUrl: './show-track.component.html',
  styleUrls: ['./show-track.component.css']
})
export class ShowTrackComponent implements OnInit {

  constructor(private service:SharedService) { }

  TrackList:any=[];

  ModalTitle:string;
  ActivateAddEditTrackComp:boolean=false;
  track:any;

  TrackIdFilter:string="";
  TrackNameFilter:string="";
  TrackYearFilter:string="";
  TrackStyleFilter:string="";
  TrackTimeFilter:string="";
  AlbumIdFilter:string="";
  TrackListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshTrackList();
  }

  addClick(){
    this.track={
      TrackId:0,
      TrackName:"",
      TrackYear:0,
      TrackStyle:0,
      TrackTime:0,
      AlbumId:0
    }
    this.ModalTitle="Add Track";
    this.ActivateAddEditTrackComp=true;

  }

  editClick(item){
    this.track=item;
    this.ModalTitle="Edit Track";
    this.ActivateAddEditTrackComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteTrack(item.TrackId).subscribe(data=>{
        alert(data.toString());
        this.refreshTrackList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTrackComp=false;
    this.refreshTrackList();
  }


  refreshTrackList(){
    this.service.getTrackList().subscribe(data=>{
      this.TrackList=data;
      this.TrackListWithoutFilter=data;
    });
  }

  FilterFn(){
    var TrackIdFilter = this.TrackIdFilter;
    var TrackNameFilter = this.TrackNameFilter;
    var TrackYearFilter = this.TrackYearFilter;
    var TrackStyleFilter = this.TrackStyleFilter;
    var TrackTimeFilter = this.TrackTimeFilter;
    var AlbumIdFilter = this.AlbumIdFilter;

    this.TrackList = this.TrackListWithoutFilter.filter(function (el){
        return el.TrackId.toString().toLowerCase().includes(
          TrackIdFilter.toString().trim().toLowerCase()
        )&&
        el.TrackName.toString().toLowerCase().includes(
          TrackNameFilter.toString().trim().toLowerCase()
        )
        &&
        el.TrackYear.toString().toLowerCase().includes(
          TrackYearFilter.toString().trim().toLowerCase()
        )
        &&
        el.TrackStyle.toString().toLowerCase().includes(
          TrackStyleFilter.toString().trim().toLowerCase()
        )
        &&
        el.TrackTime.toString().toLowerCase().includes(
          TrackTimeFilter.toString().trim().toLowerCase()
        )
        &&
        el.AlbumId.toString().toLowerCase().includes(
          AlbumIdFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.TrackList = this.TrackListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
