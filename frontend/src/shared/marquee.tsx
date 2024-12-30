import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div className='w-full py-5 mt-1 bg-[#1E3A8A]'>
      <div className='text-yellow-300 border-t-2 border-b-2 border-zinc-200 flex whitespace-nowrap overflow-hidden '>
        <motion.div
          className='flex'
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
          style={{width: "500%"}}
        >
          <h1 className='text-[6vw] mr-20 leading-none pt-5 mb-6 font-roboto uppercase font-semibold'>
          Empower.Engage.Impact
          </h1>
          <h1 className='text-[6vw] mr-20  leading-none pt-5 font-roboto uppercase font-semibold'>
           Empower.Engage.Impact
          </h1>
          <h1 className='text-[6vw] mr-20  leading-none pt-5 font-roboto uppercase font-semibold'>
           Empower.Engage.Impact
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;