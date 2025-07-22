import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#about h2', {
      type: 'words'
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center'
      }
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
      })
      .from('.top-grid div, .bottom-grid div', {
        opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
      }, '-=0.5');
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Authentic Moroccan Cuisine</p>
            <h2>
              Where tradition meets flavor <span className="text-white">-</span>
              from spice to soul
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every tajine we craft reflects our dedication to authentic Moroccan tradition — from hand-selected spices to slow-cooked perfection. This care transforms simple ingredients into an unforgettable culinary journey through Morocco.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                Over 12,000 satisfied food lovers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="image-grille-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="image-grille-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="image-grille-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="image-grille-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="image-grille-4" />
        </div>
      </div>

    </div>
  );
};

export default About;
