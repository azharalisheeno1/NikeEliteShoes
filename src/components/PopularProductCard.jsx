import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex rounded shadow-xl hover:scale-105 hover:transition-all  border flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name}
        className=""
      />
      <div className="px-3 py-1 ">
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">{name}</h3>
      <p className="mt-2 font-montserrat font-semibold text-2xl text-coral-red leading-normal">{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard