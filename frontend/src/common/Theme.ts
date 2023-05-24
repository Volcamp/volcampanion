const ADMIN_THEME_CLASS = 'admin-theme';

const USER_THEME_CLASS = 'user-theme';


export function switchAdminTheme(): void {
  document.documentElement.classList.remove(USER_THEME_CLASS);
  document.documentElement.classList.add(ADMIN_THEME_CLASS);

}

export function switchUserTheme(): void {
  document.documentElement.classList.remove(ADMIN_THEME_CLASS);
  document.documentElement.classList.add(USER_THEME_CLASS);



}
