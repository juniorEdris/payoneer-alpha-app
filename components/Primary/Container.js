const Container = ({ children }) => {
  return (
    <section className="container px-4 md:px-0 m-auto max-w-6xl">
      {children}
    </section>
  );
};

export default Container;
