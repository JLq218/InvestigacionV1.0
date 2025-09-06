import "./BasicLayout.scss";

export function BasicLayout(props) {
  const { children } = props;
  return <div className="basic-layout">{children}</div>;
}
