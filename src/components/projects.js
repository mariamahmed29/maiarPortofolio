import CarouselProjects from './Carousel';

function ImageProjects({ images, category }) {
    return (
        <div className={`projects-container ${category}`}>
            <CarouselProjects images={images} />
        </div>
    );
}

export default ImageProjects;