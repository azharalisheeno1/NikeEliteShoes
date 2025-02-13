import { star } from "../assets/icons"
import { motion } from "framer-motion"
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <motion.div
    whileInView={{ scale: 1, opacity: 1 }}
    initial={{ scale: 0.5, opacity: 0 }}
    transition={{ duration: 0.7 }}
    className="flex justify-center items-center flex-col">
      <img
        className="rounded-full object-cover w-[120px] h-[120px]"
        src={imgURL} alt={customerName} />
      <p className="mt-6 text-center info-text max-w-sm">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star icon" width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">{customerName}</h3>
    </motion.div>
  )
}

export default ReviewCard