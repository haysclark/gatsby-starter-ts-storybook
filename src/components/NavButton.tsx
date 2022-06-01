import { ReactNode, useCallback } from 'react';
import { navigate } from 'gatsby';

type NavButtonProps = {
  children?: ReactNode;
  path?: string;
};

export default function NavButton({
  children = `Home`,
  path = `/`,
}: NavButtonProps) {
  const handleLogoClick = useCallback(() => {
    navigate(path);
  }, [path]);

  return <button onClick={handleLogoClick}>{children}</button>;
}
