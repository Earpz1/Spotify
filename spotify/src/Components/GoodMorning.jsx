import { useSelector, useDispatch } from 'react-redux'
import { getAlbums } from '../redux/actions'
import { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const GoodMorning = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAlbums())
  }, [])
  const albums = useSelector((state) => state.getAlbums)
  const finishedLoading = useSelector((state) => state.finishedLoading)
  return (
    <>
      <Row id="undersearch">
        <h2 className="pl-3 mb-4">Good Morning</h2>
        {finishedLoading && (
          <Col lg={12} className="pl-3 d-flex" id="topsidecards">
            {albums[0].slice(0, 6).map((album, index) => (
              <a key={index} href="#">
                <Col>
                  <img
                    className="album-image"
                    src={album.album.cover_medium}
                    alt=""
                  />
                  <p className="sidetext">{album.album.title}</p>
                </Col>
              </a>
            ))}
          </Col>
        )}
      </Row>
    </>
  )
}

export default GoodMorning
