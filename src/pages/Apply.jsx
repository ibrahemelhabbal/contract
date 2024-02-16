import Navbar from "../components/navbar/Navbar";
import "./Apply.css";
// import Fotter from "../components/Fotter";
import Form from "../components/Formc";
function Apply() {
  return (
    <main>
      <div className="Apply">
        <Navbar />
      </div>
      <div className="apply1">
        <h1>الوظائف</h1>
      </div>
      <div className="apply2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="769"
          height="714"
          viewBox="0 0 769 714"
          fill="none"
        >
          <path
            d="M369.379 0.0578861C529.581 -2.16498 696.685 59.4835 749.694 210.614C805.984 371.098 734.523 547.192 595.839 645.7C461.603 741.048 281.53 735.035 149.068 637.24C19.7804 541.789 -32.2747 372.585 20.2282 220.736C69.9564 76.9121 217.159 2.17 369.379 0.0578861Z"
            fill="#EAF1F3"
          />
        </svg>
        <img src="./hamo.png" />
        <Form />
      </div>
      {/* <div className="fottt">
        <Fotter />
      </div> */}
    </main>
  );
}

export default Apply;
