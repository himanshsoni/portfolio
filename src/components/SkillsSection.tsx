import { skillList } from "@/data/skillsData";
import { Button } from "./ui/moving-border";
const SkillsSection = () => {
  return (
    <section id="skills" className="transition duration-500 ease-in-out">
      <div>
        <section className="text-center ">
          <h1 className="text-3xl my-2 p-2"> My Skills</h1>
          <p className="text-2xl mt-5 p-2">
            Passionate about new technologies, I keep exploring stuff. Here's
            the tech stack I've worked with!
          </p>
        </section>
        <div className="flex justify-center items-center">
          {skillList.map((skill) => (
            <>
              <div className="mt-4 p-2">
                <Button
                  borderRadius="1.75rem"
                  className="text-xl bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  {skill.skillName}
                </Button>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
