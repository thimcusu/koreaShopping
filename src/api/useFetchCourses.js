import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { loadCourses } from "../redux/actions/coursesAction";
import { useCallback, useEffect } from "react";

function useFetchCourses() {
  const distpatch = useDispatch();
  const { data, apiCallStatus } = useSelector(state => {
    return {
      data: state.courses,
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);
  const boundAction = useCallback(() => {
    return distpatch(loadCourses());
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

export default useFetchCourses;
