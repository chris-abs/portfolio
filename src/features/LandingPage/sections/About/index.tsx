import Heading from '@/components/Heading'
import Widget from '@/components/Widget'
import Image from 'next/image'
import Link from 'next/link'
import { SiSpeedtest } from 'react-icons/si'
import { MdDevices, MdOutlineLightbulb, MdRocketLaunch } from 'react-icons/md'

import Log from '@/components/Log'
// import StatBar from '@/components/StatBar';
import Section from '@/components/Section'

const statData = [
  { label: 'HTML', completed: 90 },
  { label: 'CSS', completed: 90 },
  { label: 'JavaScript', completed: 50 },
  { label: 'React', completed: 65 },
  { label: 'UI Design', completed: 60 },
]

const AboutSection = () => {
  return (
    <Section title="About">
      <article className="grid md:grid-cols-2 gap-3 place-items-center">
        <div className="block text-center order-last md:order-first pt-16 md:pt-0">
          <Image
            className="m-auto rounded-t-[30px] rounded-b-[10px]"
            src="/avatar.jpeg"
            alt=""
            width={300}
            height={300}
          />
          <header className="pt-2">
            <Heading center title="Who's this guy?" />
          </header>
          <p className="text-center pb-2 max-w-[475px] text-description">
            I&apos;m a Front-end Developer looking for work in the UK
            <br />I have a serious passion for UI effects, animations and
            creating inituitive, dynamic user experiences
          </p>
          <Link href="#contact." className="text-amber_400">
            Let&apos;s make something special
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 order-first md:order-last">
          <Widget
            label="Fast"
            description="Fast load times and lag free interaction, the priority"
            icon={SiSpeedtest}
          />
          <Widget
            label="Intuitive"
            description="Strong preference for easy to use, intuitive UX/UI"
            icon={MdOutlineLightbulb}
          />
          <Widget
            label="Responsive"
            description="Layouts to work on all devices, big or small"
            icon={MdDevices}
          />
          <Widget
            label="Dynamic"
            description="Websites should not be static, bring them to life."
            icon={MdRocketLaunch}
          />
        </div>
        {/* <div className="grid w-full pt-12 md:pt-0 gap-4">
					{statData.map((item, idx) => (
						<StatBar key={idx} completed={item.completed} label={item.label} />
					))}
				</div> */}
      </article>

      <article className="grid pt-16 grid-cols-1 md:grid-cols-2 gap-3">
        <Log
          title="SuperBikeFactory"
          date="10/05/2021 - 06/06/2022"
          description="Worked as a Front-End Developer focussing on e-comerce products ranging from customer facing domains to internal tooling systems."
        />
        <Log
          title="John Moores University"
          date="10-09-2018 - 09/05/2021"
          description="Graduated (First Class - With Honours) in Electrical and Electronics Engineering"
        />
      </article>
    </Section>
  )
}

export default AboutSection
