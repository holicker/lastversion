import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as vendorAPI from "../lib/api/vendor";
import { takeLatest } from "@redux-saga/core/effects";

const TEMP_SET_VENDOR = "vendor/TEMP_SET_VENDOR";
const INITIALIZE_VENDOR = "vendor/INITIALIZE_VENDOR";
const INITIALIZE_VENDOR_LIST_AND_VISIT =
  "vendor/INITIALIZE_VENDOR_LIST_AND_VISIT";
const CHANGE_FIELD = "vendor/CHANGE_FIELD";
const [GET_BY_VENDORID, GET_BY_VENDORID_SUCCESS, GET_BY_VENDORID_FAILURE] =
  createRequestActionTypes("vendor/GET_BY_VENDORID");
const [REGISTER_VENDOR, REGISTER_VENDOR_SUCCESS, REGISTER_VENDOR_FAILURE] =
  createRequestActionTypes("vendor/REGISTER_VENDOR");
const [GET_BY_USERID, GET_BY_USERID_SUCCESS, GET_BY_USERID_FAILURE] =
  createRequestActionTypes("vendor/GET_BY_USERID");
const [LIST_VENDOR, LIST_VENDOR_SUCCESS, LIST_VENDOR_FAILURE] =
  createRequestActionTypes("vendor/LIST_VENDOR");
const [
  GET_BY_VENDORDOMAIN,
  GET_BY_VENDORDOMAIN_SUCCESS,
  GET_BY_VENDORDOMAIN_FAILURE,
] = createRequestActionTypes("vendor/GET_BY_VENDORDOMAIN");

export const tempSetVendor = createAction(
  TEMP_SET_VENDOR,
  ({ vendorid, vendordomain }) => ({
    vendorid,
    vendordomain,
  })
);
export const initializeVendor = createAction(INITIALIZE_VENDOR, (id) => id);

export const initializeVendorListAndVisit = createAction(
  INITIALIZE_VENDOR_LIST_AND_VISIT
);
export const changeVendorField = createAction(
  CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  })
);

export const getByVendorid = createAction(GET_BY_VENDORID, (id) => id);
export const getByVendordomain = createAction(
  GET_BY_VENDORDOMAIN,
  (domain) => domain
);
export const getByUserid = createAction(GET_BY_USERID, (id) => id);
export const registerVendor = createAction(
  REGISTER_VENDOR,
  (formdata) => formdata
);
export const listVendor = createAction(LIST_VENDOR);

const registerSaga = createRequestSaga(
  REGISTER_VENDOR,
  vendorAPI.registerVendor
);
const getByVendoridSaga = createRequestSaga(
  GET_BY_VENDORID,
  vendorAPI.getByVendorid
);
const getByUseridSaga = createRequestSaga(GET_BY_USERID, vendorAPI.getByUserid);

const getByVendordomainSaga = createRequestSaga(
  GET_BY_VENDORDOMAIN,
  vendorAPI.getByVendordomain
);

const listVendorSaga = createRequestSaga(LIST_VENDOR, vendorAPI.listVendor);

export function* vendorSaga() {
  yield takeLatest(REGISTER_VENDOR, registerSaga);
  yield takeLatest(GET_BY_VENDORID, getByVendoridSaga);
  yield takeLatest(GET_BY_USERID, getByUseridSaga);
  yield takeLatest(LIST_VENDOR, listVendorSaga);
  yield takeLatest(GET_BY_VENDORDOMAIN, getByVendordomainSaga);
}

const initialState = {
  vendorid: null,
  vendordomain: null,
  vendorimage: null,
  vendorname: null,
  vendorinfo: null,
  vendorlat: null,
  vendorlng: null,
  vendorlist: null,
  vendorError: null,
  visit: null,
};

const vendor = handleActions(
  {
    [INITIALIZE_VENDOR]: (state, action) => ({
      ...state,
      vendorid: action.payload ? action.payload : null,
      vendordomain: null,
      vendorimage: null,
      vendorname: null,
      vendorinfo: null,
      vendorlat: null,
      vendorlng: null,
      vendorlist: null,
      vendorError: null,
      visit: null,
    }),
    [TEMP_SET_VENDOR]: (state, { payload: vendor }) => ({
      ...state,
      vendorid: vendor.vendorid,
      vendordomain: vendor.vendordomain,
    }),
    [INITIALIZE_VENDOR_LIST_AND_VISIT]: (state) => ({
      ...state,
      visit: null,
      vendorlist: null,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [GET_BY_VENDORID_SUCCESS]: (state, { payload: vendor }) => ({
      // payload로 오는 걸 vendor라는 항목으로 저장하겠다는 이야기!
      ...state,
      vendorid: vendor.id,
      vendorError: null,
    }),
    [GET_BY_VENDORID_FAILURE]: (state, { payload: error }) => ({
      ...state,
      vendorError: error,
    }),
    [GET_BY_VENDORDOMAIN_SUCCESS]: (state, { payload: vendor }) => ({
      // payload로 오는 걸 vendor라는 항목으로 저장하겠다는 이야기!
      ...state,
      visit: vendor,
    }),
    [GET_BY_VENDORDOMAIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      vendorError: error,
    }),
    [GET_BY_USERID_SUCCESS]: (state, { payload: vendor }) => ({
      // payload로 오는 걸 vendor라는 항목으로 저장하겠다는 이야기!
      ...state,
      vendorid: vendor.id,
      vendordomain: vendor.vendorDomain,
      vendorError: null,
    }),
    [GET_BY_USERID_FAILURE]: (state, { payload: error }) => ({
      ...state,
      vendorError: error,
    }),
    [REGISTER_VENDOR_SUCCESS]: (state, { payload: vendor }) => ({
      ...state,
      vendorid: vendor.id,
      vendordomain: vendor.vendorDomain,
      vendorimage: vendor.pictures,
      vendorname: vendor.vendorName,
      vendorinfo: vendor.vendorInfo,
      vendorlat: vendor.vendorLat,
      vendorlng: vendor.vendorLng,
    }),
    [REGISTER_VENDOR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      vendor: null,
      vendorError: error,
    }),
    [LIST_VENDOR_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      vendorlist: list,
      vendorError: null,
    }),
    [LIST_VENDOR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      vendorlist: null,
      vendorError: error,
    }),
  },
  initialState
);

export default vendor;
