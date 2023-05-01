import { useMediaQuery } from "react-responsive";
import { ReactFC } from "src/types/types";

export const Desktop: ReactFC = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? <>{children}</> : null;
};
export const Tablet: ReactFC = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });
    return isTablet ? <>{children}</> : null;
};
export const Mobile: ReactFC = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 576 });
    return isMobile ? <>{children}</> : null;
};
export const ExceptMobile: ReactFC = ({ children }) => {
    const isGreaterThenMobile = useMediaQuery({ minWidth: 577 });
    return isGreaterThenMobile ? <>{children}</> : null;
};
