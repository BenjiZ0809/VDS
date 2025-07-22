export const switchTheme = (themeName) => {
  const existing = document.getElementById("visa-theme");
  const href = `/nova-styles/themes/${themeName}/index.css`;

  if (existing) {
    // @ts-ignore
    existing.href = href;
  } else {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "visa-theme";
    link.href = href;
    document.head.appendChild(link);
  }
};
