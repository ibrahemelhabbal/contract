import Navbar from "../components/navbar/Navbar";
import "./Vacancies.css";
import Fotter from "../components/Fotter";

import { Link } from "react-router-dom";

function Vacancies() {
  return (
    <main>
      <div className="Vacanies">
        <Navbar />
      </div>
      <div className="vs1">
        <h1>الوظائف</h1>
        <p>
          نبحث دائما عن الكوادر والمبدعين اللذين يساعدون الشركة على التمييز
          لتكون عائلة رؤية هي الأفضل دائما
        </p>
      </div>
      <div className="vs2">
        <div className="vs2c">
          <div className="vs2c1">
            <img src="j1.png" />
            <h1>مهندس كهرباء</h1>
            <p>
              مطلوب مهندس كهرباء حديث التخرج للعمل في مشاريع المباني والاساسات
            </p>
            <Link to="/Apply">
              <button className="vbtn">التقديم</button>
            </Link>
          </div>
          <div className="vs2c1">
            {" "}
            <img src="j2.png" />
            <h1>مهندس كهرباء</h1>
            <p>
              مطلوب مهندس كهرباء حديث التخرج للعمل في مشاريع المباني والاساسات
            </p>
            <Link to="/Apply">
              <button className="vbtn">التقديم</button>
            </Link>
          </div>
          <div className="vs2c1">
            {" "}
            <img src="j3.png" />
            <h1>مهندس كهرباء</h1>
            <p>
              مطلوب مهندس كهرباء حديث التخرج للعمل في مشاريع المباني والاساسات
            </p>
            <Link to="/Apply">
              <button className="vbtn">التقديم</button>
            </Link>
          </div>
          <div className="vs2c1">
            {" "}
            <img src="j4.png" />
            <h1>مهندس كهرباء</h1>
            <p>
              مطلوب مهندس كهرباء حديث التخرج للعمل في مشاريع المباني والاساسات
            </p>
            <Link to="/Apply">
              <button className="vbtn">التقديم</button>
            </Link>
          </div>
          <div className="vs2c1">
            {" "}
            <img src="j5.png" />
            <h1>مهندس كهرباء</h1>
            <p>
              مطلوب مهندس كهرباء حديث التخرج للعمل في مشاريع المباني والاساسات
            </p>
            <Link to="/Apply">
              <button className="vbtn">التقديم</button>
            </Link>
          </div>
          <div className="vs2c1">
            {" "}
            <img src="j6.png" />
            <h1>مهندس كهرباء</h1>
            <p>
              مطلوب مهندس كهرباء حديث التخرج للعمل في مشاريع المباني والاساسات
            </p>
            <Link to="/Apply">
              <button className="vbtn">التقديم</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="fot">
        <Fotter />
      </div>
    </main>
  );
}

export default Vacancies;
