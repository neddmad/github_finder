import { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState('light');

  const changeColorTheme = (isDark:string) => {
    if(isDark === 'purple'){
     return setDark('light')
    }
    return isDark === 'light' ? setDark('dark') : setDark('purple')
  }                                 

  const themeText = isDark ;
  const ThemeIcon = isDark === 'light' ? SunIcon : isDark === 'dark' ? MoonIcon : StarBorderPurple500SharpIcon

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark === 'dark' ? 'dark' : isDark === 'light' ? 'light' : 'purple');
  }, [isDark]);
  
  return (
    <div className={styles.switcher} onClick={()=>changeColorTheme(isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};