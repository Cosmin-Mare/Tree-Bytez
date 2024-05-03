"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Accordion from "@/components/accordion";
export default function Home() {
  const sealRef = useRef(null);
  const envelopeTriangleRef = useRef(null);
  const invitationRef = useRef(null);
  const envelopeRef = useRef(null);
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Cum mă înscriu?",
      data: (
        <p>
          Completează{" "}
          <a href="https://docs.google.com/forms/d/14t1zvrzF6zfV1pE4-Tp0MFPPNhPRJS31MUunbCDOBp0/edit?pli=1">
            acest formular
          </a>{" "}
          pentru a te înscrie gratuit! Locurile sunt limitate, deci grăbește-te
        </p>
      ),
      isOpen: false,
    },
    {
      key: 2,
      title: "Pot să particip la acest hackathon?",
      data: (
        <p>
          Acest eveniment este deschis pentru toți elevii care sunt în liceu sau
          gimnaziu, dar ne așteptăm ca majoritatea participanților sa fie din
          liceu (dar asta nu înseamnă că nu poți veni dacă ești în gimnaziu).
        </p>
      ),
      isOpen: false,
    },
    {
      key: 3,
      title: "Ce nivel de experiență este potrivit?",
      data: (
        <p>
          Acest eveniment este pentru toata lumea, asta înseamnă că ești
          binevenit indiferent de nivelul tău de experiență, chiar dacă nu ai
          văzut nicio linie de cod în viața ta, sau chiar dacă deja te antrenezi
          intens pe partea de programare. Chiar daca majoritatea participanților
          vor avea un nivel de experiență de aproape 0,ii aspteptam si pe cei
          mai experimentati deoarece si ei vor avea ceva de invatat.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 4,
      title: "Ce este mai exact TreeBytez?",
      data: (
        <p>
          TreeBytez este un{" "}
          <a href="https://ro.wikipedia.org/wiki/Hackathon">
            hackathon(eveniment de programare)
          </a>{" "}
          organizat de{" "}
          <a href="https://www.instagram.com/vectorbytez/">
            un grup de adolescenți
          </a>
          , unde ne adunăm pentru 3 zile să creăm jocuri fantastice și să
          învățăm alături de cunoscători in domeniu.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 5,
      title: "Cine sunt organizatorii?",
      data: (
        <p>
          Suntem un grup de adolescenți din Dej, Cluj, pasionați de programare.
          Avem în spate ani de experiență si zeci de proiecte și suntem
          nerăbdători să împărtășim aceste cunoștințe cu tine. Aici găsiți
          Instagramul nostru, unde puteți afla mai multe detalii:{" "}
          <a href="https://www.instagram.com/vectorbytez/">vectorbytez</a>
        </p>
      ),
      isOpen: false,
    },
    {
      key: 6,
      title: "Unde și când va avea loc acest eveniment?",
      data: (
        <p>
          În weekendul din perioada 31 mai - 2 iunie te așteptăm la{" "}
          {"TreeBytez la "}
          <a href="https://bailefigacazare.ro/">Figa, Beclean</a> pentru a
          descoperi lumea magică a programării de jocuri video. Poți ajunge ori
          în 31 mai între orele 18:00-20:00, ori în 1 iunie între orele
          8:00-10:00.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 7,
      title: "Cât costă să particip?",
      data: (
        <p>
          0 lei, e gratis! Mulțumită <a href="#sponsori">sponsorilor</a>, vom
          putea aproviziona mâncare, cazare și premii pentru tot evenimentul.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 8,
      title: "Ce trebuie să aduc la eveniment?",
      data: (
        <p>
          Un laptop, încărcător, obiecte de igienă personala(periuță, pastă de
          dinți, deodorant, gel de duș, prosop, etc.)
        </p>
      ),
      isOpen: false,
    },
    {
      key: 9,
      title: "Cum o să fim cazați?",
      data: (
        <p>
          Cazarea va fi asigurată de{" "}
          <a href="https://bailefigacazare.ro/cabanele-panoramic-si-sebastian-2/casute-sebastian/">
            Căsuțele Sebastian
          </a>
          , fiecare căsuță este dotată cu un pat matrimonial (într-o căsuță vor
          dormi doar persoane de același sex), baie proprie, apă caldă.
        </p>
      ),
      isOpen: false,
    },
    {
      key: 10,
      title: "Părinții mei sunt îngrijorați. Ce pot să fac?",
      data: (
        <p>
          Suntem deschiși pentru a primi orice întrebare la adresa de email
          <a href="mailto:vectorbytez@gmail.com"> vectorbytez@gmail.com</a>, sau
          la nr de tel <a href="tel:+40760051313"> +40760051313</a>. Vom avea
          supraveghere 24/7 pe toată durata evenimentului de către voluntari,
          datorită asociației
          <a href="https://vaajutamdindej.ro/"> Vă Ajutăm din Dej</a>
        </p>
      ),
      isOpen: false,
    },
    {
      key: 11,
      title: "Am alte întrebări.",
      data: (
        <p>
          Pentru orice întrebare, poți să ne trimiți un email la{" "}
          <a href="mailto:vectorbytez@gmail.com">vectorbytez@gmail.com</a> și
          vom răspunde in maxim 24 de ore.
        </p>
      ),
      isOpen: false,
    },
  ]);

  const [time, setTime] = useState(0);
  const animationDuration = 8000;
  useEffect(() => {
    if (time > animationDuration) {
      return;
    }
    let animationProgress = time / animationDuration;
    if (animationProgress > 0.01) {
      sealRef.current.style.opacity = 0;
    } else {
      sealRef.current.style.opacity = 1;
    }
    envelopeTriangleRef.current.style.transform = `rotateX(${
      animationProgress * 3 * 360 > 180 ? 180 : animationProgress * 3 * 360
    }deg)`;

    envelopeTriangleRef.current.style.transformOrigin = "top";
    var translate = (animationProgress - 0.1) * 600;
    envelopeRef.current.style.transform = `translateY(${translate}%)`;

    if (animationProgress > 0.1) {
      envelopeTriangleRef.current.style.transform += ` translateY(${translate}%)`;
      console.log(envelopeTriangleRef.current.style.transform);
      if (translate > 140) {
        if (!invitationRef.current.className.includes("invitation-open"))
          invitationRef.current.className += " invitation-open";
        envelopeRef.current.style.display = "none";
        document.body.style.overflow = "unset";
        document.body.style.paddingBottom = "800px";
        document.getElementsByClassName("body-layer")[0]?.remove();
        document.getElementsByClassName("triangle-layer")[0]?.remove();
        document.getElementsByClassName("seal-layer")[0]?.remove();
      } else {
        invitationRef.current.className =
          invitationRef.current.className.replace(" invitation-open", "");
        envelopeRef.current.style.display = "flex";
        document.body.style.overflow = "hidden";
        document.body.style.paddingBottom = "0";
      }
    } else {
      envelopeRef.current.style.transform = `translateY(0%)`;
    }
  }, [time]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  const scrollListener = () => {
    const handleWheelEvent = () => {
      const { container, current } = parallaxRef.current;
      const scrollpercent =
        current / (container.current.scrollHeight - window.innerHeight);
    };
    window.addEventListener("wheel", handleWheelEvent);
    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  };

  // UseEffect to animate seal opacity
  return (
    <div>
      <div className="parallax bg">
        <div className="invitation-layer">
          <div className="flex items-center justify-center w-[100vw] h-[100vh] relative">
            <div
              className="invitation bg-[#EEE7D7] transition-all ease-in-out duration-1000 rounded-md overflow-hidden"
              style={{
                transition:
                  "max-height 3s ease-in-out, min-height 3s ease-in-out, width 0.5 ease-in-out",
              }}
              ref={invitationRef}
            >
              <div className="flex justify-center w-[100%] h-[100%] mb-10 decoration-black">
                <h1 className="text-4xl font-bold">Te invit la TreeBytez</h1>
              </div>
              <div className="text-[#384a41] flex justify-center mb-10">
                <div className=" w-[95%]">
                  <p>
                    Te invit să te aventurezi într-o excursie de neuitat, care
                    va dura 3 zile, unde te vei putea bucura de natura, dar și
                    să înveți de la 0 cum să îți creezi propriul joc, alături de
                    alți adolescenți cu o pasiune comună pentru jocuri.
                  </p>
                </div>
              </div>
              {accordions.map((accordion) => (
                <Accordion
                  key={accordion.key}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                />
              ))}
              <div id="sponsori">
                <h1 className="text-4xl font-bold text-center mt-5 mb-10">
                  Sponsori
                </h1>
                <div className="flex justify-center">
                  <div className="w-[95%]">
                    <p>
                      Mulțumită sponsorilor noștri, vom putea aproviziona
                      mâncare, cazare și premii pentru tot evenimentul. Dacă
                      dorești să ne susții, te rugăm să ne trimiți un email la{" "}
                      <a href="mailto:vectorbytez@gmail.com">
                        vectorbytez@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex justify-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="triangle-layer">
          <div className="flex items-center justify-center w-[100vw] h-[100vh] relative">
            <img
              style={{ transition: "all 0.1s ease-in-out" }}
              src="/envelope-triangle.png"
              ref={envelopeTriangleRef}
              className="triangle absolute"
            />
          </div>
        </div>
        <div className="body-layer">
          <div
            className="flex items-center justify-center w-[100vw] h-[100vh] relative transition-all duration-200 ease-in-out"
            ref={envelopeRef}
          >
            <img src="/envelope-body.png" alt="envelope" className="body" />
          </div>
        </div>
        <div className="seal-layer">
          <div className="flex items-center justify-center w-[100vw] h-[100vh] relative">
            <button
              onClick={() => {
                if (time > 0) return;
                function animate(prevTime) {
                  setTimeout(() => {
                    setTime(prevTime);
                    animate(prevTime + 10);
                  }, 10);
                }
                animate(time);
              }}
            >
              <img
                style={{ transition: "opacity 0.5s ease-in-out" }}
                ref={sealRef}
                src="/seal.png"
                className="seal top-[52.5%] absolute"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
