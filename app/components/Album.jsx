import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'

export default function (props) {

  const album = props.selectedAlbum
  console.log(album)

  return (
    <div>
      <div className="album-header">
        <div className="album-logos">
          <img className="image-responsive" src={album.image_front}/>
          <img className="image-responsive" src={album.image_back}/>
        </div>
        <h4>{album.title} <em>({album.release_year})</em></h4>
        <h5>{album.artist}</h5>
      </div>
      <div className="album-body">
        <div className="desc">
          {album.description}
        </div>
      </div>
    </div>
  )
}
