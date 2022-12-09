import { useEffect } from 'react'
import { getSongs, getArtist } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import GoodMorning from './GoodMorning'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {
  faChevronLeft,
  faChevronRight,
  faArrowDown,
  faCaretDown,
  faMaximize,
  faForwardStep,
  faRepeat,
  faBars,
  faVolumeHigh,
  faShuffle,
  faBackwardStep,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons'
import RecentlyPlayed from './RecentlyPlayed'
import AlbumsToTry from './AlbumsToTry'

const Sidebar = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongs())
    dispatch(getArtist())
  }, [])

  return (
    <div className="container-fluid vh-100 px-0">
      <div className="row content">
        <div className="col-2 sidebar pl-3">
          <a href="index.html">
            <img className="logo mt-2" src="img/logo.png" />
          </a>

          <div className="links-container d-flex flex-column mt-3 ml-0">
            <div className="link d-flex p-2 pl-0 mt-1">
              <FontAwesomeIcon icon={faHouse} />
              <a href="#" className="ml-4">
                Home
              </a>
            </div>
            <div className="link d-flex p-2 mt-1">
              <FontAwesomeIcon icon={faSearch} />

              <a href="search.html" className="ml-4">
                Search
              </a>
            </div>
            <div className="link d-flex p-2 mt-1">
              <FontAwesomeIcon icon={faBook} />
              <a href="#" className="ml-4">
                Your Library
              </a>
            </div>
          </div>
          <div className="box-links d-flex flex-column mt-4">
            <div className="box-link d-flex p-2">
              <div className="playlist-box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <a href="#" className="ml-3">
                Create Playlist
              </a>
            </div>
            <div className="box-link d-flex p-2">
              <div className="liked-box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <a href="#" className="ml-3">
                Liked Songs
              </a>
            </div>
          </div>
          <div className="playlists mt-2 pt-1 overflow-auto"></div>
          <div className="install mt-3 d-flex">
            <div className="circle d-flex justify-content-center align-items-center mt-1 mr-2">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <a href="#">Install App</a>
          </div>
        </div>
        <div className="row m-3 justify-content-between top-content-bar">
          <div className="nav-controls d-flex justify-content-between align-items-center">
            <div className="nav-circle mr-3 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="nav-circle-inactive d-flex justify-content-center align-items-center mr-3">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <a href="search.html">
              {' '}
              <input
                type="text"
                id="searchbar"
                placeholder="Search for Music..."
              ></input>
            </a>
          </div>
          <div className="user-menu d-flex align-items-center">
            <img className="user-image" src="img/profile-image.jpg" />
            <span id="username"></span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div className="col-10 main-content">
          <GoodMorning />
          <div className="row mt-3" id="mainrow">
            <RecentlyPlayed />
          </div>
          <div className="row pl-3 mt-3" id="mainrow">
            <AlbumsToTry />
          </div>
        </div>
        <div className="row vh-25 footer justify-content-center align-items-center">
          <div className="col-4 footer-left d-flex align-items-center">
            <img className="album-cover-footer" src="img/album-cover.jpg" />
            <div className="album-info d-flex flex-column ml-2">
              <span className="footer-song">
                Another one bites the Dust - Remastered 2011
              </span>
              <span className="footer-artist">Queen</span>
            </div>
            <div className="album-info-icons ml-4">
              <FontAwesomeIcon icon={faCaretDown} />
              <FontAwesomeIcon className="ml-3" icon={faMaximize} />
            </div>
          </div>
          <div className="col-5 footer-middle d-flex flex-column align-items-center">
            <div className="player-controls d-flex justify-content-between align-items-center">
              <FontAwesomeIcon icon={faShuffle} />
              <FontAwesomeIcon icon={faBackwardStep} />
              <div className="play-pause paused">
                <div className="circle d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faPlay} />
                  <FontAwesomeIcon className="d-none" icon={faPause} />
                </div>
              </div>
              <FontAwesomeIcon icon={faForwardStep} />
              <FontAwesomeIcon icon={faRepeat} />
            </div>
            <div className="song-duration d-flex align-items-center mt-2">
              <span>0:12</span>
              <div className="playtime mx-2"></div>
              <span>3:34</span>
            </div>
          </div>
          <div className="col-3 footer-right d-flex justify-content-end align-items-center">
            <div className="footer-right-icons">
              <FontAwesomeIcon icon={faBars} />
              <FontAwesomeIcon className="ml-5 mr-2" icon={faVolumeHigh} />
            </div>
            <div className="volume-bar"></div>
          </div>
        </div>
      </div>
      <audio src="" id="audio"></audio>
      <script src="js/index.js"></script>
      <script src="js/artists.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://kit.fontawesome.com/e1177dc7ed.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  )
}

export default Sidebar
