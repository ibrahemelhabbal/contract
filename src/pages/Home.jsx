import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import Backgroundslider from "../components/backgroundslider/Backgroundslider";
// import "slick-carousel/slick/slick.css";
// import "/slick-theme.css";
import Carsuel from "../components/carsuel/Carsuel";
import Carsuel2 from "../components/carsuel/Carsuel2";
import Fotter from "../components/Fotter";
import { useState } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
function Home() {
  const [currentSection, setCurrentSection] = useState("first");

  const handleNavigateToSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <main className="home">
      <Navbar />

      <Backgroundslider onNavigateToSection={handleNavigateToSection} />
      <section className="sec">
        <div className="descrption">
          <h1>أنشطة الشركة</h1>
          <p>أنشطة أحترافية لنقدم للعالم أفضل جودة</p>
        </div>
        <div className="Container">
          <div className="Card">
            <img src="/card1.png" alt="card1"></img>
            <div className="intro">
              <h1>كباري و اساسيات</h1>
              <p>مشروعات آلت إلى الشركة نتيجة دمج شركة فيبرو لشركتنا</p>
            </div>
          </div>
          <div className="Card">
            <img src="/card2.png" alt="card2"></img>
            <div className="intro">
              <h1> مباني عامه واسكان</h1>
              <p>
                للشركة دور كبير في نشاط إقامة المباني داخل و خارج الجمهورية
                بمختلف أنواعها
              </p>
            </div>
          </div>
          <div className="Card">
            <img src="/card3.png" alt="card3"></img>
            <div className="intro">
              <h1>مرفق</h1>
              <p>
                يعتبر قطاع المرافق من القطاعات الرائدة حيث تلعب الشركة دورا
                بارزا و مؤثرا في حركة التطور العمراني بالبلاد
              </p>
            </div>
          </div>
          <div className="Card">
            <img src="/card4.png" alt="card4"></img>
            <div className="intro">
              <h1> طرق و كباري</h1>
              <p>
                تتمتع الشركة بثقة كبيرة من الدولة فى إقامة ورصف الطرق نتيجة
                لخبرتها الطويلة واستخدامها لأحدث التكنولوجيا العصرية
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="third">
        <Carsuel />
      </section>
      <Element name={currentSection}></Element>
      <section className="fourth">
        <h1>تعرف على رؤية</h1>
        <p>
          <p className="p2">
            شركة مقاولات رؤية هي شركة رائدة في مجال البناء والمقاولات. تتميز
            الشركة بخبرتها الواسعة والمهارات الفنية المتقدمة التي تسمح لها
            بتنفيذ مشاريع متنوعة وذات جودة عالية. تتضمن خدمات الشركة إنشاء
            المباني السكنية والتجارية والصناعية، وتجديد المباني القائمة، وإدارة
            المشاريع، والتصميم الهندسي.
          </p>
          <p className="p2">
            تتمتع شركة رؤية بفريق عمل مؤهل ومحترف، يعمل بروح الفريق والتفاني في
            تقديم أفضل الحلول الملائمة لاحتياجات العملاء. كما تولي الشركة
            اهتمامًا كبيرًا للابتكار واستخدام أحدث التقنيات والمواد في عمليات
            البناء.
          </p>
          <p className="p2">
            تعتبر شركة مقاولات رؤية شريكًا موثوقًا للعملاء، حيث تسعى دائمًا
            لتحقيق رؤية عملائها وتلبية توقعاتهم. من خلال التزامها بالجودة
            والاحترافية، تسعى الشركة لتحقيق التميز في صناعة البناء وتعزيز البنية
            التحتية للمجتمعات التي تعمل فيها.
          </p>
          <p className="p2">
            باختصار، شركة مقاولات رؤية هي شركة تتميز بالجودة والابتكار والتفاني
            في تقديم أعلى مستويات الخدمة في صناعة المقاولات.
          </p>
        </p>

        <div className="fourthBackground">
          <img src="./fourth.png" />
          <div className="back"></div>{" "}
        </div>
        <div className="semi-cards">
          <div className="semi-card">
            <h1>+10</h1>
            <h3>مشاريع خيريه</h3>
          </div>
          <div className="semi-card">
            <h1>+30</h1>
            <h3>مشاروع تم اتمامه</h3>
          </div>
          <div className="semi-card">
            <h1>+15</h1>
            <h3>مشاريع تحت الانشاء</h3>
          </div>
        </div>
        <Link to="/Whowe">
          <button className="btn4">معرفه المزيد</button>
        </Link>
      </section>
      <section className="fifth">
        <Carsuel2 />
      </section>
      <section className="six">
        <p>شارك برأيك فى الموقع</p>
        <h1>
          حرصا على التواصل معنا نرحب باستقبال تعليقاتكم و اقتراحاتكم و طلباتكم
        </h1>
        <Link to="/Conn">
          <button className="btn5">شارك</button>
        </Link>
      </section>
      <section className="seven">
        <Fotter />
      </section>
    </main>
  );
}

export default Home;
