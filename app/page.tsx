import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import WorkExperience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';

export default async function Home() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return (
    <div className="bg-[#272727] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary-color">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section> */}

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="hidden md:block max-w-fit sticky right-5 bottom-5">
        <a href="#hero">
          <div className="inline-block border sticky bottom-5 border-[#fff] ml-10 rounded-full group animate-bounce m-auto hover:border-primary-color">
            <ArrowUpIcon className="h-12 w-12 p-2 group-hover:stroke-primary-color " />
          </div>
        </a>
      </footer>
    </div>
  );
}
