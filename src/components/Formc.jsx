// Form.js

import "./Formc.css";
import { useState } from "react";

const Form = () => {
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
    jobTitle: true,
    governorate: true,
    region: true,
    message: true,
    image: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.name.toLowerCase().endsWith(".pdf")) {
      setFormData({ ...formData, image: file });
    } else {
      console.error("Please select a pdf file.");
    }
  };

  const handleSelectChange = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  const governorateOptions = [
    "القاهرة",
    "الإسكندرية",
    "الجيزة",
    // ... المحافظات الأخرى
  ];

  const regionOptions = [
    "وسط البلد",
    "المعادي",
    "مدينة نصر",
    // ... المناطق الأخرى
  ];

  const getRandomOption = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const getRandomGovernorate = () => getRandomOption(governorateOptions);
  const getRandomRegion = () => getRandomOption(regionOptions);

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
        jobTitle: "",
        governorate: getRandomGovernorate(),
        region: getRandomRegion(),
        message: "",
        image: null,
      });
    }, 1000);

    console.log("تم إرسال بيانات النموذج:", formData);
  };

  const handleReturnHome = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {Object.keys(formData).map((fieldName) => (
            <div key={fieldName}>
              {fieldVisibility[fieldName] && (
                <>
                  {fieldName === "image" ? (
                    <>
                      <label htmlFor="image" className="custom-file-upload">
                        <span> تحميل السيرة الذاتية</span>
                        <img src="./ssss.svg" alt="Upload icon" />
                      </label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="pdf"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                      {formData.image && (
                        <img
                          src={URL.createObjectURL(formData.image)}
                          alt="Selected Image Preview"
                          style={{ maxWidth: "100%", maxHeight: "200px" }}
                        />
                      )}
                    </>
                  ) : fieldName === "governorate" || fieldName === "region" ? (
                    <div className={`select-container ${fieldName}-container`}>
                      <select
                        value={formData[fieldName]}
                        onChange={(e) => handleSelectChange(e, fieldName)}
                        className={`select-placeholder ${fieldName}-select`}
                      >
                        <option value="" disabled hidden>
                          {placeholders[fieldName]}
                        </option>
                        {fieldName === "governorate" &&
                          governorateOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        {fieldName === "region" &&
                          regionOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                      </select>
                    </div>
                  ) : (
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
          <button className="subbbtn" type="submit">
            إرسال الطلب
          </button>
        )}
        {submissionMessage && showReturnButton && (
          <button type="button" onClick={handleReturnHome}>
            العودة إلى الصفحة الرئيسية
          </button>
        )}
      </form>
      {submissionMessage && !showReturnButton && (
        <div>
          <p>{submissionMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
