import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx';
class App extends React.Component {
  constructor (props) {
    super(props);
    this.infoIp = 'http://18.118.36.172:9999';
    this.overviewIp = 'http://54.151.82.224:80';
    this.galleryIp = 'http://13.57.239.189:80';
    this.reviewIp = 'http://3.16.203.185:3004';
  }

  //chagnes for git push for route change?
  loadScript(ipname, param) {
    const script = document.createElement("script");
    script.src = `${ipname}${param}`;
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidMount () {
    this.loadScript(this.infoIp, '/information.js');
    this.loadScript(this.overviewIp, '/overview.js');
    this.loadScript(this.galleryIp, '/gallery.js');
    this.loadScript(this.reviewIp, '/customerreviews.js');
  }

  render() {
    return (<>
    <link rel="stylesheet" type="text/css" href={`${this.infoIp}/styles.css`} />
    <link rel="stylesheet" type="text/css" href={`${this.overviewIp}/stylesheet.css`} />
    <link rel="stylesheet" type="text/css" href={`${this.reviewIp}public/style.css`} />
    <Header />
    <div id="main">
      <div id="category">
        <a href="#">Movies &amp; TV</a> &gt;
        <a href="#">Movies</a>
      </div>
      <div id="overview">
        <div className="left-col">
          <div id="Gallery" />
        </div>
        <div id="product-overview" />
      </div>
      <div id="information" />
      <div id="reviews" />
    </div>
    <Footer />
  </>)
    }
}

export default App;
