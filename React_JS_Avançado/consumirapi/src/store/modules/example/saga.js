import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as actions from './actions';
import * as types from '../types';

const requisicao = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

function* exampleRequest() {
  try {
    yield call(requisicao);
    toast.success('Success');
    yield put(actions.clickButtonSuccess());
  } catch {
    toast.error('Deu erro =(');
    yield put(actions.clickButtonFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
]);

