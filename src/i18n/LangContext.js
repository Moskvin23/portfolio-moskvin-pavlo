import { createContext, useContext, useEffect, useState } from "react"
import { translations, projectDescriptions } from "./translations"

const LangContext = createContext(null)

const readStored = () => {
  try {
    const saved = localStorage.getItem("lang")
    if (saved === "en" || saved === "uk") return saved
  } catch {}
  return navigator.language?.toLowerCase().startsWith("uk") ? "uk" : "en"
}

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(readStored)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem("lang", lang)
    } catch {}
  }, [lang])

  const value = {
    lang,
    setLang,
    t: translations[lang],
    projectText: (project) => projectDescriptions[lang]?.[project.title] || project.description,
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
