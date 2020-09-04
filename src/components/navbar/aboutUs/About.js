import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBMask,
  MDBInput
} from "mdbreact";





function About() {
  return (
    <div>
      <MDBCard className="my-5 px-5 pb-1 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow className="text-md-left">
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Oomat</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Designer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg dribbble-ic">
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Aziz</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Photographer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg yt-ic">
                  <MDBIcon fab icon="youtube" />
                </a>
                <a href="#!" className="p-2 fa-lg ins-ic">
                  <MDBIcon fab icon="instagram" />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Sabyr</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Developer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg fb-ic">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="p-2 fa-lg tw-ic">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#!" className="p-2 fa-lg github-ic">
                  <MDBIcon fab icon="github" />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Sultan</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Front-end Developer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a href="#!" className="p-2 fa-lg gplus-ic">
                  <MDBIcon fab icon="google-plus-g" />
                </a>
                <a href="#!" className="p-2 fa-lg li-ic">
                  <MDBIcon fab icon="linkedin-in" />
                </a>
                <a href="#!" className="p-2 fa-lg email-ic">
                  <MDBIcon icon="envelope" />
                </a>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Recent posts
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="green-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="utensils" className="pr-2" />
                  Food
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus et aut
                officiis debitis.
              </p>
              <p>
                by
                <a href="#!">
                  <strong>Carine Fox</strong>
                </a>
                , 19/08/2018
              </p>
              <MDBBtn color="success" size="md" className="waves-light ">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="7">
              <a href="#!" className="pink-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="image" className="pr-2" />
                  Lifestyle
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p>
                by
                <a href="#!">
                  <strong>Carine Fox</strong>
                </a>
                , 14/08/2018
              </p>
              <MDBBtn
                color="pink"
                size="md"
                className="mb-lg-0 mb-4 waves-light"
              >
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="indigo-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="suitcase" className="pr-2" />
                  Food
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                sit amet.
              </p>
              <p>
                by
                <a href="#!">
                  <strong>Carine Fox</strong>
                </a>
                , 11/08/2018
              </p>
              <MDBBtn color="indigo" size="md" className="waves-light ">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Bishkek, 72000064</p>
              <p className="mb-md-0">KYRGYZSTAN</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">azixmam@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
    </div>
  );
}

export default About;
