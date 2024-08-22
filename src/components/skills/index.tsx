import styles from "./skills.module.scss";

interface IProps {
  data: string[];
  label: string;
}
const Skills = ({ data, label }: IProps) => {
  return (
    <>
      {data && data?.length > 0 && (
        <div className="front_end_skills_container flex mt-5">
          <h5 className="font-bold mr-2 inline text-nowrap">{label}:</h5>
          <ul className={`${styles.listDiscAfter}`}>
            {data.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Skills;
