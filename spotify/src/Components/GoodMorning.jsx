import { useSelector, useDispatch } from 'react-redux'
import { getAlbums } from '../redux/actions'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

const GoodMorning = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAlbums())
  }, [])
  const albums = useSelector((state) => state.getAlbums)
  return (
    <>
      <Row id="undersearch">
        <h2 className="pl-3 mb-4">Good Morning</h2>
        <Col lg={12} className="pl-3 d-flex" id="topsidecards">
          {albums.slice(0, 5).map((album, index) => (
            <a key={index} href="#">
              <Col>
                <img src={album.data[index].album.cover_medium} alt="" />
                <p className="sidetext">{album.data[index].album.title}</p>
              </Col>
            </a>
          ))}
        </Col>
      </Row>
    </>
  )
}

export default GoodMorning
