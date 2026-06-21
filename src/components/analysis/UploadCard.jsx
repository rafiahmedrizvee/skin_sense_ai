import React, { useState } from "react";
import {
  Upload,
  ImagePlus,
  ScanFace,
  Sparkles,
  ShieldCheck,
  Trash2,
} from "lucide-react";

const UploadCard = () => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const removeImage = () => {
    setPreview(null);
  };

  return (
    <section className="upload-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="upload-card">

              {/* Header */}
              <div className="text-center mb-5">
                <div className="upload-icon">
                  <ScanFace size={40} />
                </div>

                <h2 className="upload-title">
                  AI Skin Tone Classification
                </h2>

                <p className="upload-subtitle">
                  Upload a clear facial image and let our Computer Vision model
                  analyze your skin tone to receive personalized skincare
                  recommendations.
                </p>
              </div>

              {/* Upload Area */}
              {!preview ? (
                <label className="upload-box">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                  />

                  <div className="upload-content">
                    <ImagePlus size={70} />

                    <h4>Drag & Drop or Click to Upload</h4>

                    <p>
                      JPG, PNG or JPEG • High Resolution Image Recommended
                    </p>

                    <button className="upload-btn">
                      <Upload size={18} />
                      Choose Image
                    </button>
                  </div>
                </label>
              ) : (
                <div className="preview-wrapper">
                  <img
                    src={preview}
                    alt="Preview"
                    className="preview-image"
                  />

                  <button
                    className="remove-btn"
                    onClick={removeImage}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              )}

              {/* Features */}
              <div className="row g-4 mt-4">

                <div className="col-md-4">
                  <div className="feature-card">
                    <ScanFace size={28} />
                    <h6>Skin Tone Detection</h6>
                    <p>
                      Advanced Computer Vision accurately classifies skin tone.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-card">
                    <Sparkles size={28} />
                    <h6>Personalized Guidance</h6>
                    <p>
                      Receive skincare recommendations tailored to your skin.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-card">
                    <ShieldCheck size={28} />
                    <h6>Secure Processing</h6>
                    <p>
                      Images are processed securely for analysis purposes.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="analyze-section">
                <button className="analyze-btn">
                  Analyze Skin Tone
                </button>

                <p className="mt-3 mb-0 text-muted">
                  Powered by Computer Vision & AI Skin Care Intelligence
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .upload-section {
          background: linear-gradient(
            135deg,
            #f8fafc,
            #eef2ff,
            #ffffff
          );
          min-height: 100vh;
        }

        .upload-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 50px;
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(255, 255, 255, 0.4);
        }

        .upload-icon {
          width: 90px;
          height: 90px;
          margin: auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            #4f46e5,
            #7c3aed
          );
          color: white;
          margin-bottom: 20px;
          box-shadow: 0 15px 40px rgba(79, 70, 229, 0.3);
        }

        .upload-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 12px;
        }

        .upload-subtitle {
          color: #6b7280;
          font-size: 1.05rem;
          max-width: 650px;
          margin: auto;
        }

        .upload-box {
          border: 2px dashed #c7d2fe;
          border-radius: 25px;
          padding: 70px 30px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s ease;
          background: linear-gradient(
            135deg,
            #ffffff,
            #f8faff
          );
        }

        .upload-box:hover {
          transform: translateY(-6px);
          border-color: #6366f1;
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.15);
        }

        .upload-content svg {
          color: #6366f1;
          margin-bottom: 20px;
        }

        .upload-content h4 {
          font-weight: 700;
          color: #111827;
          margin-bottom: 12px;
        }

        .upload-content p {
          color: #6b7280;
          margin-bottom: 25px;
        }

        .upload-btn {
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          background: linear-gradient(
            135deg,
            #4f46e5,
            #7c3aed
          );
          color: white;
          font-weight: 600;
          transition: 0.3s;
        }

        .upload-btn:hover {
          transform: scale(1.05);
        }

        .preview-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 25px;
        }

        .preview-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 25px;
        }

        .remove-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 50%;
          background: white;
          color: crimson;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 25px;
          text-align: center;
          height: 100%;
          transition: 0.3s ease;
          border: 1px solid #eef2ff;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .feature-card svg {
          color: #6366f1;
          margin-bottom: 15px;
        }

        .feature-card h6 {
          font-weight: 700;
          margin-bottom: 10px;
        }

        .feature-card p {
          color: #6b7280;
          font-size: 14px;
        }

        .analyze-section {
          text-align: center;
          margin-top: 50px;
        }

        .analyze-btn {
          border: none;
          padding: 16px 45px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(
            135deg,
            #4f46e5,
            #7c3aed
          );
          box-shadow: 0 15px 40px rgba(79, 70, 229, 0.3);
          transition: 0.3s;
        }

        .analyze-btn:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .upload-card {
            padding: 25px;
          }

          .upload-title {
            font-size: 1.8rem;
          }

          .preview-image {
            height: 320px;
          }

          .upload-box {
            padding: 50px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default UploadCard;