create table dbo.Artist (
ArtistId int identity (1,1),
ArtistName varchar (100),
PRIMARY KEY (ArtistId),
)

create table dbo.Album (
AlbumId int identity (1,1),
AlbumName varchar (200),
AlbumYear varchar (200),
AlbumImage varchar (500),
ArtistId int,
PRIMARY KEY (AlbumId),
FOREIGN KEY (ArtistId) REFERENCES Artist(ArtistId)
)

create table dbo.Track (
TrackId int identity (1,1),
TrackName varchar (200),
TrackYear int,
TrackStyle int,
TrackTime decimal,
AlbumId int,
PRIMARY KEY (TrackId),
FOREIGN KEY (AlbumId) REFERENCES Album(AlbumId)
)