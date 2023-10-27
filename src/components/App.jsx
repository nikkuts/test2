import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import tabs from "./tabs.json";
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  const defaultTab = tabs.find(tab => tab.order === 0);
  const DefaultComponent = lazy(() => import(`./${defaultTab.patch}`));

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<DefaultComponent />} />        
          {
            tabs.map(({ id, patch }) => {
              const DynamicComponent = lazy(() => import(`./${patch}`));

              return (
                <Route key={id} path={id} element={<DynamicComponent />} />
              );
            })
          }
        </Route>
      </Routes>
    </>
  );
};