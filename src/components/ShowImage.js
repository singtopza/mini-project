import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ShowImage = ({ id }) => {
  const [img, setImg] = useState([])
  const clientId = "MYq3E7dLL-MDJIPtc_bS2aDcJYkRTtwP2c-Um_PXDLw"
  const urlimage = "https://api.unsplash.com/users/"+id+"/photos?page=1&query=&client_id="+clientId;

  useEffect(() => {
    axios.get(urlimage)
    .then((response) => {
      setImg(response.data);
    })
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="img-map">
            {img.map((photo) => (
              <>
                <center><img className="img-of-user" src={photo.urls.raw} /></center>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowImage;
