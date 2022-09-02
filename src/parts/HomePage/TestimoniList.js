import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import TestimoniCard from '../../components/TestimoniCard';

import UserPhotoOne from '../../assets/img/user-1.jpg';
import UserPhotoTwo from '../../assets/img/user-2.jpg';
import UserPhotoThree from '../../assets/img/user-3.jpg';

export default function TestimoniList() {
  const testimoni = [
    {
      photo: UserPhotoOne,
      name: 'Nizar Putra',
      place: 'Bandung',
      course: 'Siswa kelas Bootstrap',
      content: `Kursus online di Arkademi sangat berkesan, materinya simple tidak
      berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi
      dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses trus
      buat Arkedemi!`,
    },
    {
      photo: UserPhotoTwo,
      name: 'Fuad Hasan',
      place: 'Cilegon',
      course: 'Siswa kelas Inbound Marketing',
      content: `Materi kursus online di Arkademi sangat menarik, isinya daging semua dan layak dipelajari. Pematerinya juga berkompeten di bidangnya. Ditambah penyajian kelas sangat ciamik dan user friendly. Solusi buat pebisnis.`,
    },
    {
      photo: UserPhotoThree,
      name: 'Dewi Wijayanti',
      place: 'Jakarta',
      course: 'Siswa kelas Brevet Pajak A/B',
      content: `Saya beruntung bergabung ke kursus online di Arkademi. Metode penyampaian sangat jelas singkat dan memudahkan belajar. Ditambah lagi tampilan presentasi yang membuat kita tidak jenuh dalam belajar online.`,
    },
  ];

  return (
    <Swiper
      spaceBetween={31}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 'auto',
        },
        1440: {
          slidesPerView: 'auto',
        },
      }}
      draggable={true}
      grabCursor={true}
      className="grid grid-cols-3"
    >
      {testimoni.map((list, index) => (
        <SwiperSlide key={index}>
          <TestimoniCard
            userPhoto={list.photo}
            userName={list.name}
            userLocation={list.place}
            course={list.course}
            content={list.content}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
