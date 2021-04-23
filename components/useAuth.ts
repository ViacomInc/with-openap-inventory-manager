import { useEffect } from "react";
import { useDispatch, useSelector, State } from "../store";
import { selectUser } from "../store/selectors";
import { setUser } from "../store/actions";
import { AppConfig } from "../config";

interface UseAuth {
  user: State["user"];
}

export default function useAuth(config?: AppConfig): UseAuth {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!config) {
      return;
    }

    if (config.noAuth) {
      dispatch(setUser({ id: "NO AUTH" }));
    } else {
      console.error("Authentication Not Implemented");
    }
  }, [config]);

  const user = useSelector(selectUser);
  return { user };
}
