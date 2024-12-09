export const login = (): void => {
  const minutos = new Date().getMinutes();
  const segundos = new Date().getSeconds();
  alert(`Bem vinda! ${minutos}:${segundos}`);
};
