import { Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import tabs from "../tabs.json";
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const inAscendingOrder = tabs.sort(
    (firstTab, secondTab) => firstTab.order - secondTab.order
  );

  return (
    <div className={css.container}>
        <header className={css.header}>
            <nav>
                {inAscendingOrder.map(({id, title}) => (
                   <NavLink className={css.link} 
                   key={id} to={id}
                   >
                    {title}
                   </NavLink> 
                ))}
            </nav>
        </header>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
    </div>
  );
};