import React from 'react';

export default function SpecialPromo() {
  return (
    <section className="special-promo mb-[71px]">
      <div className="container">
        <h5 className="font-extrabold text-xl text-black-primary">
          Promo Spesial Untukmu
        </h5>
        <div className="flex mt-[27px]">
          <div className="grid grid-cols-3 gap-[26px]">
            <div className="bg-blue-primary h-[200px] rounded-xl">
              <p className="opacity-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur omnis accusamus maxime. Ipsa nisi ducimus, ut
                laboriosam aliquid libero, sit necessitatibus ullam quae rem
                adipisci. Eligendi quo rerum dolorum facere!
              </p>
            </div>
            <div className="bg-blue-fourth h-[200px] rounded-xl">
              <p className="opacity-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur omnis accusamus maxime. Ipsa nisi ducimus, ut
                laboriosam aliquid libero, sit necessitatibus ullam quae rem
                adipisci. Eligendi quo rerum dolorum facere!
              </p>
            </div>
            <div className="bg-green-secondary h-[200px] rounded-xl">
              <p className="opacity-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur omnis accusamus maxime. Ipsa nisi ducimus, ut
                laboriosam aliquid libero, sit necessitatibus ullam quae rem
                adipisci. Eligendi quo rerum dolorum facere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
