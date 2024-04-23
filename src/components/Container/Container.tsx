import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full max-w-full mx-auto">{children}</div>;
};
export default Container;
