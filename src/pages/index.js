import Header from "../components/header";

export default function Home() {
    return(
        <>
             <Header />
             <div id="preloader">
          <div className="wrapper">
            <div className="cssload-loader" />
          </div>
        </div>
        <div className="top-search-area">
          <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="btn close-btn" data-dismiss="modal"><i className="fa fa-times" /></button>
                  <form action="index.html" method="post">
                    <input type="search" name="top-search-bar" className="form-control" placeholder="Search and hit enter..." />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------
     * Header Section *
   ------------------------- */}
      <header className="header-area">
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off">
            <nav className="classy-navbar justify-content-between" id="uzaNav">
              <a className="nav-brand" href="index.html"><img src="./img/bg-img/logo_remove_bg.png" alt="" style={{width: '46%'}} /></a>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler"><span /><span /><span /></span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                </div>
                <div className="classynav">
                  <ul id="nav"  style={{width: '19pc'}}>
                    <li><a href="#features">About</a>
                      {/* <ul className="dropdown">
                        <li><a href="https://frappeframework.com/docs/user/en/introduction"> About frappe</a></li>
                        <li><a href="#why_compliance"> Why One Compliance</a></li>
                        <li><a href="https://efeone.com/"> Vision</a></li>
                        <li><a href="https://efeone.com/"> Team</a></li>
                      </ul> */}
                    </li>
                    {/* <li><a href>Pricing</a></li> */}
                    <li><a href='/doc'>Doc</a></li>
                    <li><a href='/contact'>Contact Us</a></li>
                  </ul>
                  <div className="get-a-quote ml-4 mr-3" style={{width: '15%'}}>
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                    <img src="./img/bg-img/GitHub-Mark-ea2971cee799" alt="" ></img>
                    {/* <a href="https://github.com/efeone/one_compliance" >&nbsp; </a> */}
                  </div>
                </div>
              </div>
              
            </nav>
          </div>
        </div>
      </header>
        <section className="welcome-area" style={{marginTop: '15%'}}>
        <div className="welcome-content h-100" style={{marginBottom: '4%'}}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-md-6">
              <div className="welcome-text" >
                <h1 data-animation="fadeInUp" data-delay="100ms" style={{ fontWeight: '501', color: '#388f80', 
                  animationDelay: '100ms'}}>Open Source, Customisable <br />  <span style={{color: '#000' }}>Compliance Management System</span></h1>
                {/* <h5 data-animation="fadeInUp" data-delay="400ms">We love to create "cool" things on Digital Platforms</h5> */}
              <br></br>
                <a href="http://efeone.com/" className="btn uza-btn btn-2" data-animation="fadeInUp" data-delay="700ms" style={{animationDelay: '700ms'}}>Start Exploring</a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="welcome-thumbnail">
              <img src="./img/bg-img/3992745-removebg-preview-removebg-preview.png"  alt="" data-animation="slideInRight" data-delay="400ms" style={{animationDelay: '400ms'}} />                
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
        <section className="uza-about-us-area" id="why_compliance">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="about-us-thumbnail mb-80">
                  {/* <img src="./img/bg-img/unnamed__1_-removebg-preview.png" alt="" /> */}
                  <div className="uza-video-area hi-icon-effect-8">
                    {/* <a href="https://www.youtube.com/watch?v=sSakBz_eYzQ" className="hi-icon video-play-btn"><i className="fa fa-play" aria-hidden="true" /></a> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="about-us-content mb-80">
                  <h2>Why <span style={{color: '#388f80'}}>One Compliance</span>?</h2>
                  <p>"OneCompliance" is a compliance management software solution designed to help organisations efficiently handle their regulatory and legal compliance requirements. This app provides tools for managing compliance documents and tracking tasks related to compliance. It streamlines the process of ensuring that an organisation complies with various regulations and standards, making compliance management more straightforward and effective.
                  </p>
                  <a href="http://efeone.com/" className="btn uza-btn btn-2 mt-4">Start Exploring</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-bg-pattern">
            <img src="./img/core-img/curve-2.png" alt="" />
          </div>

        </section>
        <section id="features" className="section section-padding-top section-padding-bottom" data-section-template="Section with Cards" style={{margin:'4%'}}>
        <h1 style={{ fontWeight: '501',textAlign: 'center', color: "#388f80"}}>Key Features</h1>
        <div className="feature-section">
            <div className="feature-box">
              <h2 style={{ fontSize: '24px', fontWeight: '501'}}>User Roles</h2>
              <p>The system supports various user roles, including Director, Compliance Manager, Head of Department, Senior Manager, Manager, and Executive, each with specific access and responsibilities.</p>
            </div>
            <div className="feature-box">
              <h2 style={{ fontSize: '24px', fontWeight: '501'}}>Master Documents</h2>
              <p>It includes document categories for managing critical information, such as Customers, Compliance Categories, Compliance Subcategories, Project Templates, and Tasks.</p>            </div>
            <div className="feature-box">
              <h2 style={{ fontSize: '24px', fontWeight: '501'}}>Project Templates</h2>
              <p>Project templates can be created based on compliance subcategories. Tasks can also be generated from these templates, including the assignment of employees and employee groups.</p>            </div>
          </div>
          <div className="feature-section">
            <div className="feature-box">
              <h2 style={{ fontSize: '24px', fontWeight: '501'}}>User Roles</h2>
              <p>The system supports various user roles, including Director, Compliance Manager, Head of Department, Senior Manager, Manager, and Executive, each with specific access and responsibilities.</p>
            </div>
            <div className="feature-box">
              <h2 style={{ fontSize: '24px', fontWeight: '501'}}>
                Category and Subcategory</h2>
              <p>The system provides a structured approach to categorising compliance, allowing you to define different types of taxes, such as GST, Income Tax, and TDs, and their respective projects. You can create subcategories for monthly, quarterly, and half-yearly compliance tasks.</p>            </div>
            <div className="feature-box">
            <h2 style={{ fontSize: '24px', fontWeight: '501'}}>Master Documents</h2>
              <p>It includes document categories for managing critical information, such as Customers, Compliance Categories, Compliance Subcategories, Project Templates, and Tasks.</p>
            </div>
          </div>
        </section>


         <section className="welcome-area">
          <div className="welcome-slides owl-carousel">
            <div className="single-welcome-slide">
              <div className="background-curve">
                <img src="./img/core-img/curve-1.png" alt="" />
              </div>
              <div className="welcome-content h-100">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="welcome-text">
                        <h2 data-animation="fadeInUp" data-delay="100ms">Open Source, Customisable <br />  <span>Health Information System</span></h2>
                        <a href="http://efeone.com/" className="btn uza-btn btn-2" data-animation="fadeInUp" data-delay="700ms">Start Exploring</a>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="welcome-thumbnail">
                        <img src="./img/bg-img/1.png" alt="" data-animation="slideInRight" data-delay="400ms" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
          </div>
        </section>
        
        <section className="uza-blog-area">
          <div className="blog-bg-curve">
            <img src="./img/core-img/curve-4.png" alt="" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="single-blog-post bg-img mb-80">
                  <div className="post-content">
                    <img src="/img/bg-img/image (1).png" alt="" />                         
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="single-blog-post bg-img mb-80">
                  <div className="post-content">
                    <img src="/img/bg-img/image (2).png" alt="" />                         
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="single-blog-post bg-img mb-80">
                  <div className="post-content">
                    <img src="/img/bg-img/image (1).png" alt="" />                         
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="single-blog-post bg-img mb-80">
                  <div className="post-content">
                    <img src="/img/bg-img/image (2).png" alt="" />                         
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </section>
    

       

          <hr></hr>
          <footer id="dk-footer" className="dk-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                  <img src="./img/bg-img/footer_logo" alt="" className="img-fluid" />
                
                <p className="footer-info-text">
                  Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/efeone.social/">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/efeone.social/">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/efeone.social/">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/efeone/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/efeone.social/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-awarad">
                <img src="images/icon/best.png" alt="" />
                <p>Best Design Company 2019</p>
              </div>
            </div>
            <div className="col-md-14 col-lg-8">
              <div className="row">
                <div className="col-md-9">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" aria-hidden="true" />
                    </div>
                    <div className="contact-info">
                      <p>No. 3/403 C, Carino INC, Pooladikkunnu Eranhikkal, Kozhikode - 673303 Kerala, India </p>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <ul>
                      <li>
                        <a href="#features">About us</a>
                      </li>
                      <li>
                        <a href="#docs">Doc</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#blog">Blog</a>
                      </li>
                      <li>
                        <a href="#test">Testimonials</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                {/* End col */}
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    
                    
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i className="fa fa-volume-control-phone" aria-hidden="true" />
                    </div>
                    <div className="contact-info">
                      {/* <h3>95 711 9 5353</h3> */}
                      <p>9400091868<br/>8086833868</p>
                    </div>
                  </div>
            
                      <form action="#">
                        <div className="form-row">
                          <div className="col dk-footer-form">
                            <input type="email" className="form-control" placeholder="Email Address" />
                            <button type="submit">
                              <i className="fa fa-send" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <span>Copyright © 2019, All Right Reserved efeone</span>
                  </div>
                  {/* End Col */}
                  <div className="col-md-6">
                    <div className="copyright-menu">
                      <ul>
                        <li>
                          <a href="#home">Home</a>
                        </li>
                        <li>
                          <a href="#terms">Terms</a>
                        </li>
                        <li>
                          <a href="#privacy">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Back to top */}
          </footer>

        </>
    )
}