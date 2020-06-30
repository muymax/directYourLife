import React, { Component } from 'react';
import Jumbotron from '../../components/layouts/Jumbotron.js';
import Accordd from "../layouts/Faq.js";
import { Container } from 'react-bootstrap';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import BootstrapCarousel from "../layouts/Carousel.js";


class Home extends Component {
  render() {
    return (
      <div>
       
        <Container fluid className="home" >
        <Jumbotron />
        <BootstrapCarousel />
        <h2>Home page</h2>
        <br></br>
        <p style={{fontFamily:'helvetica'}}>
          Lorem ipsum dolor sit amet, nunc sollicitudin tempor ullamcorper, a
          magna senectus wisi. Luctus blandit turpis id, id turpis vestibulum,
          minim amet suscipit turpis eu. Eget egestas a vestibulum quisque sed
          nemo, justo ipsum vitae odio orci placerat, quisque modi sapien lectus
          egestas. Pretium hac a hymenaeos at, id neque natoque lectus ultrices.
          Natoque pellentesque lacinia urna turpis consequuntur, leo nisl
          magnam, lorem amet, gravida scelerisque, nunc eu integer tellus morbi
          lectus. Nullam adipiscing mauris in varius lectus lorem, orci rutrum a
          aliquam, vestibulum leo nulla, vitae pulvinar eget. Gravida rhoncus
          scelerisque ultricies erat leo ultrices, eget ridiculus, nonummy ac
          adipiscing, ut ultrices nec congue, et aliquam consectetuer. Egestas
          neque molestie donec ue scelerisque sit, felis lacus malesuada
          praesent et, duis rhoncus mi vel natoque auctor wisi. Quis lobortis,
          deserunt odio aliquet, adipiscing integer nullam elit mollis, faucibus
          ligula malesuada morbi, magnis donec felis arcu augue. Scelerisque
          viverra vivamus et lectus ratione, mollis rerum maecenas. Aliquam
          consequuntur pellentesque mauris integer hendrerit elementum. Et
          rutrum. Habitasse neque egestas morbi morbi torquent et, nullam mi
          quam ut sed aliquam, fringilla vitae metus. Donec mattis faucibus.
          Convallis fusce vel est sit convallis, diam mi diam vulputate nonummy,
          est tellus, tristique nonummy per nibh. Et eget justo urna enim,
          ridiculus expedita a, congue tempus augue in quam rhoncus, in et neque
          orci vitae sem, aliquam ligula. Massa vestibulum, sed iaculis
          tincidunt nec urna sit ac.
        </p>
        <p style={{fontFamily:'helvetica'}}>
          Lorem ipsum dolor sit amet, nunc sollicitudin tempor ullamcorper, a
          magna senectus wisi. Luctus blandit turpis id, id turpis vestibulum,
          minim amet suscipit turpis eu. Eget egestas a vestibulum quisque sed
          nemo, justo ipsum vitae odio orci placerat, quisque modi sapien lectus
          egestas. Pretium hac a hymenaeos at, id neque natoque lectus ultrices.
          Natoque pellentesque lacinia urna turpis consequuntur, leo nisl
          magnam, lorem amet, gravida scelerisque, nunc eu integer tellus morbi
          lectus. Nullam adipiscing mauris in varius lectus lorem, orci rutrum a
          aliquam, vestibulum leo nulla, vitae pulvinar eget. Gravida rhoncus
          scelerisque ultricies erat leo ultrices, eget ridiculus, nonummy ac
          adipiscing, ut ultrices nec congue, et aliquam consectetuer. Egestas
          neque molestie donec ue scelerisque sit, felis lacus malesuada
          praesent et, duis rhoncus mi vel natoque auctor wisi. Quis lobortis,
          deserunt odio aliquet, adipiscing integer nullam elit mollis, faucibus
          ligula malesuada morbi, magnis donec felis arcu augue. Scelerisque
          viverra vivamus et lectus ratione, mollis rerum maecenas. Aliquam
          consequuntur pellentesque mauris integer hendrerit elementum. Et
          rutrum. Habitasse neque egestas morbi morbi torquent et, nullam mi
          quam ut sed aliquam, fringilla vitae metus. Donec mattis faucibus.
          Convallis fusce vel est sit convallis, diam mi diam vulputate nonummy,
          est tellus, tristique nonummy per nibh. Et eget justo urna enim,
          ridiculus expedita a, congue tempus augue in quam rhoncus, in et neque
          orci vitae sem, aliquam ligula. Massa vestibulum, sed iaculis
          tincidunt nec urna sit ac.
        </p>
        <p style={{fontFamily:'helvetica'}}>
          Lorem ipsum dolor sit amet, nunc sollicitudin tempor ullamcorper, a
          magna senectus wisi. Luctus blandit turpis id, id turpis vestibulum,
          minim amet suscipit turpis eu. Eget egestas a vestibulum quisque sed
          nemo, justo ipsum vitae odio orci placerat, quisque modi sapien lectus
          egestas. Pretium hac a hymenaeos at, id neque natoque lectus ultrices.
          Natoque pellentesque lacinia urna turpis consequuntur, leo nisl
          magnam, lorem amet, gravida scelerisque, nunc eu integer tellus morbi
          lectus. Nullam adipiscing mauris in varius lectus lorem, orci rutrum a
          aliquam, vestibulum leo nulla, vitae pulvinar eget. Gravida rhoncus
          scelerisque ultricies erat leo ultrices, eget ridiculus, nonummy ac
          adipiscing, ut ultrices nec congue, et aliquam consectetuer. Egestas
          neque molestie donec ue scelerisque sit, felis lacus malesuada
          praesent et, duis rhoncus mi vel natoque auctor wisi. Quis lobortis,
          deserunt odio aliquet, adipiscing integer nullam elit mollis, faucibus
          ligula malesuada morbi, magnis donec felis arcu augue. Scelerisque
          viverra vivamus et lectus ratione, mollis rerum maecenas. Aliquam
          consequuntur pellentesque mauris integer hendrerit elementum. Et
          rutrum. Habitasse neque egestas morbi morbi torquent et, nullam mi
          quam ut sed aliquam, fringilla vitae metus. Donec mattis faucibus.
          Convallis fusce vel est sit convallis, diam mi diam vulputate nonummy,
          est tellus, tristique nonummy per nibh. Et eget justo urna enim,
          ridiculus expedita a, congue tempus augue in quam rhoncus, in et neque
          orci vitae sem, aliquam ligula. Massa vestibulum, sed iaculis
          tincidunt nec urna sit ac.
        </p>
        
        </Container>
        <br />
        <h2>Frequently Asked Questions (FAQs)</h2>
        <br />
        <Accordd />
        <br />
				<br />
				<br />
				<h2>Subscribe to our Newsletter</h2>
        <br />
				<MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
				<br />
				<br />
       
        <br />
      </div>
    );
  }
}

export default Home;
