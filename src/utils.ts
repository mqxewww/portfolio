const normalizePath = (path: string) => path.replace(/\/+$/, "");

export const ariaCurrent = (href: string, pathname: string) =>
  normalizePath(pathname) === normalizePath(href) ? "page" : "false";
