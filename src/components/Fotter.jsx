import "./Fotter.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
function Fotter() {
  return (
    <div className="fotter ">
      <div className="fLogo">
        <Logo />
      </div>
      <div className="des">
        <p>
          شركة مقاولات رؤية هي شركة رائدة في مجال البناء والمقاولات. تتميز
          الشركة بخبرتها الواسعة والمهارات الفنية المتقدمة التي تسمح لها بتنفيذ
          مشاريع متنوعة وذات جودة عالية. تتضمن خدمات الشركة إنشاء المباني
          السكنية والتجارية والصناعية، وتجديد المباني القائمة، وإدارة المشاريع،
          والتصميم الهندسي.
        </p>
      </div>
      <div className="media">
        <h1>تواصل معنا</h1>
        <div className="linkes">
          <a href="https://www.example.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
            >
              <path
                d="M7.67801 21.5V11.9216H10.8918L11.3739 8.18764H7.67801V5.80404C7.67801 4.72331 7.97689 3.9868 9.52841 3.9868L11.504 3.98599V0.646191C11.1624 0.601793 9.9896 0.5 8.6246 0.5C5.77427 0.5 3.82289 2.23981 3.82289 5.43423V8.18764H0.599365V11.9216H3.82289V21.5H7.67801Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://www.example.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M21.4467 6.67408C21.3975 5.55823 21.2171 4.79117 20.9585 4.12642C20.6919 3.42085 20.2816 2.78917 19.7442 2.26402C19.219 1.73071 18.5832 1.31629 17.8858 1.05382C17.2172 0.795371 16.4541 0.614867 15.3383 0.56572C14.2141 0.512307 13.8573 0.5 11.0061 0.5C8.15497 0.5 7.7981 0.512307 6.67811 0.561536C5.5623 0.610764 4.7952 0.791351 4.13066 1.04964C3.42488 1.31629 2.7932 1.72653 2.26805 2.26402C1.73474 2.78913 1.32052 3.425 1.05785 4.1224C0.7994 4.79117 0.618936 5.55413 0.569748 6.6699C0.516376 7.79407 0.504028 8.15094 0.504028 11.0021C0.504028 13.8532 0.516376 14.2102 0.565564 15.3301C0.614793 16.4459 0.795379 17.213 1.05387 17.8778C1.32052 18.5833 1.73474 19.215 2.26805 19.7402C2.7932 20.2735 3.42907 20.6879 4.12647 20.9504C4.79516 21.2088 5.55812 21.3893 6.67413 21.4385C7.79392 21.4879 8.15099 21.5 11.0021 21.5C13.8533 21.5 14.2102 21.4879 15.3302 21.4385C16.446 21.3893 17.2131 21.2089 17.8776 20.9504C18.5756 20.6805 19.2094 20.2678 19.7386 19.7387C20.2677 19.2096 20.6805 18.5757 20.9504 17.8778C21.2087 17.209 21.3893 16.4459 21.4385 15.3301C21.4877 14.2102 21.5 13.8532 21.5 11.0021C21.5 8.15094 21.4959 7.79403 21.4467 6.67408ZM19.5556 15.2481C19.5104 16.2737 19.3381 16.8275 19.1946 17.1967C18.8417 18.1115 18.1156 18.8376 17.2007 19.1905C16.8315 19.3341 16.2737 19.5064 15.2521 19.5514C14.1444 19.6008 13.8123 19.6129 11.0103 19.6129C8.20834 19.6129 7.87198 19.6008 6.76832 19.5514C5.74273 19.5064 5.18891 19.3341 4.81969 19.1905C4.36445 19.0222 3.95007 18.7556 3.61367 18.4069C3.26497 18.0664 2.99832 17.6562 2.83004 17.2009C2.68645 16.8317 2.51419 16.2736 2.46919 15.2522C2.4198 14.1446 2.40766 13.8122 2.40766 11.0103C2.40766 8.20829 2.4198 7.87193 2.46919 6.76848C2.51419 5.74288 2.68645 5.18906 2.83004 4.81985C2.99832 4.3644 3.26497 3.9501 3.61786 3.61362C3.95819 3.26492 4.36843 2.99827 4.82387 2.83019C5.19309 2.68661 5.75109 2.51431 6.77251 2.46914C7.88015 2.41991 8.21252 2.40761 11.0143 2.40761C13.8204 2.40761 14.1526 2.41991 15.2563 2.46914C16.2819 2.51435 16.8357 2.68657 17.2049 2.83015C17.6601 2.99827 18.0746 3.26492 18.4109 3.61362C18.7596 3.95416 19.0263 4.3644 19.1946 4.81985C19.3381 5.18906 19.5104 5.74686 19.5556 6.76848C19.6048 7.87612 19.6171 8.20829 19.6171 11.0103C19.6171 13.8122 19.6048 14.1404 19.5556 15.2481Z"
                fill="white"
              />
              <path
                d="M11.0051 5.60744C8.02686 5.60744 5.61047 8.02366 5.61047 11.0021C5.61047 13.9805 8.02686 16.3967 11.0051 16.3967C13.9834 16.3967 16.3997 13.9805 16.3997 11.0021C16.3997 8.02366 13.9834 5.60744 11.0051 5.60744ZM11.0051 14.5014C9.07297 14.5014 7.50569 12.9344 7.50569 11.0021C7.50569 9.06977 9.07296 7.50274 11.0051 7.50274C12.9374 7.50274 14.5044 9.06977 14.5044 11.0021C14.5044 12.9344 12.9373 14.5014 11.0051 14.5014ZM17.8726 5.39411C17.8726 6.08963 17.3086 6.65355 16.613 6.65355C15.9175 6.65355 15.3536 6.08963 15.3536 5.39411C15.3536 4.69851 15.9175 4.13477 16.613 4.13477C17.3086 4.13477 17.8726 4.69847 17.8726 5.39411Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="pageLinkes">
        <div className="first">
          <h1>عن رؤيه</h1>
          <div className="link">
            <Link to="/whowe">من نحن</Link>
            <Link to="/directors">مجلس الأدارة</Link>
            <Link to="/hR">الموارد البشريه</Link>
            <Link to="/srespons">المسؤولية الاجتماعية</Link>
          </div>
        </div>
        <div className="second">
          <h1>المركز الأعلامي</h1>
          <div className="link">
            <Link to="/news">الأخبار </Link>
            <Link to="/videos">الفيديوهات </Link>
          </div>
        </div>
        <div className="thirde"></div>
      </div>
    </div>
  );
}

export default Fotter;