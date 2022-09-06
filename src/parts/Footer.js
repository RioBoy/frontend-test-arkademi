import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-[104px]">
      <section className="footer-first">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-5/12">
              <img
                src="/img/image-footer.png"
                alt="Gallery"
                className="w-full h-full"
              />
            </div>
            <div className="w-1/12"></div>
            <div className="w-full lg:w-6/12">
              <div className="flex flex-col">
                <svg
                  width="144"
                  height="30"
                  viewBox="0 0 144 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.7222 24.7941H48.5059L49.7936 29.2902H52.6855L48.009 14.1338C47.8732 13.6262 47.5342 13.3724 46.9921 13.3724H44.2361C43.6939 13.3724 43.3549 13.6262 43.2191 14.1338L38.5427 29.2902H41.4345L42.7222 24.7941ZM46.2691 16.9262L47.8277 22.4171H43.4013L44.959 16.9262L45.3201 15.5642H45.9304C45.9453 15.6415 46.0582 16.0955 46.2691 16.9262Z"
                    fill="#0977BE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.6255 29.2902H65.63L64.2296 24.3068C64.0789 23.6143 63.8076 23.076 63.4156 22.6919C63.0683 22.3323 62.6312 22.0766 62.1518 21.9526V21.8367C63.1909 21.7014 63.9362 21.3066 64.3878 20.6524C64.8394 19.9982 65.0652 19.0559 65.0652 17.8253C65.0652 16.0568 64.6547 14.8378 63.8338 14.1684C63.0128 13.499 61.616 13.1643 59.6434 13.1643C57.2038 13.1643 55.3134 13.2337 53.9724 13.3724V29.2902H56.7748V22.8984L59.5764 22.9212C60.495 22.9212 61.0974 23.3983 61.3833 24.3525L62.6255 29.2902ZM59.5755 20.5484H56.774V15.5414H59.5764C60.5878 15.5414 61.2779 15.7105 61.6467 16.0489C62.0155 16.3873 62.1999 17.0409 62.1999 18.0098C62.2021 18.9786 62.0174 19.6401 61.6459 19.9943C61.2743 20.3485 60.5842 20.5331 59.5755 20.5484Z"
                    fill="#0977BE"
                  />
                  <path
                    d="M71.8202 22.1176H70.284C70.3918 22.6333 70.4448 23.1594 70.4422 23.6868V29.2902H67.6183V13.3724H70.4422V18.0563C70.4471 18.6747 70.3941 19.2923 70.284 19.9004H71.8202L76.0901 13.3707H79.1624L74.9605 19.7854C74.6741 20.2355 74.3238 20.6398 73.9212 20.9849V21.0543C74.3944 21.4406 74.806 21.8998 75.141 22.4153L79.4564 29.2902H76.2929L71.8202 22.1176Z"
                    fill="#0977BE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M83.4323 24.7941H89.2159L90.5037 29.2901H93.3955L88.7232 14.1303C88.5879 13.6228 88.2489 13.369 87.7062 13.369H84.9461C84.4039 13.369 84.0649 13.6228 83.9291 14.1303L79.2527 29.2901H82.1445L83.4323 24.7941ZM86.9791 16.9261L88.5377 22.417H84.1097L85.669 16.9261L86.0301 15.5642H86.6404C86.6548 15.6415 86.7677 16.0954 86.9791 16.9261Z"
                    fill="#0977BE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M94.6824 13.3724V29.2902C96.7455 29.4306 98.6886 29.5005 100.512 29.4999C102.879 29.4999 104.532 28.9078 105.47 27.7235C106.409 26.5392 106.878 24.4086 106.878 21.3317C106.882 18.2554 106.412 16.125 105.47 14.9407C104.529 13.7565 102.876 13.1643 100.512 13.1643C98.6891 13.1643 96.7461 13.2337 94.6824 13.3724ZM97.5063 27.0324V15.5862C97.795 15.5873 98.2671 15.5839 98.9224 15.576C99.5777 15.5681 100.109 15.5642 100.516 15.5642C101.793 15.5642 102.676 15.9795 103.166 16.8102C103.655 17.6409 103.9 19.1484 103.9 21.3325C103.9 23.5173 103.659 25.0211 103.177 25.8439C102.695 26.6667 101.807 27.0781 100.512 27.0781C99.6834 27.0781 98.6817 27.0628 97.5063 27.0324Z"
                    fill="#0977BE"
                  />
                  <path
                    d="M119.217 26.963L119.352 29.1548C117.982 29.2783 115.692 29.3398 112.485 29.3392C111.46 29.3392 110.65 29.0702 110.056 28.5322C109.461 27.9942 109.158 27.2557 109.145 26.3168V16.3476C109.159 15.4091 109.463 14.6706 110.056 14.1321C110.649 13.5935 111.458 13.3242 112.485 13.3242C115.693 13.3242 117.982 13.386 119.352 13.5095L119.217 15.7241H113.117C112.711 15.7241 112.42 15.8248 112.248 16.0244C112.076 16.224 111.988 16.57 111.988 17.0624V19.8539H118.381V22.0685H111.988V25.6214C111.988 26.1137 112.074 26.4597 112.248 26.6594C112.42 26.8598 112.711 26.9597 113.117 26.9597L119.217 26.963Z"
                    fill="#0977BE"
                  />
                  <path
                    d="M133.924 13.3724H136.838C137.546 13.3724 137.915 13.7492 137.946 14.5026L138.578 29.2902H135.799L135.28 15.6996H134.851L132.162 26.2905C131.996 26.9357 131.605 27.2586 130.987 27.2591H128.819C128.187 27.2597 127.788 26.938 127.622 26.2939L124.889 15.703H124.505L124.008 29.2936H121.252L121.839 14.5026C121.869 13.7497 122.238 13.373 122.946 13.3724H125.883C126.501 13.3724 126.885 13.6956 127.035 14.3419L129.249 22.9703C129.279 23.0774 129.437 23.8004 129.724 25.1392H130.063C130.228 24.2476 130.386 23.517 130.537 22.9474L132.751 14.341C132.915 13.6953 133.306 13.3724 133.924 13.3724Z"
                    fill="#0977BE"
                  />
                  <path
                    d="M144 29.2902H141.176V13.3724H144V29.2902Z"
                    fill="#0977BE"
                  />
                  <path
                    d="M15.4155 13.892L13.3872 17.4576C12.6682 18.7198 11.9498 19.982 11.2318 21.2443C10.4476 22.6211 9.66347 23.9982 8.87932 25.3755C8.21769 26.5368 7.55607 27.6998 6.89444 28.8646C6.76506 29.0918 6.53569 29.4992 6.16812 29.4992H0.825124C0.547241 29.4992 0.376689 29.2168 0.608993 28.8585C0.883935 28.3769 1.1579 27.8947 1.43088 27.412C2.00233 26.4108 2.57427 25.4091 3.1467 24.4069C3.78382 23.2901 4.41873 22.1725 5.05144 21.0542C5.63956 20.0191 6.22938 18.9841 6.82093 17.9491C7.48353 16.7838 8.14565 15.6182 8.80728 14.4525C9.4444 13.3301 10.0815 12.2075 10.7186 11.0846C11.3518 9.97381 11.9855 8.86305 12.6197 7.75229C13.0909 6.92376 13.5578 6.09144 14.0282 5.26216C14.6634 4.14433 15.2919 3.02271 15.9396 1.91321C16.1859 1.49137 15.9558 1.88898 16.6806 0.636338C16.7288 0.55098 16.8178 0.498909 16.9137 0.500017H17.1768C17.2763 0.500466 17.3681 0.555238 17.418 0.643912C18.1164 1.89958 18.0333 1.74508 18.1289 1.91397C18.7905 3.07875 19.4521 4.24329 20.1137 5.40757C20.5087 6.10129 20.9038 6.79501 21.2988 7.48873C22.0986 8.89688 22.8987 10.305 23.699 11.7132C24.4003 12.9446 25.1021 14.1758 25.8044 15.4067C26.3867 16.4291 26.9679 17.452 27.5482 18.4754C28.178 19.5816 28.8085 20.6879 29.4397 21.7941C30.0886 22.9336 30.7367 24.0739 31.3842 25.215C32.0487 26.3828 32.7138 27.5506 33.3793 28.7184C33.5999 29.06 33.5264 29.5 33.0904 29.5H27.618L27.56 29.4924C27.5362 29.4844 27.5115 29.4798 27.4865 29.4788C26.3205 29.4788 25.1543 29.4818 23.9879 29.4879C23.9527 29.4892 23.9176 29.4927 23.8828 29.4985H23.8556H12.1154C11.8302 29.4985 11.7478 29.2054 11.9147 28.9078C12.3823 28.0747 12.855 27.2416 13.3262 26.4085L15.225 23.052C15.6911 22.2301 16.1567 21.4076 16.6218 20.5846L16.7005 20.446C16.74 20.3755 16.8132 20.3321 16.8923 20.3324H17.2268C17.3055 20.3322 17.3784 20.3752 17.418 20.4453L17.4606 20.521C17.8047 21.1148 18.1391 21.7146 18.4773 22.3129C18.8841 23.0338 19.2906 23.7546 19.6969 24.4751C19.721 24.5255 19.7726 24.5556 19.827 24.5508C21.4179 24.5468 23.0085 24.5442 24.5988 24.5432C24.6282 24.5432 24.6576 24.5379 24.7039 24.5334L17.035 11.0664"
                    fill="#0977BE"
                  />
                </svg>
                <p className="font-semibold text-[11px] leading-[18px] lg:text-xs text-black-secondary mt-[14px]">
                  Arkademi adalah massive open online course (MOOC) platform
                  karya anak bangsa Indonesia. Pembelajaran di Arkademi
                  dikhususkan untuk skill based learning atau pembelajaran
                  berbasis keahlian yang diantarkan melalui kelas belajar dan
                  kursus online melalui aplikasi Arkademi berbasis mobile app
                  dan web. Di Arkademi setiap individu dan lembaga kursus dapat
                  membuka dan mengkomersialkan kelas onlinenya dan menjangkau
                  siswa dari seluruh Indonesia.
                </p>
                <h6 className="font-extrabold text-[14px] leading-[17px] text-black-secondary mt-[25px]">
                  Akselerator
                </h6>
                <p className="font-normal text-[11px] lg:text-[12px] leading-[18px] lg:leading-[29px] text-gray-fourth mt-[9px]">
                  Arkademi adalah bagian program inkubasi dan akselerator dari
                  perusahaan top-level dunia: SOSV MOX (Mobile Only
                  Accelerator), Amazon Web Service (Edstart Program) dan Y
                  Combinator (Startup School) yang dipilih dari tech startup
                  edukasi terbaik dunia.
                </p>
                <span className="flex xsm:flex-wrap xsm:gap-y-5 mt-5 mb-[49px] lg:mb-0">
                  <img
                    src="/img/company-1.png"
                    alt="Company"
                    className="h-[16px] lg:h-[23px] w-fit mr-4"
                  />
                  <img
                    src="/img/company-2.png"
                    alt="Company"
                    className="h-[16px] lg:h-[23px] w-fit mr-4"
                  />
                  <img
                    src="/img/company-3.png"
                    alt="Company"
                    className="h-[16px] lg:h-[23px] w-fit mr-4"
                  />
                  <img
                    src="/img/company-4.png"
                    alt="Company"
                    className="h-[16px] lg:h-[23px] w-fit mr-4"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-second border-t-[3px] border-[#F1F2F4]">
        <div className="container">
          <div className="flex flex-wrap mt-[43px] lg:mt-[71px] gap-[40px] lg:gap-0">
            <div className="w-full lg:w-7/12">
              <div className="flex flex-wrap gap-[31px] lg:gap-0">
                <div className="w-full lg:w-3/12">
                  <div className="flex flex-col">
                    <h5 className="font-extrabold text-[15px] leading-[18px] text-black-secondary mb-[15px]">
                      Kategori Popular
                    </h5>
                    <ul>
                      <li>
                        <a
                          href="/"
                          className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                        >
                          Keuangan
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                        >
                          Perpajakan
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                        >
                          Bisnis
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                        >
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                        >
                          Kewirausahaan
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                        >
                          Investasi
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-3/12">
                  <h5 className="font-extrabold text-[15px] leading-[18px] text-black-secondary mb-[15px]">
                    Lainnya
                  </h5>
                  <ul>
                    <li>
                      <a
                        href="/"
                        className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                      >
                        Panduan
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                      >
                        Tentang Kami
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                      >
                        Karier
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-semibold text-[12px] leading-[29px] text-gray-fourth hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-6/12">
                  <div className="flex flex-col">
                    <h5 className="font-extrabold text-[15px] leading-[18px] text-black-secondary">
                      Metode Pembayaran
                    </h5>
                    <span className="grid items-center grid-cols-5 gap-[15px] mt-[28px]">
                      <img
                        src="/img/payment-1.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-2.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-3.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-4.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-5.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                    </span>
                    <span className="grid items-center grid-rows-2 grid-cols-4 gap-[15px] mt-[15px]">
                      <img
                        src="/img/payment-6.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-7.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-8.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-9.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-10.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-11.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-12.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                      <img
                        src="/img/payment-13.png"
                        alt="payment"
                        className="w-[100px] max-h-[23px]"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/12"></div>
            <div className="w-full lg:w-3/12">
              <div className="flex flex-col">
                <h5 className="font-extrabold text-[15px] leading-[18px] text-black-secondary mb-5">
                  Ikuti Kami
                </h5>
                <span className="flex items-center gap-[10px]">
                  <a href="/" className="block h-[33px] w-[33px]">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="16.6901"
                        cy="17"
                        rx="16.6901"
                        ry="16.5"
                        fill="#3B5999"
                      />
                      <path
                        d="M21.482 10.8473V7.86259C21.482 7.86259 18.3962 7.83325 18.1885 7.83325C16.794 7.83325 14.7911 9.40259 14.7911 11.1846V14.3819H11.8982V17.7699H14.7466V26.1666H18.1218V17.7259H21.1037L21.482 14.4186H18.1588C18.1588 14.4186 18.1588 12.3873 18.1588 11.9913C18.1588 11.4046 18.6039 10.8399 19.2715 10.8399C19.7166 10.8253 21.482 10.8473 21.482 10.8473Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="/" className="block h-[33px] w-[33px]">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="17.095"
                        cy="17"
                        rx="16.6901"
                        ry="16.5"
                        fill="#E53935"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1905 10.6125H22.9996C24.8541 10.6125 26.3673 12.1159 26.3673 13.9419V20.0505C26.3673 21.8839 24.8541 23.3799 22.9996 23.3799H11.1905C9.33599 23.3799 7.82275 21.8839 7.82275 20.0505V13.9419C7.82275 12.1085 9.33599 10.6125 11.1905 10.6125ZM14.7362 20.5639L17.6143 18.8039L20.4924 17.0439L17.6143 15.2839L14.7362 13.5239V17.0439V20.5639Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="/" className="block h-[33px] w-[33px]">
                    <svg
                      width="35"
                      height="34"
                      viewBox="0 0 35 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="17.5"
                        cy="17"
                        rx="16.6901"
                        ry="16.5"
                        fill="url(#paint0_linear_9_2363)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9617 7.83325H21.0457C24.2057 7.83325 26.7723 10.3706 26.7723 13.4946V20.4979C26.7723 23.6219 24.2057 26.1593 21.0457 26.1593H13.9617C10.8017 26.1593 8.23514 23.6219 8.23514 20.4979V13.4946C8.23514 10.3706 10.8017 7.83325 13.9617 7.83325ZM21.0383 24.1279C23.0634 24.1279 24.7027 22.4999 24.7027 20.5053V13.5019C24.7027 11.4999 23.056 9.87925 21.0383 9.87925H13.9543C11.9292 9.87925 10.2899 11.5073 10.2899 13.5019V20.5053C10.2899 22.5073 11.9366 24.1279 13.9543 24.1279H21.0383Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.76 17C12.76 14.4186 14.8889 12.314 17.5 12.314C20.1111 12.314 22.24 14.4186 22.24 17C22.24 19.5813 20.1111 21.686 17.5 21.686C14.8889 21.686 12.76 19.5813 12.76 17ZM14.6219 17C14.6219 18.5693 15.9126 19.8453 17.5 19.8453C19.0874 19.8453 20.3781 18.5693 20.3781 17C20.3781 15.4306 19.0874 14.1546 17.5 14.1546C15.9126 14.1546 14.6219 15.4306 14.6219 17Z"
                        fill="white"
                      />
                      <ellipse
                        cx="22.4728"
                        cy="12.0459"
                        rx="0.800801"
                        ry="0.792144"
                        transform="rotate(-9.20797 22.4728 12.0459)"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_9_2363"
                          x1="16.651"
                          y1="41.2877"
                          x2="40.0978"
                          y2="17.5707"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FEE411" />
                          <stop offset="0.0518459" stopColor="#FEDB16" />
                          <stop offset="0.1381" stopColor="#FEC125" />
                          <stop offset="0.2481" stopColor="#FE983D" />
                          <stop offset="0.3762" stopColor="#FE5F5E" />
                          <stop offset="0.5" stopColor="#FE2181" />
                          <stop offset="1" stopColor="#9000DC" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                  <a href="/" className="block h-[33px] w-[33px]">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="16.9049"
                        cy="17"
                        rx="16.6901"
                        ry="16.5"
                        fill="#0077B5"
                      />
                      <path
                        d="M7.73648 13.9053H12.1723V26.1666H7.73648L7.73648 13.9053Z"
                        fill="white"
                      />
                      <path
                        d="M21.5856 13.8906C18.4182 13.8906 17.8915 15.6066 17.8915 15.6066V13.9053H14.4644V26.1666H17.9286C17.9286 26.1666 17.9286 20.0946 17.9286 19.0973C17.9286 18.0926 18.5146 16.7726 20.3839 16.7726C22.2458 16.7726 22.4683 18.5766 22.4535 18.7966C22.4312 19.0166 22.4164 26.1666 22.4164 26.1666H26.0734C26.0734 26.1666 26.0734 19.1926 26.0734 17.66C26.0734 14.8953 24.2041 13.8906 21.5856 13.8906V13.8906Z"
                        fill="white"
                      />
                      <ellipse
                        cx="9.96183"
                        cy="10.0259"
                        rx="2.21793"
                        ry="2.19267"
                        fill="white"
                      />
                    </svg>
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="font-extrabold text-[15px] leading-[18px] text-black-secondary mt-[34px] mb-[19px]">
                  Arkademi Mobile App
                </h5>
                <span className="flex items-center gap-[11px] lg:gap-[15px]">
                  <div className="w-5/12 lg:w-1/2">
                    <a href="/">
                      <img
                        src="/img/app-store.png"
                        alt="App Store"
                        className="h-[41px] md:h-auto w-full md:w-auto"
                      />
                    </a>
                  </div>
                  <div className="w-5/12 lg:w-1/2">
                    <a href="/">
                      <img
                        src="/img/google-play.png"
                        alt="Google Play"
                        className="h-[41px] md:h-auto w-full md:w-auto"
                      />
                    </a>
                  </div>
                  <div className="w-2/12 block md:hidden"></div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-third bg-[#F1F2F4] mt-[26px] lg:mt-[59px]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center lg:justify-between py-[22px]">
            <p className="font-light text-[9px] w-full lg:w-auto text-center lg:text-[13px] leading-[10px] lg:leading-[16px] text-gray-secondary">
              2022 PT Arkademi Daya Indonesia
            </p>
            <ul className="flex gap-[31px] lg:gap-[54px]">
              <li>
                <a
                  href="/"
                  className="font-semibold text-[12px] leading-[14px] text-gray-fourth hover:underline"
                >
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-semibold text-[12px] leading-[14px] text-gray-fourth hover:underline"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
