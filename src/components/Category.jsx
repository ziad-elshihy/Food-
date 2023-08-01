import categories from '../data/categories';
import { useState } from 'react';

const Category = () => {
   const [items, setItems] = useState(categories)

   return (
      <>
         <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-center text-orange-600 text-4xl font-bold'>Top Rated Menu Items</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
               {items.map((item, index) => (
                  <div
                     key={index}
                     className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'
                  >
                     <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                     <img src={item.image} alt={item.name} className='w-20' />
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default Category;
