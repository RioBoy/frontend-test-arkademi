import React from 'react';

export default function TestimoniCard({
  userPhoto,
  userName,
  userLocation,
  course,
}) {
  return (
    <div className="card-testimoni p-[35px] bg-white rounded-[14px]">
      <div className="flex flex-col">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="bg-comma"
        >
          <path d="m21.95 8.721-.025-.168-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222-.474.197.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0-.025-.168-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939.597-.144c.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z" />
        </svg>
        <p className="mt-[15px]">
          Kursus online di Arkademi sangat berkesan, materinya simple tidak
          berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi
          dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses trus
          buat Arkedemi!
        </p>
        <div className="flex items-center gap-[13px] mt-5">
          <img src={userPhoto} alt="User" className="h-[42px] w-[42px]" />
          <div className="flex flex-col gap-[6px]">
            <span className="block font-bold text-[14px] leading-[17px] text-black-secondary">
              {userName} ({userLocation})
            </span>
            <span className="block font-medium text-[11px] leading-[13px] text-gray-secondary">
              {course}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
