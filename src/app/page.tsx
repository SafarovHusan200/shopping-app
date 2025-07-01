"use client";
import HorizontalCard from "../components/horizontal_card/horizontalCard";
import Navbar from "../components/navbar/navbar";
import styles from "./page.module.css";
import IMG from "@/public/images/img.png";
import IMG2 from "@/public/images/img (1).png";
import IMG3 from "@/public/images/img (2).png";
import IMG4 from "@/public/images/img (3).png";
import IMG5 from "@/public/images/img (4).png";
import IMG6 from "@/public/images/img (5).png";
import IMG7 from "@/public/images/img (6).png";
import IMG8 from "@/public/images/img (7).png";
import IMG9 from "@/public/images/img (8).png";
import IMG10 from "@/public/images/img (9).png";
import IMG11 from "@/public/images/img (10).png";
import IMG12 from "@/public/images/img (11).png";
import IMG13 from "@/public/images/img (12).png";
import IMG14 from "@/public/images/img (13).png";
import IMG15 from "@/public/images/img (14).png";
import IMG16 from "@/public/images/img (15).png";
import ICON6 from "@/public/icons/MdOutlineFormatListBulleted.svg";
import ICON4 from "@/public/icons/MdOutlineFormatListBulletedWhite.svg";
import ICON1 from "@/public/icons/BiBuildings.svg";
import ICON2 from "@/public/icons/BiMap.svg";
import ICON3 from "@/public/icons/BiGridAlt.svg";
import ICON5 from "@/public/icons/BiGridAltWhite.svg";
import Image from "next/image";
import FilterCard from "../components/filter_card/filterCard";
import VerticalCard from "../components/vertical_card/verticalCard";
import { useEffect, useState } from "react";
import Tabs from "../components/tabs/tabs";

import DropdownSelect from "../components/filterBar/DropdownSelect";

const images1 = [
  IMG, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8
];
const images2 = [
  IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16
];

type TabType = "all" | "ready" | "building"


