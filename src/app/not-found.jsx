function NotFound() {
    return (
      <section className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
        <h1 className="text-red-500 my-5 text-3xl">404</h1>
        <p className="text-red-500 my-5 text-3xl">
          <strong>Page not found</strong>
        </p>
      </section>
    );
  }
  
  export default NotFound;