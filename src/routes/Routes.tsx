import { Suspense, Fragment } from "react";
import { Loader, Navbar } from "components";
import { Routes, Route } from "react-router-dom";
import { ROUTES_LIST } from "./Routes.constatnts";

const RouteList = () => {
  return (
    <Routes>
      {ROUTES_LIST.map((route, index) => (
        <Fragment key={index}>
          <Route {...route} />
        </Fragment>
      ))}
    </Routes>
  );
};

const PrivetRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />

      <div>
        <Suspense fallback={<Loader />}>
          <RouteList />
        </Suspense>
      </div>
    </Suspense>
  );
};

export default PrivetRoutes;
