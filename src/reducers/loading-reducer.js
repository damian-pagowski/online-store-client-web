import { SHOW_LOADING, HIDE_LOADING } from "../actions/loading-actions";

export default function loading(
  state = { show: false, requestCount: 0 },
  action
) {
  switch (action.type) {
    case SHOW_LOADING:
      const copyOfStateOnShow = { ...state };
      copyOfStateOnShow.requestCount += 1;
      copyOfStateOnShow.show =
        copyOfStateOnShow.requestCount > 0 ? true : false;
      return copyOfStateOnShow;
    case HIDE_LOADING:
      const copyOfStateOnHide = { ...state };
      copyOfStateOnHide.requestCount -= 1;
      copyOfStateOnHide.show =
        copyOfStateOnHide.requestCount > 0 ? true : false;
      return copyOfStateOnHide;
    default:
      return state;
  }
}
