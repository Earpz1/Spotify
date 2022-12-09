import { useDispatch, useSelector } from 'react-redux'
import { getArtist } from '../redux/actions'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

const RecentlyPlayed = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtist())
  }, [])
  const albums = useSelector((state) => state.getArtist.content)
  return (
    <>
      {' '}
      <Row className="pl-3 mt-3" id="mainrow">
        <Col lg={12}>
          <h3 className="mb-2">Recently Played</h3>
        </Col>

        {albums.slice(0, 6).map((album, index) => (
          <a key={index} href="#">
            <Col>
              <img
                className="album-image"
                src={album.data[index].album.cover_medium}
                alt=""
              />
              <p>{album.data[index].album.title}</p>
            </Col>
          </a>
        ))}
      </Row>
    </>
  )
}
export default RecentlyPlayed
