import { Link } from 'preact-router/match';
import style from './style.module.scss';

export default function Header() {
  return (
    <header class={style.header}>
      <a href="/" class={style.logo}>
        <img src="../../assets/logo/xreal.svg" alt="XREAL Logo" height="24" width="108" />
      </a>
      <nav class={style.nav}>
        <Link class={style.navItem} activeClassName={style.active} href="/">
          <span class={style.navItemText}>Spatial Display</span>
          <span class={style.navItemLabel}>for everything</span>
        </Link>
        <Link class={style.navItem} activeClassName={style.active} href="/profile">
          <span class={style.navItemText}>Nebula</span>
          <span class={style.navItemLabel}>for Mac/PC</span>
        </Link>
        <Link class={style.navItem} activeClassName={style.active} href="/profile/john">
          <span class={style.navItemText}>Nebula</span>
          <span class={style.navItemLabel}>for Android</span>
        </Link>
        <Link class={style.navItem} activeClassName={style.active} href="/mask">
          <span class={style.navItemText}>Shop</span>
          {/* <span class={style.navItemLabel}>haha</span> */}
        </Link>
      </nav>
      <a href="/" class={style.user}>
        <img src="../../assets/user.svg" alt="user" height="28" width="28" />
      </a>
    </header>
  );
}
