import { getDictionary, Locale } from "@/app/dictionaries";

interface IProps {
  lang: Locale;
}

const SummaryContainer = async ({ lang }: IProps) => {
  const t = await getDictionary(lang);
  return (
    <div className="summary_container">
      <p className="text-justify unicode-bidi-plaintext">{t.summary.content}</p>
    </div>
  );
};
export default SummaryContainer;
