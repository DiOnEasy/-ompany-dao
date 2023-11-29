import { useRef } from "react";
import s from './Header.module.css';
import { HeaderContent } from "./header-content/HeaderContent";
import { HeaderNav } from "./header-nav/HeaderNav";
export const Header = () => {

  const linkRef = useRef<HTMLAnchorElement>(null);


  return (
    <div className={s.wrapper}>
      <HeaderNav linkRef={linkRef}/>
      <HeaderContent forwardedRef={linkRef}/>
    </div>
  );
};
