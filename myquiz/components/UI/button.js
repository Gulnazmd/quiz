
const Button= (props) => (
  <button
  type="button"
  className=" text-white inline-block m-6 px-6 py-2.5 bg-green font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-darkgreen hover:shadow-lg  transition duration-150 ease-in-out"
    onClick={props.clicked}>
      {props.children}
  </button>
)

export default Button;