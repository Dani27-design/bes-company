"use client";

import Image from "next/image";
import logo from "../../public/Logo_PT.BES.png";
import logo_white from "../../public/Logo_PT.BES_white.png";
import logo_no_text from "../../public/Logo_PT.BES_notext.png";
import hero from "../../public/hero.png";
import profile from "../../public/profile.png";
import profile_line from "../../public/profile_line.png";
import layanan_1 from "../../public/Layanan_1.png";
import layanan_2 from "../../public/Layanan_2.png";
import layanan_3 from "../../public/Layanan_3.png";
import dokumentasi_1 from "../../public/dokumentasi_1.png";
import dokumentasi_2 from "../../public/dokumentasi_2.png";
import dokumentasi_3 from "../../public/dokumentasi_3.png";
import dokumentasi_4 from "../../public/dokumentasi_4.png";
import klien_pln from "../../public/klien_pln.png";
import { useWindowSize } from "react-use";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();
  const { width, height } = useWindowSize();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const data_layanan = [
    {
      nama: "Pemasangan Fire Alarm System",
      image: layanan_1,
    },
    {
      nama: "Pemasangan Hydrant Box System",
      image: layanan_2,
    },
    {
      nama: "Produk APAR Berkualitas",
      image: layanan_3,
    },
  ];

  const data_dokumentasi = [
    {
      nama: "dokumentasi 1",
      image: dokumentasi_1,
    },
    {
      nama: "dokumentasi 2",
      image: dokumentasi_2,
    },
    {
      nama: "dokumentasi 3",
      image: dokumentasi_3,
    },
    {
      nama: "dokumentasi 4",
      image: dokumentasi_4,
    },
  ];

  const data_klien = [
    {
      nama: "ULP Kediri",
      logo: klien_pln,
    },
    {
      nama: "ULP Surabaya",
      logo: klien_pln,
    },
    {
      nama: "ULP Sidoarjo",
      logo: klien_pln,
    },
    {
      nama: "ULP Malang",
      logo: klien_pln,
    },
    {
      nama: "ULP Krian",
      logo: klien_pln,
    },
    {
      nama: "ULP Nganjuk",
      logo: klien_pln,
    },
    {
      nama: "ULP Jombang",
      logo: klien_pln,
    },
  ];

  return (
    <main className="bg-white w-full h-full p-0 m-0 overflow-x-hidden relative">
      {/* navbar */}
      {width > 800 ? (
        // desktop nav
        <div className="bg-white w-full flex flex-row items-center justify-between shadow-lg py-2 fixed top-0 z-50">
          {/* <Link scroll={true} href="/"> */}
          <Image
            src={logo}
            alt="logo"
            className="w-60 px-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              window.location.hash = "";
            }}
          />
          {/* </Link> */}
          <div className="flex flex-row items-center justify-center gap-x-4 px-3">
            <p
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                window.location.hash = "";
              }}
              className="text-black text-[16px] font-semibold cursor-pointer"
            >
              Beranda
            </p>
            <Link
              scroll={true}
              href="#aboutus"
              className="text-black text-[16px] font-semibold cursor-pointer"
            >
              Tentang Kami
            </Link>
            <Link
              scroll={true}
              href="#product"
              className="text-black text-[16px] font-semibold cursor-pointer"
            >
              Layanan Kami
            </Link>
            <Link
              scroll={true}
              href="#gallery"
              className="text-black text-[16px] font-semibold cursor-pointer"
            >
              Dokumentasi
            </Link>
          </div>
        </div>
      ) : (
        // mobile nav
        <div className="bg-white w-full flex flex-row items-center justify-between shadow-lg py-2 fixed top-0 z-50">
          <Image
            src={logo}
            alt="logo"
            className="w-44 px-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              window.location.hash = "";
            }}
          />
          <svg
            width="45"
            height="45"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            className="px-3"
          >
            <path
              fill="none"
              stroke="#141F48"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 2H6m5 5H3.5m5 5h-8"
            />
          </svg>
        </div>
      )}

      <div id="hero" className="w-full relative pt-[5vh]">
        <Image
          src={hero}
          alt="hero"
          className="w-full p-0 m-0 min-h-[400px]"
          objectFit="cover"
          style={{ objectFit: "cover" }}
          data-aos="fade-down"
        />
        <div
          data-aos="zoom-in"
          className="w-full flex flex-col items-center justify-center gap-y-[40px] absolute top-20 right-0 left-0 z-10 lg:top-40 md:top-24"
        >
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "WE ARE PROFESSIONAL", // initially rendered starting point
              1000,
              "WE ARE EXCELLENT PARTNER",
              1000,
              "WE ARE TRUSTED PARTNER",
              1000,
              "WE ARE INNOVATIVE PARTNER",
              500,
            ]}
            speed={50}
            className="text-white text-[20px] font-bold lg:text-[60px] md:text-[40px]"
            repeat={Infinity}
          />
          <p className="text-white text-[20px] font-bold lg:text-[60px] md:text-[40px]">
            WE PROTECT YOUR COMPANY
          </p>
          <p className="w-[80%] mb-0 text-center text-white text-[10px] font-bold lg:text-[16px] md:text-[12px]">
            PT Brilian Eka Saetama adalah mitra yang dapat diandalkan dan
            terpercaya dalam memberikan solusi yang kuat, aman, dan sesuai
            dengan kebutuhan client. Kami hadir 24 Jam menjaga perusahaan dan
            bisnis anda dari resiko kebakaran dengan prosedur yang aman dan
            dapat diandalkan.
          </p>
          <Link
            scroll={true}
            href="#contact"
            className="bg-[#41D49F] px-4 py-3 mt-0 font-bold rounded-lg cursor-pointer text-[10px] lg:text-[16px] md:text-[12px]"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>

      <div
        id="aboutus"
        className={
          width > 800
            ? "mt-20 w-full flex flex-row items-start justify-center"
            : "mt-8 w-full flex flex-col items-start justify-center"
        }
        style={{
          scrollMarginTop: "100px",
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          className={
            width > 800
              ? "w-[50%] flex flex-col items-center justify-center"
              : "w-[100%] flex flex-col items-center justify-center"
          }
        >
          <p className="text-[#141F48] text-[20px] font-bold w-[85%] lg:text-[30px] md:text-[25px]">
            Pelopor Keselamatan : <br />
            Sejarah PT. Brilian Eka Saetama (BES) <br />
            <Image
              src={profile_line}
              alt="line"
              className="w-[30%] p-0 m-0 mt-[20px]"
            />
          </p>
          <p className="text-[#141F48] text-[13px] font-medium w-[85%] mt-5 text-justify lg:text-[16px] md:text-[14px]">
            PT. Brilian Eka Saetama (BES) didirikan pada tahun 2023 dengan visi
            memberikan solusi proteksi kebakaran yang inovatif dan berkualitas
            tinggi. Perusahaan ini muncul sebagai respons terhadap kebutuhan
            mendesak akan sistem proteksi kebakaran yang efektif dan andal di
            berbagai industri.
          </p>
          <p className="text-[#141F48] text-[13px] font-medium w-[85%] mt-5 text-justify lg:text-[16px] md:text-[14px]">
            PT. Brilian Eka Saetama (BES) telah lama berkomitmen menjadi mitra
            utama dalam keselamatan dengan menyediakan solusi keamanan dari
            bahaya kebakaran. Kami berkomitmen untuk memberikan layanan
            pemasangan sistem perangkat pendukung dengan standar kualitas
            terbaik, membantu masyarakat dan perusahaan menjaga aset mereka dari
            risiko kebakaran, serta menciptakan lingkungan yang aman dan
            terlindungi.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          className={
            width > 800
              ? "w-[50%] flex flex-col items-center justify-center relative"
              : "w-[100%] flex flex-col items-center justify-center relative mt-10"
          }
        >
          <Image src={profile} alt="hero" className="w-[80%] p-0 m-0" />
          <div className="w-[60%] h-[52px] rounded-lg shadow-lg bg-white absolute -bottom-6 flex flex-row self-center items-center justify-center">
            <p className="text-[#076269] font-bold text-[16px] lg:text-[22px] md:text-[20px]">
              7+ Years of Experience
            </p>
          </div>
        </div>
      </div>

      <div
        id="product"
        className={
          width > 800
            ? "mt-16 py-20 w-full flex flex-col items-center justify-center bg-[#E6EFF0]"
            : "mt-16 py-8 w-full flex flex-col items-center justify-center bg-[#E6EFF0]"
        }
      >
        <p
          data-aos="fade-down"
          className="text-[#141F48] text-[20px] font-bold lg:text-[30px] md:text-[25px]"
        >
          Layanan Kami
        </p>
        <p
          data-aos="fade-down"
          className="text-[#141F48] text-[14px] font-bold mt-3 lg:text-[20px] md:text-[16px] max-w-[80%] text-center"
        >
          Menjaga dan Melindungi Bisnis Anda dari Bahaya Kebakaran
        </p>
        <div
          className={
            width > 800
              ? "w-full flex flex-row self-center items-center justify-evenly mt-8 gap-x-5"
              : "w-full flex flex-col self-center items-center justify-evenly mt-8 gap-y-7"
          }
        >
          {data_layanan.map((item, idx) => {
            return (
              <div
                data-aos="zoom-in"
                key={idx}
                className="cursor-pointer bg-white max-w-[90%] w-[352px] h-[379px] flex flex-col rounded-lg shadow-lg relative items-center overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.nama}
                  className="w-full p-3"
                />
                <div className="w-full h-fit px-0 py-5 bg-white flex flex-col absolute bottom-0 items-center justify-center">
                  <p className="text-[#141F48] text-[16px] font-bold">
                    {item.nama}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        id="gallery"
        style={{
          scrollMarginTop: "80px",
        }}
        className={
          width > 800
            ? "mt-5 pt-10 pb-1 w-full flex flex-col items-center justify-center bg-white"
            : "mt-5 pt-5 pb-1 w-full flex flex-col items-center justify-center bg-white"
        }
      >
        <p
          data-aos="fade-down"
          className="text-[#141F48] text-[20px] font-bold lg:text-[30px] md:text-[25px]"
        >
          Galeri Dokumentasi PT. BES
        </p>
        <div
          className={
            width > 800
              ? "w-full flex flex-row self-center items-center justify-evenly mt-8 gap-x-5"
              : "w-full flex flex-col self-center items-center justify-evenly mt-8 gap-y-5"
          }
        >
          {data_dokumentasi.map((item, idx) => {
            return (
              <div
                data-aos="zoom-in"
                key={idx}
                className="cursor-pointer bg-white w-[248px] h-[287px] border flex flex-col rounded-lg shadow-lg relative items-center overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.nama}
                  className="w-full p-3"
                />
                <div className="w-full h-fit px-0 py-5 bg-white flex flex-col absolute bottom-0 items-center justify-center"></div>
              </div>
            );
          })}
        </div>
        <div
          data-aos="fade-up"
          className="w-full flex flex-row items-center justify-center gap-x-1 mt-16 cursor-pointer"
        >
          <p className="text-[#076269] text-[20px] font-bold">Selengkapnya</p>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#076269"
              fill-rule="evenodd"
              d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zm.707-5.293a1 1 0 0 1-1.415-1.414L12.585 13H9a1 1 0 1 1 0-2h3.586l-1.293-1.293a1 1 0 0 1 1.415-1.414l3 3a1 1 0 0 1 0 1.414l-3 3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div
        id="client"
        className="mt-16 py-8 w-full flex flex-col items-center justify-center bg-[#E6EFF0]"
      >
        <p
          data-aos="fade-down"
          className="text-[#141F48] text-[20px] font-bold lg:text-[30px] md:text-[25px]"
        >
          Klien PT. BES
        </p>
        <div
          className={
            width > 800
              ? "w-full flex flex-row self-center items-center justify-evenly mt-8"
              : "w-[90%] flex flex-row self-center items-center justify-evenly mt-8 flex-wrap gap-y-4 gap-x-4"
          }
        >
          {data_klien.map((item, idx) => {
            return (
              <div
                key={idx}
                data-aos="zoom-in"
                className="w-fit h-fit flex flex-col items-center gap-y-3"
              >
                <Image
                  src={item.logo}
                  alt={item.nama}
                  className="cursor-pointer w-[100px] grayscale hover:grayscale-0"
                />
                <p className="text-[#141F48] text-[16px] font-bold hover:text-[#076269] lg:text-[22px] md:text-[20px]">
                  {item.nama}
                </p>
              </div>
            );
          })}
        </div>
        <div
          data-aos="fade-up"
          className="w-full flex flex-row items-center justify-center gap-x-1 mt-16 cursor-pointer"
        >
          <p className="text-[#141F48] text-[20px] font-bold">Selengkapnya</p>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#141F48"
              fill-rule="evenodd"
              d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zm.707-5.293a1 1 0 0 1-1.415-1.414L12.585 13H9a1 1 0 1 1 0-2h3.586l-1.293-1.293a1 1 0 0 1 1.415-1.414l3 3a1 1 0 0 1 0 1.414l-3 3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div
        id="contact"
        data-aos="zoom-out-right"
        style={{
          scrollMarginTop: "100px",
        }}
        className="mt-10 mb-16 pt-10 pb-1 w-full flex flex-col items-center justify-center bg-white"
      >
        <div className="w-[85%] h-fit py-10 px-14 flex flex-col items-start bg-white border-black border rounded-lg shadow-lg relative overflow-hidden">
          <div className="w-[16px] h-[105%] bg-[#076269] absolute top-0 -left-1 mb-1"></div>
          <div className="w-[16px] h-[105%] bg-[#141F48] absolute top-0 left-3 mb-1"></div>
          <p className="text-[#141F48] text-[20px] font-bold lg:text-[30px] md:text-[25px]">
            Konsultasikan Kebutuhan Bisnis Anda Disini!
          </p>
          <p className="text-[#141F48] text-[16px] font-medium">
            Dapatkan solusi dan penanganan terbaik keamanan dari resiko
            kebakaran bersama Tim PT. BES
          </p>
          <button
            className={
              width > 800
                ? "w-fit h-fit bg-[#41D49F] px-3 py-3 mt-2 flex flex-row items-center justify-center text-[20px] font-bold rounded-lg gap-x-2 cursor-pointer absolute right-10"
                : "w-fit h-fit bg-[#41D49F] px-3 py-1 mt-5 flex flex-row items-center justify-center text-[15px] font-bold rounded-lg gap-x-2 cursor-pointer"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={width > 800 ? "30" : "25"}
              height={width > 800 ? "30" : "25"}
              viewBox="0 0 43 43"
              fill="none"
            >
              <path
                d="M35.6094 8.0625H7.39062C5.53529 8.0625 4.03125 9.56654 4.03125 11.4219V31.5781C4.03125 33.4335 5.53529 34.9375 7.39062 34.9375H35.6094C37.4647 34.9375 38.9688 33.4335 38.9688 31.5781V11.4219C38.9688 9.56654 37.4647 8.0625 35.6094 8.0625Z"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.40625 13.4375L21.5 22.8438L33.5938 13.4375"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Email Kami
          </button>
        </div>
      </div>

      <div className="mt-16 py-8 w-full flex flex-col items-center justify-center bg-[#141F48]">
        <div
          className={
            width > 800
              ? "w-full flex flex-row items-start justify-evenly"
              : "w-full flex flex-col items-center justify-center"
          }
        >
          <div className="w-full flex flex-col items-center justify-start">
            <Image
              src={logo_white}
              alt="logo_bes"
              className="w-[350px] p-0 m-0 -ml-5"
            />
            <p
              className={
                width > 800
                  ? "text-white text-[16px] font-medium w-[350px] mt-10 text-justify"
                  : "text-white text-[16px] font-medium w-[350px] mt-5 mb-5 text-justify"
              }
            >
              Perusahaan penyedia layanan keamanan kebakaran meliputi penjualan
              dan pemasangan alat berserta sistem pencegah dan pemadam
              kebakaran.
            </p>
          </div>
          <div
            className={
              width > 800
                ? "w-full flex flex-col items-center justify-start"
                : "w-[90%] flex flex-col items-start justify-start"
            }
          >
            <p className="w-[80%] text-white text-[20px] font-bold pl-0 pb-3 pr-3 border-b-2 border-white mb-5 lg:text-[30px] md:text-[25px]">
              Layanan Kami
            </p>
            {data_layanan.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className={
                    width > 800
                      ? "cursor-pointer text-white text-[16px] font-bold gap-x-2 flex flex-row self-start ml-10 mb-3 items-center justify-center lg:text-[20px] md:text-[18px]"
                      : "cursor-pointer text-white text-[16px] font-bold gap-x-2 flex flex-row self-start ml-3 mb-3 items-center justify-center lg:text-[20px] md:text-[18px]"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={width > 800 ? "22" : "18"}
                    height={width > 800 ? "22" : "18"}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M7.90625 4.8125L14.0938 11L7.90625 17.1875"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  {item.nama}
                </p>
              );
            })}
          </div>
          <div
            className={
              width > 800
                ? "w-full flex flex-col items-center justify-start"
                : "w-[90%] flex flex-col items-start justify-start mt-3"
            }
          >
            <p className="w-[80%] text-white text-[20px] font-bold pl-0 pb-3 pr-3 border-b-2 border-white mb-5 lg:text-[30px] md:text-[25px]">
              Kontak Kami
            </p>
            <p
              className={
                width > 800
                  ? "cursor-pointer text-white text-[16px] font-bold gap-x-2 flex flex-row self-start ml-10 mb-3 items-center justify-center lg:text-[20px] md:text-[18px]"
                  : "cursor-pointer text-white text-[16px] font-bold gap-x-2 flex flex-row self-start ml-3 mb-3 items-center justify-center lg:text-[20px] md:text-[18px]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width > 800 ? "23" : "19"}
                height={width > 800 ? "23" : "19"}
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M19.0469 4.3125H3.95312C2.96074 4.3125 2.15625 5.11699 2.15625 6.10938V16.8906C2.15625 17.883 2.96074 18.6875 3.95312 18.6875H19.0469C20.0393 18.6875 20.8438 17.883 20.8438 16.8906V6.10938C20.8438 5.11699 20.0393 4.3125 19.0469 4.3125Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.03125 7.1875L11.5 12.2188L17.9688 7.1875"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              pt-bes@mail.com
            </p>
            <p
              className={
                width > 800
                  ? "cursor-pointer text-white text-[16px] font-bold gap-x-2 flex flex-row self-start ml-10 mb-3 items-center justify-center lg:text-[20px] md:text-[18px]"
                  : "cursor-pointer text-white text-[16px] font-bold gap-x-2 flex flex-row self-start ml-3 mb-3 items-center justify-center lg:text-[20px] md:text-[18px]"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width > 800 ? "24" : "20"}
                height={width > 800 ? "24" : "20"}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2.25C8.27344 2.25 5.25 5.12766 5.25 8.67188C5.25 12.75 9.75 19.2127 11.4023 21.4448C11.4709 21.5391 11.5608 21.6157 11.6647 21.6686C11.7686 21.7215 11.8835 21.749 12 21.749C12.1165 21.749 12.2314 21.7215 12.3353 21.6686C12.4392 21.6157 12.5291 21.5391 12.5977 21.4448C14.25 19.2136 18.75 12.7533 18.75 8.67188C18.75 5.12766 15.7266 2.25 12 2.25Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Jl. Pabean Asri Permai No. 212,
              <br />
              Waru Sidoarjo Jawa Timur
            </p>
          </div>
        </div>
        <p
          className={
            width > 800
              ? "text-white text-[16px] font-medium w-fit mt-20"
              : "text-white text-[13px] font-medium w-fit mt-7"
          }
        >
          Copyright © 2023 PT. Brilian Eka Saetama (BES)
        </p>
      </div>

      {scrollY >= 350 && (
        <div
          className="p-3 rounded-xl bg-[#41D49F] w-fit fixed bottom-5 right-5 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            window.location.hash = "";
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M21.539 38.05c0-1.322-.91-2.318-2.116-2.318H3.603c-1.209 0-2.118.996-2.118 2.318c0 1.287.921 2.26 2.146 2.26h5.495v17.813c0 1.299.986 2.198 2.397 2.198c1.416 0 2.406-.899 2.406-2.198V40.31h5.495c1.185 0 2.115-.993 2.115-2.26m9.511-2.75c-6.728 0-11.08 4.957-11.08 12.625c0 7.705 4.348 12.684 11.08 12.684c6.695 0 11.02-4.967 11.02-12.651c0-7.691-4.321-12.658-11.02-12.658m0 20.762c-3.815 0-6.184-3.104-6.184-8.104c0-5.02 2.369-8.142 6.184-8.142c3.78 0 6.127 3.056 6.127 7.966c.003 5.262-2.232 8.28-6.127 8.28M54.4 35.73h-6.376c-2.619 0-3.949 1.387-3.949 4.125v18.207c0 1.352.955 2.258 2.375 2.258c1.394 0 2.371-.916 2.371-2.228v-7.106h5.468c5.153 0 8.231-2.924 8.231-7.828c0-4.648-3.036-7.428-8.12-7.428m3.258 7.487c0 2.229-1.121 3.313-3.432 3.313H48.82v-6.312h5.406c2.311.001 3.432.981 3.432 2.999M37.825 29.542V19.236h2.887c1.697 0 3.093-1.625 3.259-3.708L30.978.583L18.071 15.522c.168 2.083 1.562 3.713 3.261 3.713h2.887v10.306z"
            />
          </svg>
        </div>
      )}
    </main>
  );
};

export default Home;
