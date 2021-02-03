import React, { memo } from "react";
// * 导入Provider 用于共享redux
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./router";
import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";
// * 导入store
import store from "./store";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HYAppHeader />
        {renderRoutes(routes)}
        <HYAppFooter />
      </HashRouter>
    </Provider>
  );
});
