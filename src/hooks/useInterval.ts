import { useEffect } from "react";

/**
 * Use Interval Hook, that encapsulate the set Interval common function
 * @param func Handler function to be executed by the interval hook
 * @param ms Value in milliseconds after what the handler function will be executed
 * @param deps A dependency array containing value which have to be watched
 */
export default function useInterval(
  func: Function,
  ms = 1000,
  deps: Array<any> = []
) {
  // Handling errors
  if (deps && !Array.isArray(deps)) {
    throw new Error(
      "Please provide a dependencies array even with no data inside"
    );
  }

  if (!(func instanceof Function)) {
    throw new Error(
      "Please provide a function as a first argument of useInterval"
    );
  }

  // Applying effects
  useEffect(() => {
    // Starting the interval
    const timer = setInterval(() => {
      func();
    }, ms);

    // Clean up
    return () => {
      clearInterval(timer);
    };
  }, [...deps]);
}
