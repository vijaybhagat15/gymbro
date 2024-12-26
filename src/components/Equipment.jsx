import React from 'react';
import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';

function Equipment() {
  return (
    <section className="relative py-16 px-6">
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500 font-serif mb-8">
          Our Top Gym Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Dumbbell Set */}
          <div>
            <div
              className="relative bg-cover bg-center rounded-3xl shadow-lg overflow-hidden h-72 group border-2 border-gray-400 hover:border-orange-400 hover:scale-105 transition-transform flex flex-col justify-between"
              style={{
                backgroundImage:
                  'url(https://cdn.shopify.com/s/files/1/0444/1256/7702/products/Adjustable-Dumbbells-Workout-Strength-Training_2048x2048.jpg?v=16025805)',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition"></div>
              <div className="relative z-10 p-4">
                <FaDumbbell className="text-3xl text-orange-400 mb-2" />
              </div>
            </div>
<<<<<<< HEAD
            <h3 className="relative z-10 text-xl text-orange-500 hover:text-sunset-orange font-serif font-bold pt-2">
              Dumbbell Set
            </h3>
          </div>
=======

         

          </div>
           <h3 className="relative z-10 text-xl  text-orange-500 t- hover:text-sunset-orange font-bold pt-4 ">
              Dumbbell Set
            </h3>
            {/* <p className="relative z-10 text-lg text-transparent hover:text-white px-4">
              Adjustable dumbbells perfect for strength training and building muscle.
            </p> */}
            </div>
>>>>>>> 755f0e0096104cffb20d8ef662e59123d867e96c

          {/* Treadmill */}
          <div>
            <div
              className="relative bg-cover bg-center rounded-3xl shadow-lg overflow-hidden h-72 group border-2 border-gray-400 hover:border-orange-400 hover:scale-105 transition-transform flex flex-col justify-between"
              style={{
                backgroundImage:
                  'url(https://johnsonfitness.id/wp-content/uploads/2021/02/1-endurance-series-treadmill-TOUCHXL-T-ES-F-scaled.jpg)',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition"></div>
              <div className="relative z-10 p-4">
                <FaRunning className="text-3xl text-orange-400 mb-2" />
              </div>
            </div>
<<<<<<< HEAD
            <h3 className="relative z-10 text-xl text-orange-500 hover:text-sunset-orange font-serif font-bold pt-4 mb-4">
=======


          </div>
          <h3 className="relative z-10 text-xl text-orange-500 hover:text-sunset-orange font-bold pt-4 mb-4">
>>>>>>> 755f0e0096104cffb20d8ef662e59123d867e96c
              Treadmill
            </h3>
            {/* <p className="relative z-10 text-lg text-transparent hover:text-white px-4">
              High-quality treadmill for endurance and cardio training.
            </p> */}
          </div>

          {/* Chest Press Machine */}
          <div>
            <div
              className="relative bg-cover bg-center rounded-3xl shadow-lg overflow-hidden h-72 group border-4 border-gray-400 hover:border-orange-400 hover:scale-105 transition-transform flex flex-col justify-between"
              style={{
                backgroundImage:
                  'url(https://www.eliteexerciseequipment.com/wp-content/uploads/2018/12/PPS-200_chestpress2.jpg)',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition"></div>
              <div className="relative z-10 p-4">
                <GiWeightLiftingUp className="text-3xl text-orange-400 mb-2" />
              </div>
            </div>
<<<<<<< HEAD
            <h3 className="relative z-10 text-xl text-orange-500 hover:text-sunset-orange font-serif font-bold pt-4">
=======


          </div>
          <h3 className="relative z-10 text-xl text-orange-500 hover:text-sunset-orange font-bold pt-4">
>>>>>>> 755f0e0096104cffb20d8ef662e59123d867e96c
              Chest Press Machine
            </h3>
            {/* <p className="relative z-10 text-lg text-transparent hover:text-white px-4">
              Build upper body strength with precision and safety.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipment;
