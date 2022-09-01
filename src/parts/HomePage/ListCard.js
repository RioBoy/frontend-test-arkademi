import React from 'react';

import Card from '../../components/Card';

export default function ListCard() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
