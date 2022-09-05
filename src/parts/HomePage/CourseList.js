import React from 'react';

import Course from './Course';

export default function ClassList() {
  const classListHeader = [
    {
      headerName: 'Terbaru',
    },
    {
      headerName: 'Bisnis',
    },
    {
      headerName: 'Pengembangan Karier',
    },
  ];
  return (
    <section className="class-list">
      <div className="container">
        {classListHeader.map((list, index) => {
          return <Course list={list} key={index} />;
        })}
      </div>
    </section>
  );
}
