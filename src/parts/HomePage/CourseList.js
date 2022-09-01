import React from 'react';

import Class from './Course';

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
          return <Class list={list} key={index} />;
        })}
      </div>
    </section>
  );
}
