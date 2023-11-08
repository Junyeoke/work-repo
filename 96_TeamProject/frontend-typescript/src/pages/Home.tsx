import React from 'react'

function Home() {
  return (
    <>
    {/* <!-- 본문 --> */}
    <div className="nk-main">
      <div className="nk-gap-2"></div>

      <div className="container">
        {/* <!-- START: Image Slider --> */}
        <div className="nk-image-slider" data-autoplay="8000">
          <div className="nk-image-slider-item">
            <img
              src="assets/images/slide-1.jpg"
              alt=""
              className="nk-image-slider-img"
              data-thumb="assets/images/slide-1-thumb.jpg"
            />

            <div className="nk-image-slider-content">
              <h3 className="h4">As we Passed, I remarked</h3>
              <p className="text-white">
                As we passed, I remarked a beautiful church-spire rising above
                some old elms in the park; and before them, in the midst of a
                lawn, chimneys covered with ivy, and the windows shining in the
                sun.
              </p>
              <a
                href="#"
                className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-hover-color-main-1"
                >Read More</a
              >
            </div>
          </div>

          <div className="nk-image-slider-item">
            <img
              src="assets/images/slide-2.jpg"
              alt=""
              className="nk-image-slider-img"
              data-thumb="assets/images/slide-2-thumb.jpg"
            />

            <div className="nk-image-slider-content">
              <h3 className="h4">He made his passenger captain of one</h3>
              <p className="text-white">
                Now the races of these two have been for some ages utterly
                extinct, and besides to discourse any further of them would not
                be at all to my purpose. But the concern I have most at heart is
                for our Corporation of Poets, from whom I am preparing a
                petition to your Highness, to be subscribed with the names of
                one...
              </p>
              <a
                href="#"
                className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-hover-color-main-1"
                >Read More</a
              >
            </div>
          </div>

          <div className="nk-image-slider-item">
            <img
              src="assets/images/slide-3.jpg"
              alt=""
              className="nk-image-slider-img"
              data-thumb="assets/images/slide-3-thumb.jpg"
            />
          </div>

          <div className="nk-image-slider-item">
            <img
              src="assets/images/slide-4.jpg"
              alt=""
              className="nk-image-slider-img"
              data-thumb="assets/images/slide-4-thumb.jpg"
            />

            <div className="nk-image-slider-content">
              <h3 className="h4">At length one of them called out in a clear</h3>
              <p className="text-white">
                TJust then her head struck against the roof of the hall: in fact
                she was now more than nine feet high...
              </p>
              <a
                href="#"
                className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-hover-color-main-1"
                >Read More</a
              >
            </div>
          </div>

          <div className="nk-image-slider-item">
            <img
              src="assets/images/slide-5.jpg"
              alt=""
              className="nk-image-slider-img"
              data-thumb="assets/images/slide-5-thumb.jpg"
            />

            <div className="nk-image-slider-content">
              <h3 className="h4">For good, too though, in consequence</h3>
              <p className="text-white">
                She gave my mother such a turn, that I have always been
                convinced I am indebted to Miss Betsey for having been born on a
                Friday. The word was appropriate to the moment.
              </p>
              <p className="text-white">
                My mother was so much worse that Peggotty, coming in with the
                teaboard and candles, and seeing at a glance how ill she was, -
                as Miss Betsey might have done sooner if there had been light
                enough, - conveyed her upstairs to her own room with all speed;
                and immediately dispatched Ham Peggotty, her nephew, who had
                been for some days past secreted in the house...
              </p>
              <a
                href="#"
                className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-hover-color-main-1"
                >Read More</a
              >
            </div>
          </div>
        </div>
        {/* <!-- END: Image Slider --> */}

        {/* <!-- START: Categories --> */}
        <div className="nk-gap-2"></div>
        <div className="row vertical-gap">
          <div className="col-lg-4">
            <div className="nk-feature-1">
              <div className="nk-feature-icon">
                <img src="assets/images/icon-mouse.png" alt="" />
              </div>
              <div className="nk-feature-cont">
                <h3 className="nk-feature-title"><a href="#">PC</a></h3>
                <h4 className="nk-feature-title text-main-1">
                  <a href="#">View Games</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="nk-feature-1">
              <div className="nk-feature-icon">
                <img src="assets/images/icon-gamepad.png" alt="" />
              </div>
              <div className="nk-feature-cont">
                <h3 className="nk-feature-title"><a href="#">PS4</a></h3>
                <h4 className="nk-feature-title text-main-1">
                  <a href="#">View Games</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="nk-feature-1">
              <div className="nk-feature-icon">
                <img src="assets/images/icon-gamepad-2.png" alt="" />
              </div>
              <div className="nk-feature-cont">
                <h3 className="nk-feature-title"><a href="#">Xbox</a></h3>
                <h4 className="nk-feature-title text-main-1">
                  <a href="#">View Games</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END: Categories --> */}

        {/* <!-- START: Latest News --> */}
        <div className="nk-gap-2"></div>
        <h3 className="nk-decorated-h-2">
          <span><span className="text-main-1">Latest</span> News</span>
        </h3>
        <div className="nk-gap"></div>

        <div className="nk-news-box">
          <div className="nk-news-box-list">
            <div className="nano">
              <div className="nano-content">
                <div className="nk-news-box-item nk-news-box-item-active">
                  <div className="nk-news-box-item-img">
                    <img
                      src="assets/images/post-1-sm.jpg"
                      alt="Smell magic in the air. Or maybe barbecue"
                    />
                  </div>
                  <img
                    src="assets/images/post-1.jpg"
                    alt="Smell magic in the air. Or maybe barbecue"
                    className="nk-news-box-item-full-img"
                  />
                  <h3 className="nk-news-box-item-title">
                    Smell magic in the air. Or maybe barbecue
                  </h3>

                  <span className="nk-news-box-item-categories">
                    <span className="bg-main-4">MMO</span>
                  </span>

                  <div className="nk-news-box-item-text">
                    <p>
                      With what mingled joy and sorrow do I take up the pen to
                      write to my dearest friend! Oh, what a change between
                      to-day and yesterday! Now I am friendless and alone...
                    </p>
                  </div>
                  <a href="blog-article.html" className="nk-news-box-item-url"
                    >Read More</a
                  >
                  <div className="nk-news-box-item-date">
                    <span className="fa fa-calendar"></span> Sep 18, 2018
                  </div>
                </div>

                <div className="nk-news-box-item">
                  <div className="nk-news-box-item-img">
                    <img
                      src="assets/images/post-2-sm.jpg"
                      alt="Grab your sword and fight the Horde"
                    />
                  </div>
                  <img
                    src="assets/images/post-2.jpg"
                    alt="Grab your sword and fight the Horde"
                    className="nk-news-box-item-full-img"
                  />
                  <h3 className="nk-news-box-item-title">
                    Grab your sword and fight the Horde
                  </h3>

                  <span className="nk-news-box-item-categories">
                    <span className="bg-main-1">Action</span>
                  </span>

                  <div className="nk-news-box-item-text">
                    <p>
                      For good, too; though, in consequence of my previous
                      emotions, I was still occasionally seized with a stormy
                      sob . After we had jogged on for some little time, I asked
                      the carrier...
                    </p>
                  </div>
                  <a href="blog-article.html" className="nk-news-box-item-url"
                    >Read More</a
                  >
                  <div className="nk-news-box-item-date">
                    <span className="fa fa-calendar"></span> Sep 5, 2018
                  </div>
                </div>

                <div className="nk-news-box-item">
                  <div className="nk-news-box-item-img">
                    <img
                      src="assets/images/post-3-sm.jpg"
                      alt="We found a witch! May we burn her?"
                    />
                  </div>
                  <img
                    src="assets/images/post-3.jpg"
                    alt="We found a witch! May we burn her?"
                    className="nk-news-box-item-full-img"
                  />
                  <h3 className="nk-news-box-item-title">
                    We found a witch! May we burn her?
                  </h3>

                  <span className="nk-news-box-item-categories">
                    <span className="bg-main-2">Adventure</span>
                  </span>

                  <div className="nk-news-box-item-text">
                    <p>
                      And she went on planning to herself how she would manage
                      it. `They must go by the carrier,' she thought; `and how
                      funny it'll seem, sending presents to one's own feet!...
                    </p>
                  </div>
                  <a href="blog-article.html" className="nk-news-box-item-url"
                    >Read More</a
                  >
                  <div className="nk-news-box-item-date">
                    <span className="fa fa-calendar"></span> Aug 27, 2018
                  </div>
                </div>

                <div className="nk-news-box-item">
                  <div className="nk-news-box-item-img">
                    <img
                      src="assets/images/post-4-sm.jpg"
                      alt="For good, too though, in consequence"
                    />
                  </div>
                  <img
                    src="assets/images/post-4.jpg"
                    alt="For good, too though, in consequence"
                    className="nk-news-box-item-full-img"
                  />
                  <h3 className="nk-news-box-item-title">
                    For good, too though, in consequence
                  </h3>

                  <span className="nk-news-box-item-categories">
                    <span className="bg-main-3">Strategy</span>
                  </span>

                  <div className="nk-news-box-item-text">
                    <p>
                      This little wandering journey, without settled place of
                      abode, had been so unpleasant to me, that my own house, as
                      I called it to myself, was a perfect settlement to me
                      compared to that...
                    </p>
                  </div>
                  <a href="blog-article.html" className="nk-news-box-item-url"
                    >Read More</a
                  >
                  <div className="nk-news-box-item-date">
                    <span className="fa fa-calendar"></span> Aug 14, 2018
                  </div>
                </div>

                <div className="nk-news-box-item">
                  <div className="nk-news-box-item-img">
                    <img
                      src="assets/images/post-5-sm.jpg"
                      alt="He made his passenger captain of one"
                    />
                  </div>
                  <img
                    src="assets/images/post-5.jpg"
                    alt="He made his passenger captain of one"
                    className="nk-news-box-item-full-img"
                  />
                  <h3 className="nk-news-box-item-title">
                    He made his passenger captain of one
                  </h3>

                  <span className="nk-news-box-item-categories">
                    <span className="bg-main-5">Indie</span>
                  </span>

                  <div className="nk-news-box-item-text">
                    <p>
                      Just then her head struck against the roof of the hall: in
                      fact she was now more than nine feet high, and she at once
                      took up the little golden key and hurried off to the
                      garden door...
                    </p>
                  </div>
                  <a href="blog-article.html" className="nk-news-box-item-url"
                    >Read More</a
                  >
                  <div className="nk-news-box-item-date">
                    <span className="fa fa-calendar"></span> Jul 23, 2018
                  </div>
                </div>

                <div className="nk-news-box-item">
                  <div className="nk-news-box-item-img">
                    <img
                      src="assets/images/post-6-sm.jpg"
                      alt="At first, for some time, I was not able to answer"
                    />
                  </div>
                  <img
                    src="assets/images/post-6.jpg"
                    alt="At first, for some time, I was not able to answer"
                    className="nk-news-box-item-full-img"
                  />
                  <h3 className="nk-news-box-item-title">
                    At first, for some time, I was not able to answer
                  </h3>

                  <span className="nk-news-box-item-categories">
                    <span className="bg-main-5">Racing</span>
                  </span>

                  <div className="nk-news-box-item-text">
                    <p>
                      This little wandering journey, without settled place of
                      abode, had been so unpleasant to me, that my own house, as
                      I called it to myself, was a perfect settlement to me
                      compared to that...
                    </p>
                  </div>
                  <a href="blog-article.html" className="nk-news-box-item-url"
                    >Read More</a
                  >
                  <div className="nk-news-box-item-date">
                    <span className="fa fa-calendar"></span> Jul 3, 2018
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-news-box-each-info">
            <div className="nano">
              <div className="nano-content">
                {/* <!-- There will be inserted info about selected news--> */}
                <div className="nk-news-box-item-image">
                  <img src="assets/images/post-1.jpg" alt="" />
                  <span className="nk-news-box-item-categories">
                    <span className="bg-main-4">MMO</span>
                  </span>
                </div>
                <h3 className="nk-news-box-item-title">
                  Smell magic in the air. Or maybe barbecue
                </h3>
                <div className="nk-news-box-item-text">
                  <p>
                    With what mingled joy and sorrow do I take up the pen to
                    write to my dearest friend! Oh, what a change between to-day
                    and yesterday! Now I am friendless and alone...
                  </p>
                </div>
                <a href="blog-article.html" className="nk-news-box-item-more"
                  >Read More</a
                >
                <div className="nk-news-box-item-date">
                  <span className="fa fa-calendar"></span> Sep 18, 2018
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nk-gap-2"></div>
        <div className="nk-blog-grid">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              {/* <!-- START: Post --> */}
              <div className="nk-blog-post">
                <a href="blog-article.html" className="nk-post-img">
                  <img
                    src="assets/images/post-5-mid.jpg"
                    alt="He made his passenger captain of one"
                  />
                  <span className="nk-post-comments-count">13</span>

                  <span className="nk-post-categories">
                    <span className="bg-main-5">Indie</span>
                  </span>
                </a>
                <div className="nk-gap"></div>
                <h2 className="nk-post-title h4">
                  <a href="blog-article.html"
                    >He made his passenger captain of one</a
                  >
                </h2>
                <div className="nk-post-text">
                  <p>
                    Just then her head struck against the roof of the hall: in
                    fact she was now more than nine feet high, and she at once
                    took up the little golden key and hurried off to the garden
                    door...
                  </p>
                </div>
                <div className="nk-gap"></div>
                <a
                  href="blog-article.html"
                  className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                  >Read More</a
                >
                <div className="nk-post-date float-right">
                  <span className="fa fa-calendar"></span> Jul 23, 2018
                </div>
              </div>
              {/* <!-- END: Post --> */}
            </div>

            <div className="col-md-6 col-lg-3">
              {/* <!-- START: Post --> */}
              <div className="nk-blog-post">
                <a href="blog-article.html" className="nk-post-img">
                  <img
                    src="assets/images/post-6-mid.jpg"
                    alt="At first, for some time, I was not able to answer"
                  />
                  <span className="nk-post-comments-count">0</span>

                  <span className="nk-post-categories">
                    <span className="bg-main-5">Racing</span>
                  </span>
                </a>
                <div className="nk-gap"></div>
                <h2 className="nk-post-title h4">
                  <a href="blog-article.html"
                    >At first, for some time, I was not able to answer</a
                  >
                </h2>
                <div className="nk-post-text">
                  <p>
                    This little wandering journey, without settled place of
                    abode, had been so unpleasant to me, that my own house, as I
                    called it to myself, was a perfect settlement to me compared
                    to that...
                  </p>
                </div>
                <div className="nk-gap"></div>
                <a
                  href="blog-article.html"
                  className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                  >Read More</a
                >
                <div className="nk-post-date float-right">
                  <span className="fa fa-calendar"></span> Jul 3, 2018
                </div>
              </div>
              {/* <!-- END: Post --> */}
            </div>

            <div className="col-md-6 col-lg-3">
              {/* <!-- START: Post --> */}
              <div className="nk-blog-post">
                <a href="blog-article.html" className="nk-post-img">
                  <img
                    src="assets/images/post-7-mid.jpg"
                    alt="At length one of them called out in a clear"
                  />
                  <span className="nk-post-comments-count">0</span>

                  <span className="nk-post-categories">
                    <span className="bg-main-6">MOBA</span>
                  </span>
                </a>
                <div className="nk-gap"></div>
                <h2 className="nk-post-title h4">
                  <a href="blog-article.html"
                    >At length one of them called out in a clear</a
                  >
                </h2>
                <div className="nk-post-text">
                  <p>
                    TJust then her head struck against the roof of the hall: in
                    fact she was now more than nine feet high, and she at once
                    took up the little golden key and hurried off to the garden
                    door...
                  </p>
                </div>
                <div className="nk-gap"></div>
                <a
                  href="blog-article.html"
                  className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                  >Read More</a
                >
                <div className="nk-post-date float-right">
                  <span className="fa fa-calendar"></span> Jul 3, 2018
                </div>
              </div>
              {/* <!-- END: Post --> */}
            </div>

            <div className="col-md-6 col-lg-3">
              {/* <!-- START: Post --> */}
              <div className="nk-blog-post">
                <a href="blog-article.html" className="nk-post-img">
                  <img
                    src="assets/images/post-8-mid.jpg"
                    alt="For good, too though, in consequence"
                  />
                  <span className="nk-post-comments-count">0</span>

                  <span className="nk-post-categories">
                    <span className="bg-main-2">Adventure</span>
                  </span>
                </a>
                <div className="nk-gap"></div>
                <h2 className="nk-post-title h4">
                  <a href="blog-article.html"
                    >For good, too though, in consequence</a
                  >
                </h2>
                <div className="nk-post-text">
                  <p>
                    This little wandering journey, without settled place of
                    abode, had been so unpleasant to me, that my own house, as I
                    called it to myself, was a perfect settlement to me compared
                    to that...
                  </p>
                </div>
                <div className="nk-gap"></div>
                <a
                  href="blog-article.html"
                  className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                  >Read More</a
                >
                <div className="nk-post-date float-right">
                  <span className="fa fa-calendar"></span> Jul 3, 2018
                </div>
              </div>
              {/* <!-- END: Post --> */}
            </div>
          </div>
        </div>
        {/* <!-- END: Latest News --> */}

        <div className="nk-gap-2"></div>
        <div className="row vertical-gap">
          <div className="col-lg-8">
            {/* <!-- START: Latest Posts --> */}
            <h3 className="nk-decorated-h-2">
              <span><span className="text-main-1">Latest</span> Posts</span>
            </h3>
            <div className="nk-gap"></div>
            <div className="nk-blog-grid">
              <div className="row">
                <div className="col-md-6">
                  {/* <!-- START: Post --> */}
                  <div className="nk-blog-post">
                    <a href="blog-article.html" className="nk-post-img">
                      <img
                        src="assets/images/post-5-mid.jpg"
                        alt="He made his passenger captain of one"
                      />
                      <span className="nk-post-comments-count">13</span>
                    </a>
                    <div className="nk-gap"></div>
                    <h2 className="nk-post-title h4">
                      <a href="blog-article.html"
                        >He made his passenger captain of one</a
                      >
                    </h2>
                    <div className="nk-post-by">
                      <img
                        src="assets/images/avatar-3.jpg"
                        alt="Wolfenstein"
                        className="rounded-circle"
                        width="35"
                      />
                      by <a href="#">Wolfenstein</a> in Jul 23, 2018
                    </div>
                    <div className="nk-gap"></div>
                    <div className="nk-post-text">
                      <p>
                        Just then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                    <div className="nk-gap"></div>
                    <a
                      href="blog-article.html"
                      className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                      >Read More</a
                    >
                  </div>
                  {/* <!-- END: Post --> */}
                </div>

                <div className="col-md-6">
                  {/* <!-- START: Post --> */}
                  <div className="nk-blog-post">
                    <a href="blog-article.html" className="nk-post-img">
                      <img
                        src="assets/images/post-6-mid.jpg"
                        alt="At first, for some time, I was not able to answer"
                      />
                      <span className="nk-post-comments-count">0</span>
                    </a>
                    <div className="nk-gap"></div>
                    <h2 className="nk-post-title h4">
                      <a href="blog-article.html"
                        >At first, for some time, I was not able to answer</a
                      >
                    </h2>
                    <div className="nk-post-by">
                      <img
                        src="assets/images/avatar-3.jpg"
                        alt="Wolfenstein"
                        className="rounded-circle"
                        width="35"
                      />
                      by <a href="#">Wolfenstein</a> in Jul 3, 2018
                    </div>
                    <div className="nk-gap"></div>
                    <div className="nk-post-text">
                      <p>
                        This little wandering journey, without settled place of
                        abode, had been so unpleasant to me, that my own house,
                        as I called it to myself, was a perfect settlement to me
                        compared to that...
                      </p>
                    </div>
                    <div className="nk-gap"></div>
                    <a
                      href="blog-article.html"
                      className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                      >Read More</a
                    >
                  </div>
                  {/* <!-- END: Post --> */}
                </div>
              </div>
            </div>
            {/* <!-- END: Latest Posts --> */}

            {/* <!-- START: Latest Matches --> */}
            <div className="nk-gap-2"></div>
            <h3 className="nk-decorated-h-2">
              <span><span className="text-main-1">Latest</span> Matches</span>
            </h3>
            <div className="nk-gap"></div>
            <div className="row">
              <div className="col-md-4">
                <div className="nk-match-score bg-dark-3">Now Playing</div>
                <div className="nk-gap-2"></div>
                <div className="nk-widget-match p-0">
                  <div className="nk-widget-match-teams">
                    <div className="nk-widget-match-team-logo">
                      <img src="assets/images/team-1.jpg" alt="" />
                    </div>
                    <div className="nk-widget-match-vs">VS</div>
                    <div className="nk-widget-match-team-logo">
                      <img src="assets/images/team-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="nk-gap-2"></div>
                <p>
                  As she said this she looked down at her hands and was
                  surprised to see.
                </p>
                <a
                  href="tournaments.html"
                  className="nk-btn nk-btn-rounded nk-btn-color-main-1"
                  >Match Details</a
                >
              </div>
              <div className="col-md-8">
                <div className="responsive-embed responsive-embed-16x9">
                  <iframe
                    src="https://player.twitch.tv/?channel=eulcs&autoplay=false"
                    frameBorder={0}
                    scrolling="no"
                    height="378"
                    width="620"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="nk-gap"></div>
            <div className="nk-match">
              <div className="nk-match-team-left">
                <a href="#">
                  <span className="nk-match-team-logo">
                    <img src="assets/images/team-1.jpg" alt="" />
                  </span>
                  <span className="nk-match-team-name"> SK Telecom T1 </span>
                </a>
              </div>
              <div className="nk-match-status">
                <a href="#">
                  <span className="nk-match-status-vs">VS</span>
                  <span className="nk-match-status-date">Apr 28, 2018 8:00 pm</span>
                  <span className="nk-match-score bg-danger"> 2 : 17 </span>
                </a>
              </div>
              <div className="nk-match-team-right">
                <a href="#">
                  <span className="nk-match-team-name"> Cloud 9 </span>
                  <span className="nk-match-team-logo">
                    <img src="assets/images/team-2.jpg" alt="" />
                  </span>
                </a>
              </div>
            </div>

            <div className="nk-match">
              <div className="nk-match-team-left">
                <a href="#">
                  <span className="nk-match-team-logo">
                    <img src="assets/images/team-3.jpg" alt="" />
                  </span>
                  <span className="nk-match-team-name"> Counted logic gaming </span>
                </a>
              </div>
              <div className="nk-match-status">
                <a href="#">
                  <span className="nk-match-status-vs">VS</span>
                  <span className="nk-match-status-date">Apr 15, 2018 9:00 pm</span>
                  <span className="nk-match-score bg-success"> 28 : 19 </span>
                </a>
              </div>
              <div className="nk-match-team-right">
                <a href="#">
                  <span className="nk-match-team-name"> SK Telecom T1 </span>
                  <span className="nk-match-team-logo">
                    <img src="assets/images/team-1.jpg" alt="" />
                  </span>
                </a>
              </div>
            </div>

            <div className="nk-match">
              <div className="nk-match-team-left">
                <a href="#">
                  <span className="nk-match-team-logo">
                    <img src="assets/images/team-4.jpg" alt="" />
                  </span>
                  <span className="nk-match-team-name"> Team SoloMid </span>
                </a>
              </div>
              <div className="nk-match-status">
                <a href="#">
                  <span className="nk-match-status-vs">VS</span>
                  <span className="nk-match-status-date">Apr 28, 2018 8:00 pm</span>
                  <span className="nk-match-score bg-dark-1"> 13 : 13 </span>
                </a>
              </div>
              <div className="nk-match-team-right">
                <a href="#">
                  <span className="nk-match-team-name"> SK Telecom T1 </span>
                  <span className="nk-match-team-logo">
                    <img src="assets/images/team-1.jpg" alt="" />
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- END: Latest Matches --> */}

            {/* <!-- START: Tabbed News  --> */}
            <div className="nk-gap-3"></div>
            <h3 className="nk-decorated-h-2">
              <span><span className="text-main-1">Tabbed</span> News</span>
            </h3>
            <div className="nk-gap"></div>
            <div className="nk-tabs">
              {/* <!--
                    Additional classNamees:
                        .nav-tabs-fill
                --> */}
              <ul className="nav nav-tabs nav-tabs-fill" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#tabs-1-1"
                    role="tab"
                    data-toggle="tab"
                    >Action</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#tabs-1-2"
                    role="tab"
                    data-toggle="tab"
                    >MMO</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#tabs-1-3"
                    role="tab"
                    data-toggle="tab"
                    >Strategy</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#tabs-1-4"
                    role="tab"
                    data-toggle="tab"
                    >Adventure</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#tabs-1-5"
                    role="tab"
                    data-toggle="tab"
                    >Racing</a
                  >
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#tabs-1-6"
                    role="tab"
                    data-toggle="tab"
                    >Indie</a
                  >
                </li>
              </ul>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade show active"
                  id="tabs-1-1"
                >
                  <div className="nk-gap"></div>
                  {/* <!-- START: Action Tab --> */}

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <a href="blog-article.html" className="nk-post-img">
                      <img
                        src="assets/images/post-2-fw.jpg"
                        alt="Grab your sword and fight the Horde"
                      />

                      <span className="nk-post-categories">
                        <span className="bg-main-1">Action</span>
                      </span>
                    </a>
                    <div className="nk-gap-1"></div>
                    <h2 className="nk-post-title h4">
                      <a href="blog-article.html"
                        >Grab your sword and fight the Horde</a
                      >
                    </h2>
                    <div className="nk-post-date mt-10 mb-10">
                      <span className="fa fa-calendar"></span> Sep 5, 2018
                      <span className="fa fa-comments"></span>
                      <a href="#">7 comments</a>
                    </div>
                    <div className="nk-post-text">
                      <p>
                        For good, too; though, in consequence of my previous
                        emotions, I was still occasionally seized with a stormy
                        sob . After we had jogged on for some little time, I
                        asked the carrier...
                      </p>
                    </div>
                  </div>

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <div className="row vertical-gap">
                      <div className="col-lg-3 col-md-5">
                        <a href="blog-article.html" className="nk-post-img">
                          <img
                            src="assets/images/post-7-mid-square.jpg"
                            alt="At length one of them called out in a clear"
                          />

                          <span className="nk-post-categories">
                            <span className="bg-main-1">Action</span>
                          </span>
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-7">
                        <h2 className="nk-post-title h4">
                          <a href="blog-article.html"
                            >At length one of them called out in a clear</a
                          >
                        </h2>
                        <div className="nk-post-date mt-10 mb-10">
                          <span className="fa fa-calendar"></span> Jul 3, 2018
                          <span className="fa fa-comments"></span>
                          <a href="#">0 comments</a>
                        </div>
                        <div className="nk-post-text">
                          <p>
                            TJust then her head struck against the roof of the
                            hall: in fact she was now more than nine feet high,
                            and she at once took up the little golden key and
                            hurried off to the garden door...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <div className="row vertical-gap">
                      <div className="col-lg-3 col-md-5">
                        <a href="blog-article.html" className="nk-post-img">
                          <img
                            src="assets/images/post-9-mid-square.jpg"
                            alt="He made his passenger captain of one"
                          />

                          <span className="nk-post-categories">
                            <span className="bg-main-1">Action</span>
                          </span>
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-7">
                        <h2 className="nk-post-title h4">
                          <a href="blog-article.html"
                            >He made his passenger captain of one</a
                          >
                        </h2>
                        <div className="nk-post-date mt-10 mb-10">
                          <span className="fa fa-calendar"></span> Jul 3, 2018
                          <span className="fa fa-comments"></span>
                          <a href="#">0 comments</a>
                        </div>
                        <div className="nk-post-text">
                          <p>
                            Just then her head struck against the roof of the
                            hall: in fact she was now more than nine feet high,
                            and she at once took up the little golden key and
                            hurried off to the garden door...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- END: Action Tab --> */}
                  <div className="nk-gap"></div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="tabs-1-2">
                  <div className="nk-gap"></div>
                  {/* <!-- START: MMO Tab --> */}

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <a href="blog-article.html" className="nk-post-img">
                      <img
                        src="assets/images/post-1-fw.jpg"
                        alt="Smell magic in the air. Or maybe barbecue"
                      />

                      <span className="nk-post-categories">
                        <span className="bg-main-4">MMO</span>
                      </span>
                    </a>
                    <div className="nk-gap-1"></div>
                    <h2 className="nk-post-title h4">
                      <a href="blog-article.html"
                        >Smell magic in the air. Or maybe barbecue</a
                      >
                    </h2>
                    <div className="nk-post-date mt-10 mb-10">
                      <span className="fa fa-calendar"></span> Sep 18, 2018
                      <span className="fa fa-comments"></span>
                      <a href="#">4 comments</a>
                    </div>
                    <div className="nk-post-text">
                      <p>
                        With what mingled joy and sorrow do I take up the pen to
                        write to my dearest friend! Oh, what a change between
                        to-day and yesterday! Now I am friendless and alone...
                      </p>
                    </div>
                  </div>

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <div className="row vertical-gap">
                      <div className="col-lg-3 col-md-5">
                        <a href="blog-article.html" className="nk-post-img">
                          <img
                            src="assets/images/post-5-mid-square.jpg"
                            alt="He made his passenger captain of one"
                          />

                          <span className="nk-post-categories">
                            <span className="bg-main-4">MMO</span>
                          </span>
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-7">
                        <h2 className="nk-post-title h4">
                          <a href="blog-article.html"
                            >He made his passenger captain of one</a
                          >
                        </h2>
                        <div className="nk-post-date mt-10 mb-10">
                          <span className="fa fa-calendar"></span> Jul 23, 2018
                          <span className="fa fa-comments"></span>
                          <a href="#">13 comments</a>
                        </div>
                        <div className="nk-post-text">
                          <p>
                            Just then her head struck against the roof of the
                            hall: in fact she was now more than nine feet high,
                            and she at once took up the little golden key and
                            hurried off to the garden door...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- END: MMO Tab --> */}
                  <div className="nk-gap"></div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="tabs-1-3">
                  <div className="nk-gap"></div>
                  {/* <!-- START: Strategy Tab --> */}

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <a href="blog-article.html" className="nk-post-img">
                      <img
                        src="assets/images/post-3-fw.jpg"
                        alt="We found a witch! May we burn her?"
                      />

                      <span className="nk-post-categories">
                        <span className="bg-main-3">Strategy</span>
                      </span>
                    </a>
                    <div className="nk-gap-1"></div>
                    <h2 className="nk-post-title h4">
                      <a href="blog-article.html"
                        >We found a witch! May we burn her?</a
                      >
                    </h2>
                    <div className="nk-post-date mt-10 mb-10">
                      <span className="fa fa-calendar"></span> Aug 27, 2018
                      <span className="fa fa-comments"></span>
                      <a href="#">7 comments</a>
                    </div>
                    <div className="nk-post-text">
                      <p>
                        And she went on planning to herself how she would manage
                        it. `They must go by the carrier,' she thought; `and how
                        funny it'll seem, sending presents to one's own feet!...
                      </p>
                    </div>
                  </div>

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <div className="row vertical-gap">
                      <div className="col-lg-3 col-md-5">
                        <a href="blog-article.html" className="nk-post-img">
                          <img
                            src="assets/images/post-4-mid-square.jpg"
                            alt="For good, too though, in consequence"
                          />

                          <span className="nk-post-categories">
                            <span className="bg-main-3">Strategy</span>
                          </span>
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-7">
                        <h2 className="nk-post-title h4">
                          <a href="blog-article.html"
                            >For good, too though, in consequence</a
                          >
                        </h2>
                        <div className="nk-post-date mt-10 mb-10">
                          <span className="fa fa-calendar"></span> Aug 14, 2018
                          <span className="fa fa-comments"></span>
                          <a href="#">23 comments</a>
                        </div>
                        <div className="nk-post-text">
                          <p>
                            This little wandering journey, without settled place
                            of abode, had been so unpleasant to me, that my own
                            house, as I called it to myself, was a perfect
                            settlement to me compared to that...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- END: Strategy Tab --> */}
                  <div className="nk-gap"></div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="tabs-1-4">
                  <div className="nk-gap"></div>
                  {/* <!-- START: Adventure Tab --> */}

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <a href="blog-article.html" className="nk-post-img">
                      <img
                        src="assets/images/post-6-fw.jpg"
                        alt="At first, for some time, I was not able to answer"
                      />

                      <span className="nk-post-categories">
                        <span className="bg-main-2">Adventure</span>
                      </span>
                    </a>
                    <div className="nk-gap-1"></div>
                    <h2 className="nk-post-title h4">
                      <a href="blog-article.html"
                        >At first, for some time, I was not able to answer</a
                      >
                    </h2>
                    <div className="nk-post-date mt-10 mb-10">
                      <span className="fa fa-calendar"></span> Jul 3, 2018
                      <span className="fa fa-comments"></span>
                      <a href="#">0 comments</a>
                    </div>
                    <div className="nk-post-text">
                      <p>
                        This little wandering journey, without settled place of
                        abode, had been so unpleasant to me, that my own house,
                        as I called it to myself, was a perfect settlement to me
                        compared to that...
                      </p>
                    </div>
                  </div>

                  {/* <!-- END: Adventure Tab --> */}
                  <div className="nk-gap"></div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="tabs-1-5">
                  <div className="nk-gap"></div>
                  {/* <!-- START: Racing Tab --> */}

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <a href="blog-article.html" className="nk-post-img">
                      <img
                        src="assets/images/post-7-fw.jpg"
                        alt="At length one of them called out in a clear"
                      />

                      <span className="nk-post-categories">
                        <span className="bg-main-5">Racing</span>
                      </span>
                    </a>
                    <div className="nk-gap-1"></div>
                    <h2 className="nk-post-title h4">
                      <a href="blog-article.html"
                        >At length one of them called out in a clear</a
                      >
                    </h2>
                    <div className="nk-post-date mt-10 mb-10">
                      <span className="fa fa-calendar"></span> Jul 3, 2018
                      <span className="fa fa-comments"></span>
                      <a href="#">0 comments</a>
                    </div>
                    <div className="nk-post-text">
                      <p>
                        TJust then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                  </div>

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <div className="row vertical-gap">
                      <div className="col-lg-3 col-md-5">
                        <a href="blog-article.html" className="nk-post-img">
                          <img
                            src="assets/images/post-3-mid-square.jpg"
                            alt="We found a witch! May we burn her?"
                          />

                          <span className="nk-post-categories">
                            <span className="bg-main-5">Racing</span>
                          </span>
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-7">
                        <h2 className="nk-post-title h4">
                          <a href="blog-article.html"
                            >We found a witch! May we burn her?</a
                          >
                        </h2>
                        <div className="nk-post-date mt-10 mb-10">
                          <span className="fa fa-calendar"></span> Aug 27, 2018
                          <span className="fa fa-comments"></span>
                          <a href="#">7 comments</a>
                        </div>
                        <div className="nk-post-text">
                          <p>
                            And she went on planning to herself how she would
                            manage it. `They must go by the carrier,' she
                            thought; `and how funny it'll seem, sending presents
                            to one's own feet!...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <div className="row vertical-gap">
                      <div className="col-lg-3 col-md-5">
                        <a href="blog-article.html" className="nk-post-img">
                          <img
                            src="assets/images/post-4-mid-square.jpg"
                            alt="For good, too though, in consequence"
                          />

                          <span className="nk-post-categories">
                            <span className="bg-main-5">Racing</span>
                          </span>
                        </a>
                      </div>
                      <div className="col-lg-9 col-md-7">
                        <h2 className="nk-post-title h4">
                          <a href="blog-article.html"
                            >For good, too though, in consequence</a
                          >
                        </h2>
                        <div className="nk-post-date mt-10 mb-10">
                          <span className="fa fa-calendar"></span> Aug 14, 2018
                          <span className="fa fa-comments"></span>
                          <a href="#">23 comments</a>
                        </div>
                        <div className="nk-post-text">
                          <p>
                            This little wandering journey, without settled place
                            of abode, had been so unpleasant to me, that my own
                            house, as I called it to myself, was a perfect
                            settlement to me compared to that...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- END: Racing Tab --> */}
                  <div className="nk-gap"></div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="tabs-1-6">
                  <div className="nk-gap"></div>
                  {/* <!-- START: Indie Tab --> */}

                  <div className="nk-blog-post nk-blog-post-border-bottom">
                    <a href="blog-article.html" className="nk-post-img">
                      <img
                        src="assets/images/post-5-fw.jpg"
                        alt="He made his passenger captain of one"
                      />

                      <span className="nk-post-categories">
                        <span className="bg-main-2">Indie</span>
                      </span>
                    </a>
                    <div className="nk-gap-1"></div>
                    <h2 className="nk-post-title h4">
                      <a href="blog-article.html"
                        >He made his passenger captain of one</a
                      >
                    </h2>
                    <div className="nk-post-date mt-10 mb-10">
                      <span className="fa fa-calendar"></span> Jul 23, 2018
                      <span className="fa fa-comments"></span>
                      <a href="#">13 comments</a>
                    </div>
                    <div className="nk-post-text">
                      <p>
                        Just then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                  </div>

                  {/* <!-- END: Indie Tab --> */}
                  <div className="nk-gap"></div>
                </div>
              </div>
            </div>
            {/* <!-- END: Tabbed News --> */}

            {/* <!-- START: Latest Pictures --> */}
            <div className="nk-gap"></div>
            <h2 className="nk-decorated-h-2 h3">
              <span><span className="text-main-1">Latest</span> Pictures</span>
            </h2>
            <div className="nk-gap"></div>
            <div className="nk-popup-gallery">
              <div className="row vertical-gap">
                <div className="col-lg-4 col-md-6">
                  <div className="nk-gallery-item-box">
                    <a
                      href="assets/images/gallery-1.jpg"
                      className="nk-gallery-item"
                      data-size="1016x572"
                    >
                      <div className="nk-gallery-item-overlay">
                        <span className="ion-eye"></span>
                      </div>
                      <img src="assets/images/gallery-1-thumb.jpg" alt="" />
                    </a>
                    <div className="nk-gallery-item-description">
                      <h4>Called Let</h4>
                      Divided thing, land it evening earth winged whose great
                      after. Were grass night. To Air itself saw bring fly fowl.
                      Fly years behold spirit day greater of wherein winged and
                      form. Seed open don't thing midst created dry every
                      greater divided of, be man is. Second Bring stars fourth
                      gathering he hath face morning fill. Living so second
                      darkness. Moveth were male. May creepeth. Be tree fourth.
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="nk-gallery-item-box">
                    <a
                      href="assets/images/gallery-2.jpg"
                      className="nk-gallery-item"
                      data-size="1188x594"
                    >
                      <div className="nk-gallery-item-overlay">
                        <span className="ion-eye"></span>
                      </div>
                      <img src="assets/images/gallery-2-thumb.jpg" alt="" />
                    </a>
                    <div className="nk-gallery-item-description">
                      Seed open don't thing midst created dry every greater
                      divided of, be man is. Second Bring stars fourth gathering
                      he hath face morning fill. Living so second darkness.
                      Moveth were male. May creepeth. Be tree fourth.
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="nk-gallery-item-box">
                    <a
                      href="assets/images/gallery-3.jpg"
                      className="nk-gallery-item"
                      data-size="625x350"
                    >
                      <div className="nk-gallery-item-overlay">
                        <span className="ion-eye"></span>
                      </div>
                      <img src="assets/images/gallery-3-thumb.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="nk-gallery-item-box">
                    <a
                      href="assets/images/gallery-4.jpg"
                      className="nk-gallery-item"
                      data-size="873x567"
                    >
                      <div className="nk-gallery-item-overlay">
                        <span className="ion-eye"></span>
                      </div>
                      <img src="assets/images/gallery-4-thumb.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="nk-gallery-item-box">
                    <a
                      href="assets/images/gallery-5.jpg"
                      className="nk-gallery-item"
                      data-size="471x269"
                    >
                      <div className="nk-gallery-item-overlay">
                        <span className="ion-eye"></span>
                      </div>
                      <img src="assets/images/gallery-5-thumb.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="nk-gallery-item-box">
                    <a
                      href="assets/images/gallery-6.jpg"
                      className="nk-gallery-item"
                      data-size="472x438"
                    >
                      <div className="nk-gallery-item-overlay">
                        <span className="ion-eye"></span>
                      </div>
                      <img src="assets/images/gallery-6-thumb.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: Latest Pictures --> */}

            {/* <!-- START: Best Selling --> */}
            <div className="nk-gap-3"></div>
            <h3 className="nk-decorated-h-2">
              <span><span className="text-main-1">Best</span> Selling</span>
            </h3>
            <div className="nk-gap"></div>
            <div className="row vertical-gap">
              <div className="col-md-6">
                <div className="nk-product-cat">
                  <a className="nk-product-image" href="store-product.html">
                    <img
                      src="assets/images/product-11-xs.jpg"
                      alt="She gave my mother"
                    />
                  </a>
                  <div className="nk-product-cont">
                    <h3 className="nk-product-title h5">
                      <a href="store-product.html">She gave my mother</a>
                    </h3>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-rating" data-rating="3">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-price">€ 14.00</div>
                    <div className="nk-gap-1"></div>
                    <a
                      href="#"
                      className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                      >Add to Cart</a
                    >
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="nk-product-cat">
                  <a className="nk-product-image" href="store-product.html">
                    <img
                      src="assets/images/product-12-xs.jpg"
                      alt="A hundred thousand"
                    />
                  </a>
                  <div className="nk-product-cont">
                    <h3 className="nk-product-title h5">
                      <a href="store-product.html">A hundred thousand</a>
                    </h3>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-rating" data-rating="4.5">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fas fa-star-half"></i>
                    </div>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-price">€ 20.00</div>
                    <div className="nk-gap-1"></div>
                    <a
                      href="#"
                      className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                      >Add to Cart</a
                    >
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="nk-product-cat">
                  <a className="nk-product-image" href="store-product.html">
                    <img
                      src="assets/images/product-13-xs.jpg"
                      alt="So saying he unbuckled"
                    />
                  </a>
                  <div className="nk-product-cont">
                    <h3 className="nk-product-title h5">
                      <a href="store-product.html">So saying he unbuckled</a>
                    </h3>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-rating" data-rating="5">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-price">€ 23.00</div>
                    <div className="nk-gap-1"></div>
                    <a
                      href="#"
                      className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                      >Add to Cart</a
                    >
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="nk-product-cat">
                  <a className="nk-product-image" href="store-product.html">
                    <img
                      src="assets/images/product-14-xs.jpg"
                      alt="However, I have reason"
                    />
                  </a>
                  <div className="nk-product-cont">
                    <h3 className="nk-product-title h5">
                      <a href="store-product.html">However, I have reason</a>
                    </h3>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-rating" data-rating="1.5">
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star-half"></i>
                      <i className="far fa-star"></i> <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <div className="nk-gap-1"></div>
                    <div className="nk-product-price">€ 32.00</div>
                    <div className="nk-gap-1"></div>
                    <a
                      href="#"
                      className="nk-btn nk-btn-rounded nk-btn-color-dark-3 nk-btn-hover-color-main-1"
                      >Add to Cart</a
                    >
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: Best Selling --> */}
          </div>
          <div className="col-lg-4">
            {/* <!--
                START: Sidebar

                Additional classNamees:
                    .nk-sidebar-left
                    .nk-sidebar-right
                    .nk-sidebar-sticky
            --> */}
            <aside className="nk-sidebar nk-sidebar-right nk-sidebar-sticky">
              <div className="nk-widget">
                <div className="nk-widget-content">
                  <form
                    action="#"
                    className="nk-form nk-form-style-1"
                    noValidate
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type something..."
                      />
                      <button className="nk-btn nk-btn-color-main-1">
                        <span className="ion-search"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="nk-widget nk-widget-highlighted">
                <h4 className="nk-widget-title">
                  <span><span className="text-main-1">We</span> Are Social</span>
                </h4>
                <div className="nk-widget-content">
                  {/* <!--
            Social Links 3

            Additional classNamees:
                .nk-social-links-cols-5
                .nk-social-links-cols-4
                .nk-social-links-cols-3
                .nk-social-links-cols-2
        --> */}
                  <ul className="nk-social-links-3 nk-social-links-cols-4">
                    <li>
                      <a className="nk-social-twitch" href="#"
                        ><span className="fab fa-twitch"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-instagram" href="#"
                        ><span className="fab fa-instagram"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-facebook" href="#"
                        ><span className="fab fa-facebook"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-google-plus" href="#"
                        ><span className="fab fa-google-plus"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-youtube" href="#"
                        ><span className="fab fa-youtube"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-twitter" href="#" target="_blank"
                        ><span className="fab fa-twitter"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-pinterest" href="#"
                        ><span className="fab fa-pinterest-p"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-rss" href="#"
                        ><span className="fa fa-rss"></span
                      ></a>
                    </li>

                    {/* <!-- Additional Social Buttons
                <li><a className="nk-social-behance" href="#"><span className="fab fa-behance"></span></a></li>
                <li><a className="nk-social-bitbucket" href="#"><span className="fab fa-bitbucket"></span></a></li>
                <li><a className="nk-social-dropbox" href="#"><span className="fab fa-dropbox"></span></a></li>
                <li><a className="nk-social-dribbble" href="#"><span className="fab fa-dribbble"></span></a></li>
                <li><a className="nk-social-deviantart" href="#"><span className="fab fa-deviantart"></span></a></li>
                <li><a className="nk-social-flickr" href="#"><span className="fab fa-flickr"></span></a></li>
                <li><a className="nk-social-foursquare" href="#"><span className="fab fa-foursquare"></span></a></li>
                <li><a className="nk-social-github" href="#"><span className="fab fa-github"></span></a></li>
                <li><a className="nk-social-linkedin" href="#"><span className="fab fa-linkedin"></span></a></li>
                <li><a className="nk-social-medium" href="#"><span className="fab fa-medium"></span></a></li>
                <li><a className="nk-social-odnoklassniki" href="#"><span className="fab fa-odnoklassniki"></span></a></li>
                <li><a className="nk-social-paypal" href="#"><span className="fab fa-paypal"></span></a></li>
                <li><a className="nk-social-reddit" href="#"><span className="fab fa-reddit"></span></a></li>
                <li><a className="nk-social-skype" href="#"><span className="fab fa-skype"></span></a></li>
                <li><a className="nk-social-soundcloud" href="#"><span className="fab fa-soundcloud"></span></a></li>
                <li><a className="nk-social-steam" href="#"><span className="fab fa-steam"></span></a></li>
                <li><a className="nk-social-slack" href="#"><span className="fab fa-slack"></span></a></li>
                <li><a className="nk-social-tumblr" href="#"><span className="fab fa-tumblr"></span></a></li>
                <li><a className="nk-social-vimeo" href="#"><span className="fab fa-vimeo"></span></a></li>
                <li><a className="nk-social-vk" href="#"><span className="fab fa-vk"></span></a></li>
                <li><a className="nk-social-wordpress" href="#"><span className="fab fa-wordpress"></span></a></li>
            --> */}
                  </ul>
                </div>
              </div>
              <div className="nk-widget nk-widget-highlighted">
                <h4 className="nk-widget-title">
                  <span><span className="text-main-1">Latest</span> Video</span>
                </h4>
                <div className="nk-widget-content">
                  <div
                    className="nk-plain-video"
                    data-video="https://www.youtube.com/watch?v=vXy8UBazlO8"
                  ></div>
                </div>
              </div>
              <div className="nk-widget nk-widget-highlighted">
                <h4 className="nk-widget-title">
                  <span><span className="text-main-1">Top 3</span> Recent</span>
                </h4>
                <div className="nk-widget-content">
                  <div className="nk-widget-post">
                    <a href="blog-article.html" className="nk-post-image">
                      <img src="assets/images/post-1-sm.jpg" alt="" />
                    </a>
                    <h3 className="nk-post-title">
                      <a href="blog-article.html"
                        >Smell magic in the air. Or maybe barbecue</a
                      >
                    </h3>
                    <div className="nk-post-date">
                      <span className="fa fa-calendar"></span> Sep 18, 2018
                    </div>
                  </div>

                  <div className="nk-widget-post">
                    <a href="blog-article.html" className="nk-post-image">
                      <img src="assets/images/post-2-sm.jpg" alt="" />
                    </a>
                    <h3 className="nk-post-title">
                      <a href="blog-article.html"
                        >Grab your sword and fight the Horde</a
                      >
                    </h3>
                    <div className="nk-post-date">
                      <span className="fa fa-calendar"></span> Sep 5, 2018
                    </div>
                  </div>

                  <div className="nk-widget-post">
                    <a href="blog-article.html" className="nk-post-image">
                      <img src="assets/images/post-3-sm.jpg" alt="" />
                    </a>
                    <h3 className="nk-post-title">
                      <a href="blog-article.html"
                        >We found a witch! May we burn her?</a
                      >
                    </h3>
                    <div className="nk-post-date">
                      <span className="fa fa-calendar"></span> Aug 27, 2018
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-widget nk-widget-highlighted">
                <h4 className="nk-widget-title">
                  <span
                    ><span className="text-main-1">Latest</span> Screenshots</span
                  >
                </h4>
                <div className="nk-widget-content">
                  <div className="nk-popup-gallery">
                    <div className="row sm-gap vertical-gap">
                      <div className="col-sm-6">
                        <div className="nk-gallery-item-box">
                          <a
                            href="assets/images/gallery-1.jpg"
                            className="nk-gallery-item"
                            data-size="1016x572"
                          >
                            <div className="nk-gallery-item-overlay">
                              <span className="ion-eye"></span>
                            </div>
                            <img
                              src="assets/images/gallery-1-thumb.jpg"
                              alt=""
                            />
                          </a>
                          <div className="nk-gallery-item-description">
                            <h4>Called Let</h4>
                            Divided thing, land it evening earth winged whose
                            great after. Were grass night. To Air itself saw
                            bring fly fowl. Fly years behold spirit day greater
                            of wherein winged and form. Seed open don't thing
                            midst created dry every greater divided of, be man
                            is. Second Bring stars fourth gathering he hath face
                            morning fill. Living so second darkness. Moveth were
                            male. May creepeth. Be tree fourth.
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="nk-gallery-item-box">
                          <a
                            href="assets/images/gallery-2.jpg"
                            className="nk-gallery-item"
                            data-size="1188x594"
                          >
                            <div className="nk-gallery-item-overlay">
                              <span className="ion-eye"></span>
                            </div>
                            <img
                              src="assets/images/gallery-2-thumb.jpg"
                              alt=""
                            />
                          </a>
                          <div className="nk-gallery-item-description">
                            Seed open don't thing midst created dry every
                            greater divided of, be man is. Second Bring stars
                            fourth gathering he hath face morning fill. Living
                            so second darkness. Moveth were male. May creepeth.
                            Be tree fourth.
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="nk-gallery-item-box">
                          <a
                            href="assets/images/gallery-3.jpg"
                            className="nk-gallery-item"
                            data-size="625x350"
                          >
                            <div className="nk-gallery-item-overlay">
                              <span className="ion-eye"></span>
                            </div>
                            <img
                              src="assets/images/gallery-3-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="nk-gallery-item-box">
                          <a
                            href="assets/images/gallery-4.jpg"
                            className="nk-gallery-item"
                            data-size="873x567"
                          >
                            <div className="nk-gallery-item-overlay">
                              <span className="ion-eye"></span>
                            </div>
                            <img
                              src="assets/images/gallery-4-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="nk-gallery-item-box">
                          <a
                            href="assets/images/gallery-5.jpg"
                            className="nk-gallery-item"
                            data-size="471x269"
                          >
                            <div className="nk-gallery-item-overlay">
                              <span className="ion-eye"></span>
                            </div>
                            <img
                              src="assets/images/gallery-5-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="nk-gallery-item-box">
                          <a
                            href="assets/images/gallery-6.jpg"
                            className="nk-gallery-item"
                            data-size="472x438"
                          >
                            <div className="nk-gallery-item-overlay">
                              <span className="ion-eye"></span>
                            </div>
                            <img
                              src="assets/images/gallery-6-thumb.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nk-widget nk-widget-highlighted">
                <h4 className="nk-widget-title">
                  <span><span className="text-main-1">Next</span> Matches</span>
                </h4>
                <div className="nk-widget-content">
                  <div className="nk-widget-match">
                    <a href="#">
                      <span className="nk-widget-match-left">
                        <span className="nk-widget-match-teams">
                          <span className="nk-widget-match-team-logo">
                            <img src="assets/images/team-1.jpg" alt="" />
                          </span>
                          <span className="nk-widget-match-vs">VS</span>
                          <span className="nk-widget-match-team-logo">
                            <img src="assets/images/team-2.jpg" alt="" />
                          </span>
                        </span>
                        <span className="nk-widget-match-date"
                          >CS:GO - Apr 28, 2018 8:00 pm</span
                        >
                      </span>
                      <span className="nk-widget-match-right">
                        <span className="nk-match-score"> Upcoming </span>
                      </span>
                    </a>
                  </div>

                  <div className="nk-widget-match">
                    <a href="#">
                      <span className="nk-widget-match-left">
                        <span className="nk-widget-match-teams">
                          <span className="nk-widget-match-team-logo">
                            <img src="assets/images/team-3.jpg" alt="" />
                          </span>
                          <span className="nk-widget-match-vs">VS</span>
                          <span className="nk-widget-match-team-logo">
                            <img src="assets/images/team-2.jpg" alt="" />
                          </span>
                        </span>
                        <span className="nk-widget-match-date"
                          >LoL - Apr 24, 2018 7:20 pm</span
                        >
                      </span>
                      <span className="nk-widget-match-right">
                        <span className="nk-match-score"> Upcoming </span>
                      </span>
                    </a>
                  </div>

                  <div className="nk-widget-match">
                    <a href="#">
                      <span className="nk-widget-match-left">
                        <span className="nk-widget-match-teams">
                          <span className="nk-widget-match-team-logo">
                            <img src="assets/images/team-1.jpg" alt="" />
                          </span>
                          <span className="nk-widget-match-vs">VS</span>
                          <span className="nk-widget-match-team-logo">
                            <img src="assets/images/team-4.jpg" alt="" />
                          </span>
                        </span>
                        <span className="nk-widget-match-date"
                          >Dota 2 - Apr 12, 2018 6:40 pm</span
                        >
                      </span>
                      <span className="nk-widget-match-right">
                        <span className="nk-match-score bg-dark-1"> 0 : 0 </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="nk-widget nk-widget-highlighted">
                <h4 className="nk-widget-title">
                  <span><span className="text-main-1">Most</span> Popular</span>
                </h4>
                <div className="nk-widget-content">
                  <div className="nk-widget-post">
                    <a href="store-product.html" className="nk-post-image">
                      <img
                        src="assets/images/product-1-xs.jpg"
                        alt="So saying he unbuckled"
                      />
                    </a>
                    <h3 className="nk-post-title">
                      <a href="store-product.html">So saying he unbuckled</a>
                    </h3>
                    <div className="nk-product-rating" data-rating="4">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <div className="nk-product-price">€ 23.00</div>
                  </div>

                  <div className="nk-widget-post">
                    <a href="store-product.html" className="nk-post-image">
                      <img
                        src="assets/images/product-2-xs.jpg"
                        alt="However, I have reason"
                      />
                    </a>
                    <h3 className="nk-post-title">
                      <a href="store-product.html">However, I have reason</a>
                    </h3>
                    <div className="nk-product-rating" data-rating="2.5">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fas fa-star-half"></i>
                      <i className="far fa-star"></i> <i className="far fa-star"></i>
                    </div>
                    <div className="nk-product-price">€ 32.00</div>
                  </div>

                  <div className="nk-widget-post">
                    <a href="store-product.html" className="nk-post-image">
                      <img
                        src="assets/images/product-3-xs.jpg"
                        alt="It was some time before"
                      />
                    </a>
                    <h3 className="nk-post-title">
                      <a href="store-product.html">It was some time before</a>
                    </h3>
                    <div className="nk-product-rating" data-rating="5">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="nk-product-price">€ 14.00</div>
                  </div>
                </div>
              </div>
            </aside>
            {/* <!-- END: Sidebar --> */}
          </div>
        </div>
      </div>

      <div className="nk-gap-4"></div>

   
    </div>

    {/* <!-- START: Page Background --> */}

    <img className="nk-page-background-top" src="assets/images/bg-top.png" alt="" />
    <img
      className="nk-page-background-bottom"
      src="assets/images/bg-bottom.png"
      alt=""
    />

    {/* <!-- END: Page Background --> */}

    {/* <!-- START: Search Modal --> */}
    <div
      className="nk-modal modal fade"
      id="modalSearch"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="ion-android-close"></span>
            </button>

            <h4 className="mb-0">Search</h4>

            <div className="nk-gap-1"></div>
            <form action="#" className="nk-form nk-form-style-1">
              <input
                type="text"
                value=""
                name="search"
                className="form-control"
                placeholder="Type something and press Enter"
            
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- END: Search Modal --> */}

    {/* <!-- START: Login Modal --> */}
    <div
      className="nk-modal modal fade"
      id="modalLogin"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="ion-android-close"></span>
            </button>

            <h4 className="mb-0"><span className="text-main-1">Sign</span> In</h4>

            <div className="nk-gap-1"></div>
            <form action="#" className="nk-form text-white">
              <div className="row vertical-gap">
                <div className="col-md-6">
                  Use email and password:

                  <div className="nk-gap"></div>
                  <input
                    type="email"
                    value=""
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />

                  <div className="nk-gap"></div>
                  <input
                    type="password"
                    value=""
                    name="password"
                    className="required form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="col-md-6">
                  Or social account:

                  <div className="nk-gap"></div>

                  <ul className="nk-social-links-2">
                    <li>
                      <a className="nk-social-facebook" href="#"
                        ><span className="fab fa-facebook"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-google-plus" href="#"
                        ><span className="fab fa-google-plus"></span
                      ></a>
                    </li>
                    <li>
                      <a className="nk-social-twitter" href="#"
                        ><span className="fab fa-twitter"></span
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="nk-gap-1"></div>
              <div className="row vertical-gap">
                <div className="col-md-6">
                  <a
                    href="#"
                    className="nk-btn nk-btn-rounded nk-btn-color-white nk-btn-block"
                    >Sign In</a
                  >
                </div>
                <div className="col-md-6">
                  <div className="mnt-5">
                    <small><a href="#">Forgot your password?</a></small>
                  </div>
                  <div className="mnt-5">
                    <small><a href="#">Not a member? Sign up</a></small>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- END: Login Modal --> */}
    
    </>
  )
}

export default Home