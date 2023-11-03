const Blog = () => {
  return (
    <div>
      <div class="login-7 skin_b">
        <div class="login-7-inner">
          <div id="particles-js"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-info">
                  <div class="form-section py-16 px-8 align-self-center">
                    <h1>Admin Form!</h1>
                    <div class="typing">
                      <h3>Recover Your Password</h3>
                    </div>
                    <div class="clearfix"></div>
                    <form action="#" method="GET">
                      <div class="form-group">
                        <label for="first_field" class="form-label">
                          Email address
                        </label>
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="first_field"
                          placeholder="Email Address"
                          aria-label="Email Address"
                        />
                      </div>
                      <div class="form-group clearfix">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg btn-theme"
                        >
                          Send Me Email
                        </button>
                      </div>
                    </form>
                   
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
