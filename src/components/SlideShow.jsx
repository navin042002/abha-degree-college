import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideImages } from "../constants";
const SlideShow = (className) => {
  return (
    <Slide >
      {slideImages.map((slideImage, index) => (
        <div key={index} className={`h-[150px] sm:h-[400px] 
        flex justify-center  items-center ${className}`}>
          <img
            src={slideImage.url}
            alt={slideImage.caption}
            height={400}
            className="h-full w-full"
          />
        </div>
      ))}
    </Slide>
  );
};

export default SlideShow;
