import Link from "next/link";
import styles from "./header.module.scss";
import statics from "@/utils/static/static.json";
import { getDictionary, Locale } from "@/app/dictionaries";

interface IProps {
  lang: Locale;
}

const Header = async ({ lang }: IProps) => {
  const t = await getDictionary(lang);
  return (
    <header className="header_container">
      <div className="info_container flex flex-col justify-center items-center">
        <div className="header_information_container">
          <h1 className="text-4xl font-bold text-content-primary text-center">
            {t.user_info.full_name}
          </h1>
          <h3 className="text-2xl text-content-primary/75 text-center my-2">
            {t.user_info.position}
          </h3>
          <ul
            className={`${styles.listDiscAfter} flex flex-wrap justify-center`}
          >
            <li>{statics.info.phone}</li>
            <li>
              <Link href={`mailto:${statics.info.email}`}>
                {statics.info.email}
              </Link>
            </li>
            <li>
              <Link href={`${statics.info.linkdin}`}>
                {statics.info.linkdin}
              </Link>
            </li>
            <li>{statics.info.location}</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
