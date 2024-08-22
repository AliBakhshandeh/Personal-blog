import styles from "./skills.module.scss";

interface IProps {
  bullets: string[];
}
const ExperienceBullets = ({ bullets }: IProps) => {
  return (
    <>
      {bullets &&
        bullets?.length > 0 &&
        bullets.map((item: string, index: number) => (
          <div key={index} className="experience_bullets pl-[35px]">
            <ul className="list-disc">
              <li>
                <p
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                />
              </li>
            </ul>
          </div>
        ))}
    </>
  );
};
export default ExperienceBullets;
