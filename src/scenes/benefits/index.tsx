import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";

const benefits:Array<BenefitType> = [
  {
    icon: <HomeModernIcon className=" h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea explicabo culpa quibusdam dicta sapiente"
    
  },
  {
    icon: <UserGroupIcon className=" h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea explicabo culpa quibusdam dicta sapiente"
    
  },
  {
    icon: <AcademicCapIcon className=" h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea explicabo culpa quibusdam dicta sapiente"
    
  }
]

const container = {
  hidden: {},
  visible: {
    transition:{staggerChildren:0.2}
  }
}
type Props = {
  setSelectedPage:(value:SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    className=" mx-auto min-h-full w-5/6 py-20"
    id="benefits">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)} >
       {/* header */}
        <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
           className="md:my-5 md:w-3/5"
              >
                
          <HText> MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque perferendis, recusandae similique culpa perspiciatis pariatur soluta hic, ducimus odit molestiae nihil? Voluptas, laborum sed.</p>
        </motion.div>

        {/* benefits */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} variants={container} className=" md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit:BenefitType) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Benefits