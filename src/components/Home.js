import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-8-lg offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              aut, ad earum repudiandae sit minima, natus magnam ratione fuga
              dolorum illo minus qui. Dolore pariatur quidem voluptatum
              molestias repellendus numquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
