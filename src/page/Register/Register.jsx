const Register = () => {
  return (
    <div>
        <div className=''>
      <div className="bg-slate-500 max-w-screen-md mx-auto  p-6 mt-6 rounded-lg shadow-black ">

        <h1 className='flex justify-center font-bold text-xl'>Registraction From</h1>
        <div className="">
          <label className=' mb-4'>Student Name</label>

           <div className='flex justify-between'>
            <label className=' w-1/2 font-thin'>First Name:  </label>
            <label className='w-1/2 pl-11 font-thin'>Middle Name:  </label>
            <label className='w-1/2 pl-20 font-thin '>Last Name:  </label>
          </div>
          <div className=' mb-4 flex justify-between h-8 rounded-lg'>
            <input className='  rounded-md  w-[5] ' type='text' />
            <input className=' rounded-md w-[5]' type='text' />
            <input className='rounded-md w-[5] ' type='text' />
          </div>
          <div className=" flex justify-around">
          <label>Brithdate:</label>
          <label>Genter:</label>
          </div>
          <div className="mb-4 h-8  flex justify-around">
          <input className='   rounded-sm w-56' type='date'/>
          <select className='rounded-sm w-56 '>
          <option>Male</option>
          <option>Female</option>
          </select>
          </div>
          <div className=" block mb-4">
            <label>Address 1:</label>
          <textarea className=' rounded-sm h-8 w-full' type =" text"></textarea>
          <label>Address 2:</label>
          <textarea className=' rounded-sm h-8 w-full' type =" text"></textarea>
          </div>
          <div className="flex justify-around">
            <label>Student Email:</label>
            <lable>Select course:</lable>
            
          </div>
          <div className=" mb-4   Flex justify-around">
              <input  className=" rounded-sm w-56 h-8 ml-20" type="email" />
              <select className=' rounded-sm w-56 h-8 ml-36'>
          <option>JAVA FullStack</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Database</option>
          </select>
          </div>
          <div className=" block mb-4">
            <label>Additional Information:</label>
          <textarea className=' rounded-sm h-44 w-full' type =" text"></textarea>
         </div>
         <div className='flex justify-center'> 
          <button className="bg-green-300 w-60 hover:bg-green-700 text-white font-bold py-2 px-4 flex justify-center items-center rounded-md" type="submit">Submit</button></div>

          </div>
            </div>

     
        </div>

    </div>
      
  
  )
}

export default Register