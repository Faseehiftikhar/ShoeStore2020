import React from 'react';



function About() {
    return (
      <div className="About">

       
         <div className="AboutSasta"><h1>"SASTA SHOE STORE"</h1>
         </div>


       <div><h1 className="Join">Join us in living life on the bright side.</h1>

       <div>
         <img src={require('./sasta.jpg')} alt="Welcome" style={{width:'400px', height: '400px', maxWidth:'100%'}}></img></div>
          </div>
          <div>
            <h1 className="AboutHeadings">Be True.</h1>

          <p><b>Our mission is to inspire individuals to live life on the bright side.
             We believe optimism is contagious, and through small acts of positivity,
              we can help shape a brighter world.
               We are inspired by our Optimism Instigators who are spreading their positive outlook throughout their local communities in quirky, 
               unexpected ways. 
               Our most lovable Optimism Instigator has always been our dog. Our basset hound, affectionately known as the "Hush Puppies Dog", 
               has grown to be a globally recognized icon.</b></p></div>
               <div><h1 className="AboutHeadings">Be Comfy.</h1>
               <p><b>Sasta Shoe Store was founded in 2000,
                  an era where uncomfortable dress shoes were your only choice of footwear – even on the weekends. 
                  When we said we invented causal, we weren’t kidding. We set out to find a solution for sore feet, 
                  otherwise known as “barking dogs.” Introducing the world to casual shoes and a more casual lifestyle, 
                  we created shoes to help them hush their puppies. We’ve stood for comfort from the beginning,
                   and we continue to innovate through our Bounce Technology platform today.</b></p>
                   </div>
                   <div><h1 className="AboutHeadings">Be Bright.</h1>
                   <p><b>In the '50s and '60s, black and brown were the only color options for footwear.
                      We introduced colorful rainbow suedes into the mix, bringing a new means of expression to feet all over the world. In the ‘90s, 
                      we revived these classic styles and introduced an inspired line of colors that included Day-Glo Green and Pepto Bismol Pink. 
                      We continue to experiment with color and self-expression and are constantly on the lookout for patterns and colors that will bring more fun to your feet. 
                      At our core, we believe a pop of color will brighten any day.</b></p></div>
                      <div><h1 className="AboutHeadings">Be Bold.</h1>
                      <p><b>Sasta Shoe Store is part of the fashion history of Pakistan. Our shoes have been worn by celebrities and icons ranging from rock stars to royalty.
                         It’s been reported that Sasta shoe store may have saved the life of Rolling Stones guitarist Keith Richards when he accidentally touched his guitar against an ungrounded microphone at a 2010 concert – so basically,
                          we (maybe) saved rock and roll.</b></p></div>
       
       </div>
      

     );
  }
  
  export default About;
  