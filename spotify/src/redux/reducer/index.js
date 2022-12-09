const startingState = {
  getSongs: {
    content: [],
  },
  getArtist: {
    content: [],
  },
  getAlbums: [],
}

const mainReducer = (state = startingState, action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return {
        ...state,
        getSongs: {
          content: [...state.getSongs.content, action.payload],
        },
      }
    case 'SET_ARTIST':
      return {
        ...state,
        getArtist: {
          content: [...state.getArtist.content, action.payload],
        },
      }

    case 'SET_ALBUMS':
      return {
        ...state,
        getAlbums: [...state.getAlbums, action.payload],
      }

    default:
      return state
  }
}

export default mainReducer
