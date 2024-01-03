import React, { useEffect, useState, useRef } from "react";
import "../vartical tab/tab.css";
export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const tabMenuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollLeft(tabMenuRef.current.scrollLeft);
    };

    tabMenuRef.current.addEventListener("scroll", handleScroll);

    return () => {
      tabMenuRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [tabMenuRef]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleScrollRight = () => {
    tabMenuRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    tabMenuRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  const handleStartDrag = () => {
    setIsDragging(true);
  };

  const handleEndDrag = () => {
    setIsDragging(false);
  };

  const handleDrag = (event) => {
    if (isDragging) {
      tabMenuRef.current.scrollLeft -= event.movementX;
      setScrollLeft(tabMenuRef.current.scrollLeft);
    }
  };

  const tab_Nav = function (tabBtnClick) {
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
  };
  return (
    <div>
      <section className="main-container">
        <div className="tab-nav-bar">
          <div className="tab-navigation">
            <span
              className="left-btn"
              onClick={handleScrollLeft}
            >&lt;</span>
            <span
              className="right-btn"
              onClick={handleScrollRight}
            >&gt;</span>
            <ul
              className="tab-menu"
              ref={tabMenuRef}
              onMouseDown={handleStartDrag}
              onMouseUp={handleEndDrag}
            >
               <li className={`tab-btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
                Tokyo
              </li>
              <li className={`tab-btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                Rome
              </li>
              <li className={`tab-btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                Paris
              </li>
              <li className={`tab-btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
                Mexico City
              </li>
              <li className={`tab-btn ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>
                Florence
              </li>
              <li className={`tab-btn ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)}>
                New York
              </li>
              <li className="tab-btn">Moscow</li>
              <li className="tab-btn">Sydny</li>
              <li className="tab-btn">San Francisco</li>
              <li className="tab-btn">Amstardam</li>
              <li className="tab-btn">Kolkata</li>
              <li className="tab-btn">Delhi</li>
              <li className="tab-btn">Lucknow</li>
              <li className="tab-btn">Mumbai</li>
              <li className="tab-btn">Hayedrabad</li>
              <li className="tab-btn">Chennai</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="tab-content">
      <div className={`tab ${activeTab === 0 ? 'active' : ''}`}>
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://blog.goinglobal.com/wp-content/uploads/2021/10/iStock-1131743616-1-min.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>Tokyo, Japan</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">Japan</h1>
        </div>

        <div className={`tab ${activeTab === 1 ? 'active' : ''}`}>
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://foodfuntravel.com/wp-content/uploads/2010/11/Pantheon-rome-2299619_1920-1002x667.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>Rome, Italy</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">Italy</h1>
        </div>

        <div className={`tab ${activeTab === 2 ? 'active' : ''}`}>
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://foodfuntravel.com/wp-content/uploads/2010/11/Pantheon-rome-2299619_1920-1002x667.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>Paris</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">France</h1>
        </div>

        <div className={`tab ${activeTab === 3 ? 'active' : ''}`}>
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://foodfuntravel.com/wp-content/uploads/2010/11/Pantheon-rome-2299619_1920-1002x667.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>Mexico City</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">Mexico</h1>
        </div>

        <div className={`tab ${activeTab === 4 ? 'active' : ''}`}>
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://foodfuntravel.com/wp-content/uploads/2010/11/Pantheon-rome-2299619_1920-1002x667.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>Florence</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">Amsterdam</h1>
        </div>

        <div className={`tab ${activeTab === 5 ? 'active' : ''}`}>
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://foodfuntravel.com/wp-content/uploads/2010/11/Pantheon-rome-2299619_1920-1002x667.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>New York</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">Britein</h1>
        </div>

        <div className="tab">
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://foodfuntravel.com/wp-content/uploads/2010/11/Pantheon-rome-2299619_1920-1002x667.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>Moscow</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">Turky</h1>
        </div>

        <div className="tab">
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://foodfuntravel.com/wp-content/uploads/2010/11/Pantheon-rome-2299619_1920-1002x667.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>Sydny</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">Austrelia</h1>
        </div>

        <div className="tab">
          <div className="row">
            <div className="left-column">
              <div className="img-card">
                <img
                  src="https://foodfuntravel.com/wp-content/uploads/2010/11/Pantheon-rome-2299619_1920-1002x667.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="right-column">
              <div className="info">
                <h2>Rome, Italy</h2>
                <div className="description">
                  <p>commercial, cultural, and business hub in the city.</p>
                  <p>
                    Tokyo was originally known as Edo (江戸), a kanji compound
                    of 江 (e, "cove, inlet") and 戸 (to, "entrance, gate,
                    door").[17] The name, which can be translated as "estuary",
                    is a reference to the original settlement's location at the
                    meeting of the Sumida River and Tokyo Bay. During the Meiji
                    Restoration in 1868, the name of the city was changed to
                    Tokyo (東京, from 東 tō "east", and 京 kyō "capital"), when
                    it became the new imperial capital,[18] in line with the
                    East Asian tradition of including the word capital (京) in
                    the name of the capital city (for example, Kyoto (京都),
                    Keijō (京城), Beijing (北京), Nanjing (南京), and Xijing
                    (西京)).[17] During the early Meiji period, the city was
                    sometimes called "Tōkei", an alternative pronunciation for
                    the same characters representing "Tokyo", making it a kanji
                    homograph. Some surviving official English documents use the
                    spelling "Tokei";[19] however, this pronunciation is now
                    obsolete.[20]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="country">Italy</h1>
        </div>
      </div>
    </div>
  );
}
