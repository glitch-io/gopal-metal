export default function PageNotFound() {
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  };
  return (
    <>
      <div style={divStyle}>
        <h1>Page not found 😢</h1>
      </div>
    </>
  );
}
