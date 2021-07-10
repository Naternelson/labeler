import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducerMain'

export default function storeConfig() {
    return configureStore({ reducer })
}