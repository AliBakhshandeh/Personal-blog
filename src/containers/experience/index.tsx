import { getDictionary, Locale } from "@/app/dictionaries";
import ExperienceBullets from "@/components/experienceBullets";

interface IProps {
  lang: Locale;
}
interface IExperience {
  company: string;
  role: string;
  description: string;
  location: string;
  date: string;
  bullets: string[];
}
const ExperienceContainer = async ({ lang }: IProps) => {
  const t = await getDictionary(lang);
  return (
    <div className="experience_container">
      {t.experiences &&
        t.experiences?.length >= 0 &&
        t.experiences?.map((experience: IExperience, index: number) => (
          <div key={index} className="experience_item mt-2">
            <div className="flex justify-between">
              <div className="company_info">
                <h4 className="text-2xl text-content-primary/55">
                  {experience.company}
                </h4>
                <h4 className="text-lg">{experience.role}</h4>
              </div>
              <div className="experience_location_date">
                <h4 className="text-lg">{experience.location}</h4>
                <h4 className="text-lg">{experience.date}</h4>
              </div>
            </div>
            <div className="experience_description">
              <p
                className="block"
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />
            </div>
            <ExperienceBullets bullets={experience.bullets} />
          </div>
        ))}
    </div>
  );
};
export default ExperienceContainer;