export default function Home() {
  const [selectedType, setSelectedType] = useState<"list" | "grid" | null>(null)
  const [selectedImage, setSelectedImage] = useState<number[]>([]);
  const [mobile, setMobile] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>("all")
  const [type, setType] = useState("")
  const [filterMenu, setFilterMenu] = useState(false)

  const handleImageClick = (index: number) => {
    if (selectedImage?.includes(index)) {
      setSelectedImage(selectedImage.filter((i) => i !== index));
    } else {
      setSelectedImage([...selectedImage, index]);
    }
  };



   useEffect(() => {
    // Ekran o'lchamini tekshiruvchi funksiya
    const handleResize = () => {
      if (window.innerWidth < 920) {
        setSelectedType("grid")
        setMobile(true)
      } else{
        setMobile(false)
      }
    }

    // Ilk yuklanishda tekshiradi
    handleResize()

    // Resize bo'lsa, qayta tekshiradi
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={styles.page}>
      <Navbar setFilterMenu={setFilterMenu} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <p className={styles.navigation}> Главная / Каталог Недвижимости</p>
            <h1 className={styles.title}>Недвижимость в Таиланде от собственников </h1>
          </div>
          
          <div className={styles.icon_container}>
            <div className={styles.icon}>
              <Image src={ICON1} alt="icon" priority width={20} height={20} />
            </div>

            <div className={styles.icon}>
              <Image src={ICON2} alt="icon" priority width={20} height={20} />
            </div>
            <div className={`${styles.icon} ${selectedType === "grid" ? styles.active : ""}`}>
              <Image src={selectedType === "grid" ? ICON5 :ICON3} alt="icon" priority width={20} height={20} onClick={() => setSelectedType("grid")} />
            </div>

            {
              !mobile && <div className={`${styles.icon} ${selectedType === "list" ? styles.active : ""}`}>
              <Image src={selectedType === "list" ? ICON6 : ICON4} alt="icon" priority width={20} height={20} onClick={() => setSelectedType("list")} />
            </div>
            }
            
          </div>
        </div>
        <div className={styles.body}>
          
        
           
          <div className={styles.left_section}>
            <FilterCard setFilterMenu={setFilterMenu} mobile={mobile} filterMenu={filterMenu} />
          </div>
         
          <div className={styles.right_section}>
            {
              mobile && <>
                <div className={styles.filter_bar}>
              
                  <button className={styles.filter_btn} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.00065 9.66663C3.94732 9.66663 3.06532 10.3733 2.77598 11.3333H1.33398V12.6666H2.77598C3.06532 13.6266 3.94732 14.3333 5.00065 14.3333C6.05398 14.3333 6.93598 13.6266 7.22532 12.6666H14.6673V11.3333H7.22532C6.93598 10.3733 6.05398 9.66663 5.00065 9.66663ZM5.00065 13C4.44932 13 4.00065 12.5513 4.00065 12C4.00065 11.4486 4.44932 11 5.00065 11C5.55198 11 6.00065 11.4486 6.00065 12C6.00065 12.5513 5.55198 13 5.00065 13ZM11.0007 5.66663C9.94732 5.66663 9.06532 6.37329 8.77598 7.33329H1.33398V8.66663H8.77598C9.06532 9.62663 9.94732 10.3333 11.0007 10.3333C12.054 10.3333 12.936 9.62663 13.2253 8.66663H14.6673V7.33329H13.2253C12.936 6.37329 12.054 5.66663 11.0007 5.66663ZM11.0007 8.99996C10.4493 8.99996 10.0007 8.55129 10.0007 7.99996C10.0007 7.44863 10.4493 6.99996 11.0007 6.99996C11.552 6.99996 12.0007 7.44863 12.0007 7.99996C12.0007 8.55129 11.552 8.99996 11.0007 8.99996Z" fill="#2D3748"/>
                    <path d="M8.55865 3.33329C8.26932 2.37329 7.38732 1.66663 6.33398 1.66663C5.28065 1.66663 4.39865 2.37329 4.10932 3.33329H1.33398V4.66663H4.10932C4.39865 5.62663 5.28065 6.33329 6.33398 6.33329C7.38732 6.33329 8.26932 5.62663 8.55865 4.66663H14.7507V3.33329H8.55865ZM6.33398 4.99996C5.78265 4.99996 5.33398 4.55129 5.33398 3.99996C5.33398 3.44863 5.78265 2.99996 6.33398 2.99996C6.88532 2.99996 7.33398 3.44863 7.33398 3.99996C7.33398 4.55129 6.88532 4.99996 6.33398 4.99996Z" fill="#2D3748"/>
                    </svg>
                  </button>

                  <button className={styles.filter_btn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4.66602 13.3333H5.99935V5.33329H7.99935L5.33268 2.66663L2.66602 5.33329H4.66602V13.3333ZM13.3327 10.6666H11.3327V2.66663H9.99935V10.6666H7.99935L10.666 13.3333L13.3327 10.6666Z" fill="#2D3748"/>
                    </svg>
                  </button>
                  <DropdownSelect
                    label="Тип"
                    value={type}
                    onChange={setType}
                    options={[
                      { label: "Квартира", value: "apartment" },
                      { label: "Дом", value: "house" },
                      { label: "Студия", value: "studio" }
                    ]}
                  />

                  <DropdownSelect
                    label={
                      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                          <path
                            d="M13.334 6.37133V2H12.0007V3.33333H4.00065V2H2.66732V6.37133C1.87398 6.83333 1.33398 7.68333 1.33398 8.66667V11.3333C1.33398 11.5101 1.40422 11.6797 1.52925 11.8047C1.65427 11.9298 1.82384 12 2.00065 12H2.66732V14.6667H4.00065V12H12.0007V14.6667H13.334V12H14.0007C14.1775 12 14.347 11.9298 14.4721 11.8047C14.5971 11.6797 14.6673 11.5101 14.6673 11.3333V8.66667C14.6673 7.68333 14.1267 6.83333 13.334 6.37133ZM12.0007 4.66667V6H8.66732V4.66667H12.0007ZM4.00065 4.66667H7.33398V6H4.00065V4.66667ZM13.334 10.6667H2.66732V8.66667C2.66732 7.93133 3.26532 7.33333 4.00065 7.33333H12.0007C12.736 7.33333 13.334 7.93133 13.334 8.66667V10.6667Z"
                            fill="#2D3748"
                          />
                        </svg>
                       1-5
                      </span>
                    }
                    value={type}
                    onChange={setType}
                    options={[
                      { label: "Квартира", value: "apartment" },
                      { label: "Дом", value: "house" },
                      { label: "Студия", value: "studio" }
                    ]}
                  />


                  <DropdownSelect
                    label="Цена"
                    value={type}
                    onChange={setType}
                    options={[
                      { label: "Квартира", value: "apartment" },
                      { label: "Дом", value: "house" },
                      { label: "Студия", value: "studio" }
                    ]}
                  />
              
              </div>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              </>
            }
            <div className={styles.right_header}>
              <p>1467 найденных объектов</p>
              <div>
                <span>Сортировать </span>
                <p>
                  Рекомендуемые 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10.862 6.19531L7.99998 9.05731L5.13798 6.19531L4.19531 7.13798L7.99998 10.9426L11.8046 7.13798L10.862 6.19531Z" fill="#2D3748"/>
                  </svg>
                </p>
              </div>
            </div>
            { selectedType === "list" ?             
            <div className={styles.cards}>
              {images1.map((img, index) => (
                <HorizontalCard key={index} imgSrc={img} />
              ))}
            </div>
            :
            <div className={styles.vertical_cards}>
              {images2.map((img, index) => (
                <VerticalCard key={index} selected={selectedImage?.includes(index)} onClick={() => handleImageClick(index)} imgSrc={img} />
              ))}
            </div>
            }
          </div>
        </div>

      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
