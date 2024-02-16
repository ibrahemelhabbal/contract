import Navbar from "../components/navbar/Navbar";
import "./conn.css";
import { useState, useEffect } from "react";

function Conn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    governorate: "",
    region: "",
    message: "",
    image: null,
  });

  const [submissionMessage, setSubmissionMessage] = useState(null);
  const [showReturnButton, setShowReturnButton] = useState(false);

  const [fieldVisibility, setFieldVisibility] = useState({
    name: true,
    email: true,
    phoneNumber: true,
    jobTitle: false,
    governorate: false,
    region: false,
    message: true,
    image: false,
  });

  const placeholders = {
    name: "الاسم",
    email: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    jobTitle: "المسمى الوظيفي",
    governorate: "المحافظة",
    region: "المنطقة",
    message: "رساله",
    image: "اختر صورة",
  };

  useEffect(() => {
    console.log("تم إرسال بيانات النموذج:", formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmissionMessage("تم إرسال البيانات بنجاح!");
      setShowReturnButton(true);

      setFieldVisibility({
        name: false,
        email: false,
        phoneNumber: false,
        jobTitle: false,
        governorate: false,
        region: false,
        message: false,
        image: false,
      });

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }, 1000);
  };

  const handleReturnHome = () => {
    window.location.href = "/";
  };

  return (
    <main>
      <section className="Conn">
        <Navbar />
      </section>
      <section className="con1">
        <div className="con1t">
          <h1>تواصل معنا</h1>
        </div>
      </section>
      <section className="con2">
        <div className="con2f">
          <img id="fback" src="./conv.png" alt="fback" />
          <img id="frame" src="./conframe.png" alt="frame" />
        </div>
        <div className="con2form">
          <h1>تواصل معنا</h1>

          <div className="formcon">
            <div>
              {Object.keys(formData).map((fieldName) => (
                <div key={fieldName}>
                  {fieldVisibility[fieldName] && (
                    <>
                      {fieldName === "image" ? null : fieldName ===
                          "governorate" || fieldName === "region" ? null : (
                        <input
                          type={fieldName === "email" ? "email" : "text"}
                          id={fieldName}
                          name={fieldName}
                          value={formData[fieldName]}
                          onChange={handleInputChange}
                          placeholder={placeholders[fieldName]}
                          required
                        />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            {!submissionMessage && !showReturnButton && (
              <button className="subbbtn" type="submit" onClick={handleSubmit}>
                إرسال الطلب
              </button>
            )}
            {submissionMessage && showReturnButton && (
              <button type="button" onClick={handleReturnHome}>
                العودة إلى الصفحة الرئيسية
              </button>
            )}
          </div>
          {submissionMessage && !showReturnButton && (
            <div>
              <p>{submissionMessage}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Conn;
