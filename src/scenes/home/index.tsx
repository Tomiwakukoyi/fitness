import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (valye: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className=" gap-16 bg-gray-20 py-10 mt-20 md:h-full">
      {/* image and main header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <div className=" md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]  md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              placeat quibusdam porro officia a dicta, ab officiis in nobis
              deserunt deleniti repellendus exercitationem iste quisquam!
              Delectus animi voluptatum suscipit dolores.
            </p>
          </div>
          {/* Actions */}
          <div className=" mt-8 flex items-center gap-8 md:justify-start">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image  */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>

      {/* sponsors */}
      {isAboveMediaScreens && (
        <div className=" h-[150px] w-full bg-primary-100 py-10">
          <div className=" mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull" />
              <img src={SponsorForbes} alt="forbes" />
              <img src={SponsorFortune} alt="fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
