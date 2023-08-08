import { createContext, useContext } from "react";

/** Returns a context provider and a hook function to use that context. */
export function createStrictContext<T>(
  options: {
    default?: T;
  } = {},
) {
  const context = createContext<T | undefined>(options.default);

  function useStrictContext() {
    const contextValue = useContext(context);
    if (contextValue === undefined)
      throw new Error(
        "No context provider was found as a parent of this hook.",
      );
    return contextValue;
  }

  return [context.Provider, useStrictContext] as const;
}
