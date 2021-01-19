export const setValue: (
  val: string,
  lang: string
) => { type: string; payload: { val: string; lang: string } } = (val, lang) => {
  return {
    type: "SET_VALUE",
    payload: { val, lang },
  };
};

export const resetValue: (lang: string) => { type: string; payload: string } = (
  lang
) => {
  return {
    type: "RESET_VALUE",
    payload: lang,
  };
};

export const setTheme: (state: string) => { payload: string } = (theme) => {
  return {
    type: "SET_THEME",
    payload: theme,
  };
};