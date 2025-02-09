import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div   whileInView={{ x: 0, opacity: 1 }}
    initial={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
     className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label}
          {...service}
        />
      ))}
    </motion.div>
  )
}

export default Services
