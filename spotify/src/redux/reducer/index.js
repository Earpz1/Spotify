const startingState = {
  getSongs: [],
  getArtist: [],
  getAlbums: [],
  finishedLoading: false,
}

const mainReducer = (state = startingState, action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return {
        ...state,
        getSongs: [...state.getSongs, action.payload],
      }

    case 'SET_ARTIST':
      return {
        ...state,
        getArtist: [...state.getArtist, action.payload],
      }

    case 'SET_ALBUMS':
      return {
        ...state,
        getAlbums: [...state.getAlbums, action.payload],
      }

    case 'FINISHED_LOADING':
      return {
        ...state,
        finishedLoading: action.payload,
      }
    default:
      return state
  }
}

export default mainReducer
