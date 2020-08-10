export const STATUS = {
  LOADING: 'loading',
  IDLE: 'idle',
  ERROR: 'error'
}

export const ACTIONS = {
  SET_STATE: "set-state",
  SET_STATUS: "set-status",
};

export const setState = (newState) => {
  return {
    type: ACTIONS.SET_STATE,
    payload: { newState },
  };
};

export const setStatus = (status) => {
  return {
    type: ACTIONS.SET_STATUS,
    payload: { status },
  };
};
