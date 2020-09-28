import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "./assets/images/new-deal.jpg",
    altText: "New Deal",
    header: "New Deal only at 3.99€",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    src: "./assets/images/party.jpg",
    altText: "Party",
    header: "Want to do party?",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    src: "./assets/images/pleasant-view.jpg",
    altText: "Pleasant View",
    header: "A Pleasant View!",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
];

const CarouselComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.header} captionText={item.text} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselComponent;

// function Carousel() {
//   return (
//     <div>
//       <div class="row row-content">
//         <div class="col">
//           <div id="mycarousel" class="carousel slide" data-ride="carousel">
//             <div class="carousel-inner" role="listbox">

//               <div class="carousel-item active">
//                 <img
//                   src="./assets/images/feedback1.jpg"
//                   alt="uthappizza"
//                   class="d-block img-fluid"
//                 />
//                 <div class="carousel-caption d-none d-md-block">
//                   <h2>
//                     Uthappizza <span class="badge badge-danger">HOT</span>
//                     <span class="badge badge-pill badge-secondary">$4.99</span>
//                   </h2>
//                   <p class="d-none d-sm-block">
//                     A unique combination of Indian Uthappam (pancake) and
//                     Italian pizza, topped with Cerignola olives, ripe vine
//                     cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo
//                     Paneer.
//                   </p>
//                 </div>
//               </div>

//               <div class="carousel-item">
//                 <img
//                   src="./assets/images/intro.png"
//                   alt="buffet"
//                   class="d-block img-fluid"
//                 />
//                 <div class="carousel-caption d-none d-md-block">
//                   <h2>
//                     Weekend Grand Buffet
//                     <span class="badge badge-danger">NEW</span>
//                   </h2>
//                   <p class="d-none d-sm-block">
//                     Featuring mouthwatering combinations with a choice of five
//                     different salads, six enticing appetizers, six main entrees
//                     and five choicest desserts. Free flowing bubbly and soft
//                     drinks. All for just $19.99 per person
//                   </p>
//                 </div>
//               </div>

//               <div class="carousel-item">
//                 <img
//                   src="./assets/images/thank-you.jpg"
//                   alt="alberto"
//                   class="d-block img-fluid"
//                 />
//                 <div class="carousel-caption d-none d-md-block">
//                   <h2 class="mt-0">Alberto Somayya</h2>
//                   <h4>Executive Chef</h4>
//                   <p class="d-none d-sm-block">
//                     Award winning three-star Michelin chef with wide
//                     International experience having worked closely with whos-who
//                     in the culinary world, he specializes in creating
//                     mouthwatering Indo-Italian fusion experiences.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <ol class="carousel-indicators">
//               <li
//                 data-target="#mycarousel"
//                 data-slide-to="0"
//                 class="active"
//               ></li>
//               <li data-target="#mycarousel" data-slide-to="1"></li>
//               <li data-target="#mycarousel" data-slide-to="2"></li>
//             </ol>
//             <a
//               href="#mycarousel"
//               class="carousel-control-prev"
//               role="button"
//               data-slide="prev"
//             >
//               <span class="carousel-control-prev-icon"></span>
//             </a>
//             <a
//               href="#mycarousel"
//               class="carousel-control-next"
//               role="button"
//               data-slide="next"
//             >
//               <span class="carousel-control-next-icon"></span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;
