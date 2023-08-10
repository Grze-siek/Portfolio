'use client';
import { Skill as SkillType } from '@/typings';
import Skill from './Skill';

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <div className="min-h-screen flex flex-col relative text-center max-w-[2000px] xl:px-10 md:text-left xl:flex-row justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 gap-5 md:grid-cols-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
