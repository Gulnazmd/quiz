
const Card = (props) => (
  <div class="flex justify-center p-2 mt-10">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <div>
                  {props.children}
                </div>
                <button type="button" className=" inline-block mt-8 px-6 py-2.5 bg-lightgreen text-grey font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-darkgreen hover:shadow-lg focus:bg-darkgreen focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkgreen active:shadow-lg transition duration-150 ease-in-out">Next</button>
      </div>
</div>

)

export default Card;