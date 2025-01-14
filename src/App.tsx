import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className="profile-header">
        <h1>Po-Wen Hsiao</h1>
        <h2>蕭博文</h2>
        <h3>淡江大學資訊管理學系三年級</h3>
        <p>這是課程作業!!</p>
      </header>

      <div className="content">
        <div className="left-side">
          <section className="skills-section card">
            <h4>技能</h4>
            <ul>
              <li>Python Programming</li>
              <li>Junior Penetration Testing</li>
              <li>Web Application Penetration Testing</li>
              <li>iOS App Development with SwiftUI</li>
            </ul>
          </section>

          <section className="contact-section card">
            <h4>聯絡方式</h4>
            <ul>
              <li><strong>Line ID:</strong> null</li>
              <li><strong>Email:</strong> null</li>
            </ul>
          </section>

          <section className="experience-section card">
            <h4>經歷</h4>
            <ul>
              <li><em>2022-2023</em>&nbsp;<strong>大學一年級</strong>
                <ul>
                  <li>App Development with Swift Certified User</li>
                </ul>
              </li>
              <li><em>2023-2024</em>&nbsp;<strong>大學二年級</strong>
                <ul>
                  <li>TKU iOS Club 社團負責人 / 社長 / 教學</li>
                  <li>eJPT - Junior Penetration Tester</li>
                  <li>遠傳電信2024暑期資訊安全實習生</li>
                </ul>
              </li>
              <li><em>2024-2025</em>&nbsp;<strong>大學三年級</strong>
                <ul>
                  <li>資訊安全實務基礎 / 資安企業實務應用 - 助教</li>
                  <li>教育部先進資通安全實務人才培育計畫 - 臺灣好厲駭 高階培訓學員</li>
                  <li>TKU iOS Club 教學</li>
                  <li>eWPT - Web Application Penetration Tester</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>

        <div className="right-side">
          <section className="certification-section card">
            <h4>證照</h4>
            <div className="cert-item">
              <h5>App Development with Swift Certified User</h5>
              <img src="https://camo.githubusercontent.com/63347bb9751e69affaf79770552f70045b872638681fb86c7fc1c851ede4645b/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f39623061633761662d663761632d343933382d393661342d3264343830356266653233662f696d6167652e706e67"
                alt="App Development with Swift Certified User" />
            </div>
            <div className="cert-item">
              <h5>eJPT - Junior Penetration Tester</h5>
              <img src="https://camo.githubusercontent.com/280fb77bffe0010e47564bc1a8a319ec47b791f73ff66b75c2ee96871065c8e9/68747470733a2f2f74656d706c617465732e696d616765732e63726564656e7469616c2e6e65742f31363934373139323930313839383731393639393135313534303836323833342e706e67"
                alt="eJPT - Junior Penetration Tester" />
            </div>
            <div className="cert-item">
              <h5>eWPT - Web Application Penetration Tester</h5>
              <img src="https://camo.githubusercontent.com/61378e323ddd7024cb42c7abf26c9e446e4b1ec99118c8a05dce9eda441ef167/68747470733a2f2f6170692e61636372656469626c652e636f6d2f76312f63726564656e7469616c2f67656e65726174655f62616b65645f62616467653f63726564656e7469616c5f69643d313137323237353331"
                alt="eWPT - Web Application Penetration Tester" />
            </div>
          </section>

          <section className="cert-info-section card">
            <h4>證照資訊</h4>
            <table className="certification-table">
              <thead>
                <tr>
                  <th>證照名稱</th>
                  <th>證照資訊</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>App Development with Swift Certified User</td>
                  <td><a
                    href="https://www.credly.com/badges/38c0eed0-d6d5-422d-a2cc-18b44d0df509/public_url">檢視證照資訊</a>
                  </td>
                </tr>
                <tr>
                  <td>eJPT - Junior Penetration Tester</td>
                  <td><a href="https://certs.ine.com/a639fb17-c205-408b-a3cd-a213049621ea">檢視證照資訊</a></td>
                </tr>
                <tr>
                  <td>eWPT - Web Application Penetration Tester</td>
                  <td><a href="https://certs.ine.com/21339d94-af3c-405e-a4aa-61800ecdafd6">檢視證照資訊</a></td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>

    </>
  )
}

export default App
