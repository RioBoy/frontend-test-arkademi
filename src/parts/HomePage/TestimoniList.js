import React from 'react';

import TestimoniCard from '../../components/TestimoniCard';

import UserPhotoOne from '../../assets/img/user-1.jpg';
import UserPhotoTwo from '../../assets/img/user-2.jpg';
import UserPhotoThree from '../../assets/img/user-3.jpg';

export default function TestimoniList() {
  return (
    <div className="grid grid-cols-3 gap-[31px]">
      <TestimoniCard
        userPhoto={UserPhotoOne}
        userName="Nizar Putra"
        userLocation="Bandung"
        course="Siswa Kelas Bootstrap"
      />
      <TestimoniCard
        userPhoto={UserPhotoTwo}
        userName="Fuad Hasan"
        userLocation="Cilegon"
        course="Siswa kelas Inbound Marketing"
      />
      <TestimoniCard
        userPhoto={UserPhotoThree}
        userName="Dewi Wijayanti"
        userLocation="Jakarta"
        course="Siswa kelas Brevet Pajak A/B"
      />
    </div>
  );
}
