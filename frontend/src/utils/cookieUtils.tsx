import Cookies from 'js-cookie';

export const saveToCookies = (name: string, value: string) => {
  Cookies.set(name, value, { expires: 7 });
};

export const loadFromCookies = (name: string): string | undefined => {
  return Cookies.get(name);
};