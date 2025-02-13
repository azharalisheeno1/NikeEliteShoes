import { motion } from "framer-motion";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <motion.div
      id="products"
      className="max-container max-sm:mt-12"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 150 }}
      transition={{ duration: 0.6 }}

    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid grid-col-1 gap-14 lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 sm:gap-6">
        {products.map((product) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <PopularProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PopularProducts;
