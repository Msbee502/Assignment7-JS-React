import Glassbottle from '../assets/Glassbottle.png';
import Healthydrink from '../assets/Healthydrink.png';
import Healthyfood from '../assets/Healthyfood.png';
import Workout from '../assets/Workout.png';
import Teapot from '../assets/Teapot.png';

function Gallery (){

return (

    <div className='Gallery'>
        <h1>Glass Gallery</h1>
        <p>Some text</p>
      
        <div className='firstpic'>
            <img src={Glassbottle} alt="Glassbottle" width={150} height={150}/>
            <h3>Some text</h3>
            <p>Lorem ipsum dolor sit!</p>
        </div>

        <div className='secondpic'>
            <img src={Healthydrink} alt="Glass with healthy drink" width={150} height={150} />
            <h3>Some text</h3>
            <p>Lorem ipsum dolor sit!</p>
         </div>
      
        <div className='thirdpic'>
            <img src={Healthyfood} alt="An old book on a table" width={150} height={150} />
            <h3>Some text</h3>
            <p>Lorem ipsum dolor sit!</p>
        </div>

        <div className='fourthpic'>
            <img src={Workout} alt="An old book on a table" width={150} height={150} />
            <h3>Some text</h3>
            <p>Lorem ipsum dolor sit!</p>
        </div>

        <div className='fifthpic'>
            <img src={Teapot} alt="Tea in pot" width={150} height={150} />
            <h3>Some text</h3>
            <p>Lorem ipsum dolor sit!</p>
        </div>

        </div>


    );
    
}



export default Gallery;
