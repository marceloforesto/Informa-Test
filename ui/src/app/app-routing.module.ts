import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AlbumComponent} from './album/album.component';
import {ArtistComponent} from './artist/artist.component';
import {TrackComponent} from './track/track.component';


const routes: Routes = [
{path:'artist',component:ArtistComponent},
{path:'album',component:AlbumComponent},
{path:'track',component:TrackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }