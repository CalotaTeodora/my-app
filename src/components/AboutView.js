import Hero from "./Hero";

const AboutView = ({ text }) => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-8-lg offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              aut, ad earum repudiandae sit minima, natus magnam ratione fuga
              dolorum illo minus qui. Dolore pariatur quidem voluptatum
              molestias repellendus numquam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quidem aut, ad earum repudiandae sit
              minima, natus magnam ratione fuga dolorum illo minus qui. Dolore
              pariatur quidem voluptatum molestias repellendus numquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
