import { useEffect } from "react";

class CardTilt {
  constructor(element) {
    this.element = element;
    this.settings = {
      scale: 1.1,
      perspective: 1000,
      max: 15,
      glare: true,
      maxGlare: 0.5,
    };

    this.boundOnMouseEnter = this.onMouseEnter.bind(this);
    this.boundOnMouseMove = this.onMouseMove.bind(this);
    this.boundOnMouseLeave = this.onMouseLeave.bind(this);

    if (this.settings.glare) {
      this.prepareGlare();
    }

    this.init();
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener("mouseenter", this.boundOnMouseEnter);
    this.element.addEventListener("mousemove", this.boundOnMouseMove);
    this.element.addEventListener("mouseleave", this.boundOnMouseLeave);
  }

  removeEventListeners() {
    this.element.removeEventListener("mouseenter", this.boundOnMouseEnter);
    this.element.removeEventListener("mousemove", this.boundOnMouseMove);
    this.element.removeEventListener("mouseleave", this.boundOnMouseLeave);
  }

  onMouseEnter(event) {
    this.update(event);
  }

  onMouseMove(event) {
    this.update(event);
  }

  onMouseLeave() {
    this.reset();
  }

  update(event) {
    const rect = this.element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tiltX = (x - 0.5) * this.settings.max;
    const tiltY = (y - 0.5) * this.settings.max;

    this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${this.settings.scale})`;

    if (this.settings.glare) {
      const glareOpacity = y * this.settings.maxGlare;
      this.glareElement.style.opacity = glareOpacity;
    }
  }

  reset() {
    this.element.style.transform = "";
    if (this.settings.glare) {
      this.glareElement.style.opacity = "0";
    }
  }

  prepareGlare() {
    const glareElement = document.createElement("div");
    glareElement.classList.add("glare");
    Object.assign(glareElement.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)",
      opacity: "0",
      transition: "opacity 0.5s",
      pointerEvents: "none",
    });
    this.element.appendChild(glareElement);
    this.glareElement = glareElement;
  }
}

function useCardTilt(elementRef) {
  useEffect(() => {
    const element = elementRef.current;
    const tilt = new CardTilt(element);

    return () => {
      tilt.reset();
      tilt.removeEventListeners();
    };
  }, [elementRef]);

  return elementRef;
}

export default useCardTilt;
