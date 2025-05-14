import React from "react";

export function lazyWithDelay(importFunc, delay = 3000) {
  return React.lazy(() =>
    Promise.all([
      importFunc(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([moduleExports]) => moduleExports)
  );
}
