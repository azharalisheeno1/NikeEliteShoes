import { motion } from "framer-motion";
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  }

  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    className={`border-2 rounded-xl
      ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
       cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="nike shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </motion.div >
  )
}

export default ShoeCard