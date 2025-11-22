import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente que faz scroll para o topo da página sempre que a rota muda.
 * Funciona tanto em desktop quanto em mobile.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll suave para o topo em todas as transições de rota
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

