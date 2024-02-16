import { useState, useEffect } from "react";
import "./Backgroundslider.css";
import imageSlide from "../Data";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
function Backgroundslider({ onNavigateToSection }) {
  const [currentState, setCurrentState] = useState(0);
  let intervalId;
  const handleLearnMore = () => {
    onNavigateToSection("fourth"); // استخدام دالة الانتقال إلى القسم الرابع
  };
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100 vh",
  };

  const goToNext = () => {
    if (currentState < 2) {
      setCurrentState((curState) => curState + 1);
    } else {
      setCurrentState(0);
    }
  };

  const goToPrev = () => {
    if (currentState > 0) {
      setCurrentState((curState) => curState - 1);
    } else {
      currentState(2);
    }
  };
  const startAutoPlay = () => {
    intervalId = setInterval(goToNext, 3000); // Adjust the duration between transitions as desired (in milliseconds)
  };

  const stopAutoPlay = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  return (
    <div className="Container" style={bgImageStyle}>
      <div className="descrption-back">
        <h1>{imageSlide[currentState].title}</h1>
        <p>{imageSlide[currentState].descrption}</p>

        {/* استخدم Link من react-scroll لتحديد الانتقال */}
        <Link
          to="fourth"
          spy={true}
          smooth={true}
          offset={500} // قم بتعيين هذه القيمة وفقًا لاحتياجات التمرير
          duration={100} // قم بتعيين مدة التمرير
        >
          <button onClick={handleLearnMore} className="btn2">
            معرفة المزيد
          </button>
        </Link>
      </div>

      <button className="btn3" onClick={goToNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
        >
          <path
            d="M41 25C41 33.8366 33.8366 41 25 41L16 41C7.16344 41 -6.26248e-07 33.8366 -1.39876e-06 25L-2.18557e-06 16C-2.95809e-06 7.16345 7.16344 2.95809e-06 16 2.18557e-06L25 1.39876e-06C33.8366 6.26248e-07 41 7.16344 41 16L41 25Z"
            fill="white"
          />
          <path
            d="M24.2028 30C24.0985 30.0006 23.9951 29.9816 23.8985 29.9443C23.8019 29.907 23.7141 29.852 23.64 29.7825L17.1643 23.6561C16.7952 23.3078 16.5024 22.894 16.3026 22.4385C16.1028 21.983 16 21.4947 16 21.0015C16 20.5084 16.1028 20.02 16.3026 19.5645C16.5024 19.109 16.7952 18.6953 17.1643 18.347L23.64 12.2205C23.7139 12.1506 23.8017 12.0952 23.8982 12.0573C23.9948 12.0195 24.0983 12 24.2028 12C24.3073 12 24.4108 12.0195 24.5073 12.0573C24.6039 12.0952 24.6916 12.1506 24.7655 12.2205C24.8394 12.2904 24.8981 12.3734 24.9381 12.4648C24.9781 12.5562 24.9986 12.6541 24.9986 12.7529C24.9986 12.8518 24.9781 12.9497 24.9381 13.0411C24.8981 13.1324 24.8394 13.2154 24.7655 13.2853L18.2898 19.4118C17.8445 19.8336 17.5944 20.4054 17.5944 21.0015C17.5944 21.5977 17.8445 22.1695 18.2898 22.5913L24.7655 28.7177C24.8398 28.7874 24.8988 28.8704 24.939 28.9617C24.9793 29.0531 25 29.1511 25 29.2501C25 29.3491 24.9793 29.4471 24.939 29.5385C24.8988 29.6299 24.8398 29.7128 24.7655 29.7825C24.6915 29.852 24.6036 29.907 24.5071 29.9443C24.4105 29.9816 24.3071 30.0006 24.2028 30Z"
            fill="#1A7D8B"
          />
        </svg>
      </button>
      <button className="btn3" onClick={goToPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
        >
          <path
            d="M0 16C0 7.16344 7.16344 0 16 0H25C33.8366 0 41 7.16344 41 16V25C41 33.8366 33.8366 41 25 41H16C7.16344 41 0 33.8366 0 25V16Z"
            fill="white"
          />
          <path
            d="M16.7972 11C16.9015 10.9994 17.0049 11.0184 17.1015 11.0557C17.1981 11.093 17.2859 11.148 17.36 11.2175L23.8357 17.3439C24.2048 17.6922 24.4976 18.106 24.6974 18.5615C24.8972 19.017 25 19.5053 25 19.9985C25 20.4916 24.8972 20.98 24.6974 21.4355C24.4976 21.891 24.2048 22.3047 23.8357 22.653L17.36 28.7795C17.2861 28.8494 17.1983 28.9048 17.1018 28.9427C17.0052 28.9805 16.9017 29 16.7972 29C16.6927 29 16.5892 28.9805 16.4927 28.9427C16.3961 28.9048 16.3084 28.8494 16.2345 28.7795C16.1606 28.7096 16.1019 28.6265 16.0619 28.5352C16.0219 28.4438 16.0014 28.3459 16.0014 28.2471C16.0014 28.1482 16.0219 28.0503 16.0619 27.9589C16.1019 27.8676 16.1606 27.7846 16.2345 27.7147L22.7102 21.5882C23.1555 21.1664 23.4056 20.5946 23.4056 19.9985C23.4056 19.4023 23.1555 18.8305 22.7102 18.4087L16.2345 12.2823C16.1602 12.2126 16.1012 12.1296 16.061 12.0383C16.0207 11.9469 16 11.8489 16 11.7499C16 11.6509 16.0207 11.5529 16.061 11.4615C16.1012 11.3701 16.1602 11.2872 16.2345 11.2175C16.3085 11.148 16.3964 11.093 16.4929 11.0557C16.5895 11.0184 16.6929 10.9994 16.7972 11Z"
            fill="#1A7D8B"
          />
        </svg>
      </button>
    </div>
  );
}
Backgroundslider.propTypes = {
  onNavigateToSection: PropTypes.func.isRequired,
};
export default Backgroundslider;
