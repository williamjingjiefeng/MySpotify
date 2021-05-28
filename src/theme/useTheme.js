import { useEffect, useState } from 'react';
import { setToLocalStorage, getFromLocalStorage } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
    const themes = getFromLocalStorage('all-themes');
    const [theme, setTheme] = useState(themes.data.seaWave);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLocalStorage('theme', mode)
        setTheme(mode);
    };

    const getFonts = () => {
        const allFonts = _.values(_.mapValues(themes.data, 'font'));
        return allFonts;
    }

    useEffect(() => {
        const localTheme = getFromLocalStorage('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.seaWave);
        setThemeLoaded(true);
    }, []);
    
    return { theme, themeLoaded, setMode, getFonts };
};
