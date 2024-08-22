// components
import SectionDevider from "@/components/sectionDevider";
// containers
import ExperienceContainer from "@/containers/experience";
import HeaderContainer from "@/containers/header";
import SkillsContainer from "@/containers/skills";
import SummaryContainer from "@/containers/summary";

export default async function Home({ params }: any) {
  return (
    <div className="home_page mx-auto my-[30px] px-5 md:px-0 container">
      <HeaderContainer lang={params.lang} />

      <SectionDevider content={"Summary"} />

      <SummaryContainer lang={params.lang} />

      <SectionDevider content={"Skills"} />

      <SkillsContainer lang={params.lang} />

      <SectionDevider content={"Experience"} />

      <ExperienceContainer lang={params.lang} />

      {/* <SectionDevider content={"Blog"} /> */}
    </div>
  );
}
