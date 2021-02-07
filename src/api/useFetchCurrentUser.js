import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getCurrentUser } from "../redux/actions/userAction";
import { useEffect } from "react";
import { getJwt } from "../utils/jwt";

function useFetchCurrentUser() {
  const distpatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser, shallowEqual);
  useEffect(() => {
    if (!getJwt()) return;
    distpatch(getCurrentUser());
  }, []);
  return {
    loggedIn: JSON.stringify(currentUser) !== "{}",
    currentUser,
  };
}

export default useFetchCurrentUser;