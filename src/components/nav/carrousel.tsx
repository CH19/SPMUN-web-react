import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import { Option } from '../../types/Data';
import { carrouselImg } from '../../types/comites';
export default function Carrousel() {
    const newImgs = carrouselImg;
    // const image = 'data:image/jpeg;base64,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'
    // const data = [1,2,3,4,5];
    return(<>
        <div className='carrouselContainer'>
        <Carousel  infiniteLoop interval={3000} transitionTime={1000} width={`${innerWidth < 600 ? '90vw' : '500px'}`} ariaLabel='Hola' centerSlidePercentage={4} >               
        {newImgs.map(e => <Strucutre text={e.text} link={e.link} ></Strucutre>)}

        </Carousel>
        </div>
    </>)
}

function Strucutre(props: Option){
    return (<>
                <figure style={{width: '100%', height: '100%', background: 'red'}}>
                    <img  style={{
                        width: '100%',
                        height: '100%',
                        objectFit: `${props.text == '19' ? 'fill' : 'cover'}`
                        }} alt={props.text} src={props.link} />
                </figure>

    </>)
}