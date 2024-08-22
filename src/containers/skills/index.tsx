import { getDictionary, Locale } from "@/app/dictionaries";
import Skills from "@/components/skills";

interface IProps {
  lang: Locale;
}

const SkillsContainer = async ({ lang }: IProps) => {
  const t = await getDictionary(lang);
  return (
    <div className="skills_container">
      {Object.keys(t.skills).map((skill, index) => (
        <Skills
          key={index}
          data={t.skills?.[skill]?.items}
          label={t.skills?.[skill]?.label}
        />
      ))}
    </div>
  );
};
export default SkillsContainer;
