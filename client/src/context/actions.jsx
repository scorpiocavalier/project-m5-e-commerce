export const STATUS = {
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
};

export const ACTIONS = {
  SET_STATE: "set-state",
  SET_STATUS: "set-status",
  ADD_ITEM_TO_CART: "add-item-to-cart",
};

// DISPATCH ACTIONS
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

export const addItemToCart = (itemId) => {
  return {
    type: ACTIONS.ADD_ITEM_TO_CART,
    payload: { itemId }
  }
}