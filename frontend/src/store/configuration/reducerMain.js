import { combineReducers } from "redux";
import entities from '../entities/reducerEntities'
import forms from '../forms/reducerForms'

export default combineReducers({entities, forms})