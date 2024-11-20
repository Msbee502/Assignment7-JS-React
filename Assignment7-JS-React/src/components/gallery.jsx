import Glassbottle from '../assets/Glassbottle.png';
import Healthydrink from '../assets/Healthydrink.png';
import Healthyfood from '../assets/Healthyfood.png';
import Workout from '../assets/Workout.png';
import Teapot from '../assets/Teapot.png';


function Gallery (){

return (

    <div className='Gallery'>
        <h1>Our products and services</h1>
        <p></p>
      
        <div className='firstPic'>
            <img src={Glassbottle} alt="Glassbottle" className='glassBottle'/>
            <h3>Herb Tinktures</h3>
            <p>From $8.00</p>
        </div>

        <div className='secondPic'>
            <img src={Healthydrink} alt="Glass with healthy drink" className='healthyDrink'/>
            <h3>Smoothie Powders</h3>
            <p>From $8.99</p>
         </div>
      
        <div className='thirdpic'>
            <img src={Healthyfood} alt="An old book on a table" className='healthyFood' />
            <h3>Organic Produce</h3>
            <p>From $3.99</p>
        </div>

        <div className='fifthpic'>
            <img src={Teapot} alt="Tea in pot" className='teaPot'/>
            <h3>Our very own teablends!</h3>
            <p>From $5.99</p>
        </div>

        <div className='fourthpic'>
            <img src={Workout} alt="An old book on a table" className='workOut' />
            <h3>Health-Coach</h3>
            <p>Contact us for more info</p>
        </div>       

        </div>


    );
    
}



export default Gallery;
