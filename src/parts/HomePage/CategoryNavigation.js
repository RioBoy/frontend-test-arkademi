import React from 'react';

export default function CategoryNavigation() {
  return (
    <div className="container my-[13px] md:my-[14px]">
      <nav>
        <ul className="flex items-center justify-between lg:justify-start">
          <li className="dropdown inline-block relative">
            <button className="w-auto font-bold text-[13px] leading-[16px] md:text-sm text-black-primary dropdown-toggle xsm:mr-[35px] mr-[46px] md:mr-[15px] lg:mr-[30px] xl:mr-[94px]">
              Kategori
            </button>

            {/* Dropdown menu Dekstop Start */}
            <ul className="dropdown-menu absolute hidden text-black-secondary py-3">
              <li>
                <a
                  className="rounded-t text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Bahasa
                </a>
              </li>
              <li>
                <a
                  className="text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Bisnis
                </a>
              </li>
              <li>
                <a
                  className="text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Diskon
                </a>
              </li>
              <li>
                <a
                  className="text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Hobi
                </a>
              </li>
              <li>
                <a
                  className="text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Kelas IOS
                </a>
              </li>
              <li>
                <a
                  className="text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Keuangan
                </a>
              </li>
              <li>
                <a
                  className="text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Pengembangan Karier
                </a>
              </li>
              <li>
                <a
                  className="text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Sertifikasi
                </a>
              </li>
              <li>
                <a
                  className="rounded-b text-black-secondary hover:text-blue-secondary font-medium text-sm hover:bg-[#f3f4f6] py-2 px-4 block whitespace-nowrap"
                  href="/"
                >
                  Teknologi
                </a>
              </li>
            </ul>
            {/* Dropdown menu Dekstop End */}
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-xs md:text-[13px] md:leading-[16px] text-black-secondary xsm:mr-[35px] mr-[43px] md:mr-[20px] lg:mr-[30px] xl:mr-[54px]"
            >
              Bisnis
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-xs tmd:ext-[13px] md:leading-[16px] text-black-secondary xsm:mr-[30px] mr-[44px] md:mr-[20px] lg:mr-[30px] xl:mr-[54px]"
            >
              Keuangan
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-[13px] leading-[16px] text-black-secondary md:mr-[20px] lg:mr-[30px] xl:mr-[54px] hidden md:block"
            >
              Pengembangan Karier
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-[13px] leading-[16px] text-black-secondary md:mr-[20px] lg:mr-[30px] xl:mr-[54px] hidden md:block"
            >
              Sertifikasi
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-[13px] leading-[16px] text-black-secondary md:mr-[20px] lg:mr-[30px] xl:mr-[54px] hidden md:block"
            >
              Teknologi
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-[13px] leading-[16px] text-black-secondary md:mr-[20px] lg:mr-[30px] xl:mr-[54px] hidden md:block"
            >
              Bahasa
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-[13px] leading-[16px] text-black-secondary lg:mr-[30px] xl:mr-[54px] hidden lg:block"
            >
              Korporat
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium text-[13px] leading-[16px] text-black-secondary hidden lg:block"
            >
              Hobi
            </a>
          </li>

          {/* Hamburger Menu Start */}
          <li className="block lg:hidden">
            <button className="flex items-center">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0.5H0V2.19565H15V0.5ZM0 6.15217H15V7.84783H0V6.15217ZM0 11.8043H15V13.5H0V11.8043Z"
                  fill="#C0C2C6"
                />
              </svg>
            </button>
          </li>
          {/* Hamburger Menu End */}
        </ul>
      </nav>
    </div>
  );
}
