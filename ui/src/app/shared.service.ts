import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:5000/api";
readonly PhotoUrl = "http://localhost:5000/Photos/";

  constructor(private http:HttpClient) { }

  getArtistList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/artist');
  }

  addArtist(val:any){
    return this.http.post(this.APIUrl+'/artist',val);
  }

  updateArtist(val:any){
    return this.http.put(this.APIUrl+'/Artist',val);
  }

  deleteArtist(val:any){
    return this.http.delete(this.APIUrl+'/Artist/'+val);
  }


  getAlbumList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/album');
  }

  addAlbum(val:any){
    return this.http.post(this.APIUrl+'/Album',val);
  }

  updateAlbum(val:any){
    return this.http.put(this.APIUrl+'/Album',val);
  }

  deleteAlbum(val:any){
    return this.http.delete(this.APIUrl+'/Album/'+val);
  }

  getTrackList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/track');
  }

  addTrack(val:any){
    return this.http.post(this.APIUrl+'/Track',val);
  }

  updateTrack(val:any){
    return this.http.put(this.APIUrl+'/Track',val);
  }

  deleteTrack(val:any){
    return this.http.delete(this.APIUrl+'/Track/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Album/SaveFile',val);
  }
}