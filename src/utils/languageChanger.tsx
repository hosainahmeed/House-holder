'use client'
import { useEffect, useState } from "react";

export const changeLanguage = (eng: string, fr: string) => {
    const [currentLang, setCurrentLang] = useState(eng);
    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            setCurrentLang(savedLang);
        }
    }, [eng]);
    return currentLang === 'fr' ? fr : eng;
};