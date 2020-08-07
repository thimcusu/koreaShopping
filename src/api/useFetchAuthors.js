import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { loadAuthors } from "../redux/actions/authorsAction";
import { useCallback, useEffect } from "react";

function useFetchAuthors() {
  const distpatch = useDispatch();
  const { data, apiCallStatus } = useSelector(state => {
    return {
      data: state.authors,
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);
  const boundAction = useCallback(() => {
    return distpatch(loadAuthors());
  }, [distpatch]);
  useEffect(() => {
    if (!data || data.length === 0) {
      boundAction();
    }
  }, [boundAction, data]);
  return {
    authors: data,
    fetchData: boundAction,
    apiCallStatus,
  };
}

export default useFetchAuthors;
