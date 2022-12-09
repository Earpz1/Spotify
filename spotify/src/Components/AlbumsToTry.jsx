import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAlbums } from '../redux/actions'

const AlbumsToTry = () => {
  const dispatch = useDispatch()

  return (
    <>
      <h3 className="mt-3">Albums to Try</h3>
      <div className="col-12 pl-3 row" id="secondAlbumRow"></div>
    </>
  )
}

export default AlbumsToTry
