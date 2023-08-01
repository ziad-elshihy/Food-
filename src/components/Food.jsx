import { useState } from 'react';
import data from '../data/data';

const Food = () => {
   const [foods, setFoods] = useState(data)

   //   Filter Type burgers/pizza/etc
   const filterType = (category) => {
      setFoods(
         data.filter((item) => {
            return item.category === category;
         })
      );
   };

   //   Filter by price
   const filterPrice = (price) => {
      setFoods(
         data.filter((item) => {
            return item.price === price;
         })
      );
   };
   return (
      <>
         <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-center text-orange-600 text-4xl font-bold'>Top Rated Menu Items</h1>
            {/* Filter Buttons */}
            <div className="flex flex-col justify-between w-full lg:flex-row">
               <div>
                  <p className="font-bold text-gray-700 py-1">Filter Type</p>
                  <div className='flex justify-between flex-wrap'>
                     <button
                        onClick={() => setFoods(data)}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        All
                     </button>
                     <button
                        onClick={() => filterType('burger')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        Burgers
                     </button>
                     <button
                        onClick={() => filterType('pizza')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        Pizza
                     </button>
                     <button
                        onClick={() => filterType('salad')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        Salads
                     </button>
                     <button
                        onClick={() => filterType('chicken')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        Chicken
                     </button>
                  </div>
               </div>
               <div>
                  <p className="font-bold text-gray-700 py-1">Filter Price</p>
                  <div className='flex justify-between flex-wrap'>
                     <button
                        onClick={() => setFoods(data)}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        All
                     </button>
                     <button
                        onClick={() => filterPrice('$')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        $
                     </button>
                     <button
                        onClick={() => filterPrice('$$')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        $$
                     </button>
                     <button
                        onClick={() => filterPrice('$$$')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        $$$
                     </button>
                     <button
                        onClick={() => filterPrice('$$$$')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                     >
                        $$$$
                     </button>
                  </div>
               </div>
            </div>
            {/* Filter / Map Data*/}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
               {foods.map((food) => {
                  return <div key={food.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                     <img src={food.image} alt={food.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                     <div className='flex justify-between items-center px-2 py-4'>
                        <p className='font-bold'>{food.name}</p>
                        <p>
                           <span className='bg-orange-500 text-white py-1 px-2 rounded-full'>{food.price}</span>
                        </p>
                     </div>
                  </div>
               })}
            </div>
         </div>
      </>
   )
}

export default Food;
