const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 bg-[#FF6452] rounded-full px-6 py-3 text-lg text-white font-montserrat border-coral-red leading-none">
      {label}

      <img
        src={iconURL}
        alt="Arrow Icon Image"
        className="ml-4  rounded-full h-6 w-5"
      />
    </button>
  );
}

export default Button