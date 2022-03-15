
const Card = (props) => (
  <div class="flex justify-center p-2 mt-10">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <div>
                  {props.children}
                </div>
      </div>
</div>

)

export default Card;