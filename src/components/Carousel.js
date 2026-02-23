import Carousel from 'react-bootstrap/Carousel';

function CarouselProjects({ images }) {
    return (
        <Carousel data-bs-theme="dark" variant="dark" className='carousel-container'>
        {images.map((img, i) => (
            <Carousel.Item key={i}>
            <img
                className="d-block mx-auto project-img"
                src={img}
                alt={`Slide ${i + 1}`}
            />
            </Carousel.Item>
        ))}
        </Carousel>
    );
}


export default CarouselProjects;
