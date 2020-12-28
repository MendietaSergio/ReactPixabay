//componente funcional
import React from 'react';

const Imagen = (props)=>{
    //nos crea el link, like y preview de la imagen
    const {largeImageURL,likes, previewURL, tags, views} = props.imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 md-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{likes} Me gusta </p>
                    <p className="card-text">{views} Me gusta </p>
                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block"> Ver Imagen </a>
                </div>
            </div>
        </div>
    )
}
export default Imagen;