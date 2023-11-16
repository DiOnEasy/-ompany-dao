import { HeaderContent } from "./header-content/HeaderContent";
import { HeaderNav } from "./header-nav/HeaderNav";
import s from './Header.module.css';
export const Header = () => {
  return (
    <div className={s.wrapper}>
      <HeaderNav/>
      <HeaderContent/>
    </div>
  );
};
