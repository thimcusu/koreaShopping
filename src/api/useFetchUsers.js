import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { loadUsers } from "../redux/actions/userAction";
import { useCallback, useEffect } from "react";

function userFetchUser() {
  const distpatch = useDispatch();
  const { data, apiCallStatus } = useSelector(state => {
    return {
      data: state.courses,
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);
  const boundAction = useCallback(() => {
    return distpatch(loadUsers());
  }, [distpatch]);
  useEffect(() => {
    if (!data || data.length === 0) {
      boundAction();
    }
  }, [boundAction, data]);
  return {
    courses: data,
    fetchData: boundAction,
    apiCallStatus,
  };
}

export default userFetchUser;
