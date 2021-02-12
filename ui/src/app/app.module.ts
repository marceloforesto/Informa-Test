import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { ShowArtComponent } from './artist/show-art/show-art.component';
import { AddEditArtistComponent } from './artist/add-edit-art/add-edit-art.component';
import { TrackComponent } from './track/track.component';
import { ShowTrackComponent } from './track/show-track/show-track.component';
import { AddEditTrackComponent } from './track/add-edit-track/add-edit-track.component';
import { AlbumComponent } from './album/album.component';
import { AddEditAlbumComponent } from './album/add-edit-album/add-edit-album.component';
import { ShowAlbumComponent } from './album/show-album/show-album.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ShowArtComponent,
    AddEditArtistComponent,
    TrackComponent,
    ShowTrackComponent,
    AddEditTrackComponent,
    AlbumComponent,
    AddEditAlbumComponent,
    ShowAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
