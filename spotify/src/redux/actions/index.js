import { useDispatch } from 'react-redux'

export const getSongs = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=skillet',
      )
      if (response.ok) {
        let listOfSongs = await response.json()
        dispatch({
          type: 'SET_SONGS',
          payload: listOfSongs,
        })
      }
    } catch (error) {}
  }
}

export const getArtist = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=song',
      )
      if (response.ok) {
        let listOfArtist = await response.json()

        dispatch({
          type: 'SET_ARTIST',
          payload: listOfArtist,
        })
      }
    } catch (error) {}
  }
}

export const getAlbums = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=mumford',
      )
      if (response.ok) {
        let listOfAlbums = await response.json()
        dispatch({
          type: 'SET_ALBUMS',
          payload: listOfAlbums,
        })
      }
    } catch (error) {}
  }
}
