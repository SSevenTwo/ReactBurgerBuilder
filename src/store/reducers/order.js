import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const purchasBurgereStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const purchasBurgereSuccess = (state, action) => {
  const combinedOrderData = updateObject(action.orderData, { id: action.orderId, ...action.orderData });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(combinedOrderData),
  });
};

const purchasBurgereFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { loading: false, orders: action.orders });
};

const fetchOrderFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);

    case actionTypes.PURCHASE_BURGER_START:
      return purchasBurgereStart(state, action);

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchasBurgereSuccess(state, action);

    case actionTypes.PURCHASE_BURGER_FAILED:
      return purchasBurgereFailed(state, action);

    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrderFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
