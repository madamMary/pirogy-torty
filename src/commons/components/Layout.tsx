type LayoutProps = {
  children: string | JSX.Element | JSX.Element[];
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <div className="container">{children}</div>;
};

export default Layout;
