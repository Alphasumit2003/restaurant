import React from 'react';
import one from '../image/sprite.jpg';
import two from '../image/redbull.jpg';
import three from '../image/lemon iced tea.jpg';
import four from '../image/redbull.jpg';
import five from '../image/water.webp';
import six from '../image/ale beer.jpg';
import seven from '../image/pina colada.jpg';
import eight from '../image/cococola.jpeg';
import nine from '../image/corona drink.jpg';
import ten from '../image/lemon iced tea.jpg';
import eleven from '../image/water.webp';
import tweleve from '../image/ale beer.jpg';
import Card from 'react-bootstrap/Card';


function Menu3Text() {
    return(
        <div >
        <br />
        <br />
        <br />
        
        <div className='fullcard'>
          <Card>
          <img src={one} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Steam Momos</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={two} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Chowmein</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={three} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Cheese Burger</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={four} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Hamburger</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

          <div className='fullcard'>
          <Card>
          <img src={five} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Spring Roll</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={six} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Pizza</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={seven} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Onion Pizza</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={eight} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Butter-Scoch</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className='fullcard'>
          <Card>
          <img src={nine} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Mashed Potato</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={ten} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Golgappe</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={eleven} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Manchurian</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <img src={tweleve} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title className='fontsize'>Corn-Piza</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <br />
               <span className='font-weight-bold '>Price : 20 Rs</span> 
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        
        
            <br />
        
            <br />
        </div>
);
}
export default Menu3Text;