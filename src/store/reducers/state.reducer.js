import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case "setHeader":
      return { ...state, header: action.header }
    case "setFooter":
      return { ...state, footer: action.footer }
    default:
      return { ...state }
  }
}

const initialState = { header: {}, footer: {} }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
