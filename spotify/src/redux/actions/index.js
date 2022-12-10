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
          payload: listOfSongs.data,
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
        console.log(listOfArtist)

        dispatch({
          type: 'SET_ARTIST',
          payload: listOfArtist.data,
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
        console.log(listOfAlbums)
        dispatch({
          type: 'SET_ALBUMS',
          payload: listOfAlbums.data,
        })
        dispatch({
          type: 'FINISHED_LOADING',
          payload: true,
        })
      }
    } catch (error) {}
  }
}
