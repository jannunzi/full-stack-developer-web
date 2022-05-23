import * as service from '../services/tuits-service';

export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const CREATE_TUIT = 'CREATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const FIND_TUIT_BY_USER = 'FIND_TUIT_BY_USER';

export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();
  dispatch({
    type: FIND_ALL_TUITS,
    tuits
  });
}

export const deleteTuit = async (dispatch, tuit) => {
  await service.deleteTuit(tuit);
  dispatch({
    type: DELETE_TUIT,
    tuit
  })
}
export const createTuit = async (dispatch, tuit) => {
  const newTuit = await service.createTuit(tuit);
  dispatch({
    type: CREATE_TUIT,
    newTuit
  });
}
export const updateTuit = async (dispatch, tuit) => {
  await service.updateTuit(tuit);
  dispatch({
    type: UPDATE_TUIT,
    tuit
  });
}
