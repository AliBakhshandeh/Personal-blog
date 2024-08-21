import SectionDevider from "@/components/sectionDevider";
import Header from "@/containers/header";
import Summary from "@/containers/summary";

export default async function Home({ params }: any) {
  return (
    <div className="home_page mx-auto mt-[30px] px-5 md:px-0 container">
      <Header lang={params.lang} />

      <SectionDevider content={"Summary"} />

      <Summary lang={params.lang} />

      <SectionDevider content={"Skills"} />
      <SectionDevider content={"Experience"} />
      <SectionDevider content={"Blog"} />
    </div>
  );
}
