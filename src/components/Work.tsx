import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Project {
  name: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Online Session Workshop",
    category: "Social Media Poster",
    tools: "Adobe Photoshop, Canva, Nano Banana Pro",
    image: "/images/Project-01.png.PNG",
  },
  {
    name: "Festive/Greeting Poster",
    category: "Social Media Poster",
    tools: "Adobe Photoshop, Canva, Nano Banana",
    image: "/images/Project-02.png.png",
  },
  {
    name: "Club Committee Announcement Poster",
    category: "Social Media Poster",
    tools: "Adobe Photoshop, Canva, Nano Banana",
    image: "/images/Project-03.png.png",
  },
  {
    name: "Deadline Poster",
    category: "Social Media Poster",
    tools: "Adobe Photoshop, Canva, Nano Banana",
    image: "/images/Project-04.png.PNG",
  },
  {
    name: "Session Glimpse",
    category: "Social Media Poster",
    tools: "Adobe Photoshop, Canva, Nano Banana",
    image: "/images/Project-05.png.PNG",
  },
  {
    name: "Historical Nation Event",
    category: "Social Media Poster",
    tools: "Adobe Photoshop, Canva, Nano Banana",
    image: "/images/Project-06.png.PNG",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
        pinType: "transform",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
