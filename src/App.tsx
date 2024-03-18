function App() {
  return (
    <div className="bg-orange-50 flex justify-center ">
      <div className="bg-white w-full	md:max-w-3xl md:my-14 rounded-2xl">
        <div className="md:p-8">
          <img
            className="md:rounded-2xl overflow-hidden"
            src="https://assets.unileversolutions.com/recipes-v2/231048.jpg"
            alt="omelette"
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl mb-4 font-serif">Simple Omelette Recipe</h1>

          <span className="text-sm ">
            And easy and quick dish,perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection,optionally filled with
            your choice of cheese, vegetable,or meats.
          </span>

          <div className="my-4 text-sm bg-pink-100 rounded-md p-3">
            <span className="font-bold text-base pb-4 text-fuchsia-800	">
              Preparation Time
            </span>
            <ul className="list-disc	mt-2 list-inside text-sm marker:text-orange-800">
              <li className="mb-2">
                <span className="font-bold">Total</span>: Aproximately 10
                minutes
              </li>
              <li className="mb-2">
                <span className="font-bold">Preparation</span>: 5 minutes
              </li>
              <li className="mb-2">
                <span className="font-bold">Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>

          <h2 className="text-2xl text-orange-800 mb-3 font-serif">
            Ingredients
          </h2>
          <ul className="list-disc	mb-3 list-inside text-sm marker:text-orange-800">
            <li className="mb-2">2-3 large eggs</li>
            <li className="mb-2">Salt,to taste</li>
            <li className="mb-2">Pepper,to taste</li>
            <li className="mb-2">1 tablespoon of butter or oil</li>
            <li className="mb-2">
              Optional fillings:cheese,diced vegetable,cooked meats,herbs
            </li>
          </ul>

          <div className="border-t-[1px] my-2" />

          <h2 className="text-2xl text-orange-800 mb-3 font-serif ">
            Instructions
          </h2>
          <ul className="list-decimal	list-inside marker:text-orange-800 text-sm">
            <li className="mb-2">
              <span className="font-bold">Beat the eggs</span>:In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture
            </li>
            <li className="mb-2">
              <span className="font-bold">Heat the pan</span>:Place a non-stick
              frying pan over medium heat and butter or oil
            </li>
            <li className="mb-2">
              <span className="font-bold">Cook the omelette</span>:Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface
            </li>
            <li className="mb-2">
              <span className="font-bold">Add fillings (optional)</span>:When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette
            </li>
            <li className="mb-2">
              <span className="font-bold">Fold and serve</span>:As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate
            </li>
            <li className="mb-2">
              <span className="font-bold">Enjoy</span>:Serve hot,with additional
              salt and pepper if needed.
            </li>
          </ul>

          <div className="border-t-[1px] my-2" />

          <h2 className="text-2xl text-orange-800 mb-3 font-serif">
            Nutrition
          </h2>
          <span className="text-sm">
            The table below shows nutritional values per serving without the
            additional fillings.
          </span>
          <div className="my-3">
            <ul className="grid divide-y">
              <li className="py-2 flex justify-between px-8 ">
                <span className="text-sm ">Calories</span>
                <span className=" text-sm text-orange-800 font-bold ">
                  277kcal
                </span>
              </li>
              <li className="py-2 flex justify-between px-8 ">
                <span className="text-sm">Carbs</span>
                <span className=" text-sm text-orange-800 font-bold ">0g</span>
              </li>
              <li className="py-2 flex justify-between px-8 ">
                <span className="text-sm">Protein</span>
                <span className=" text-sm text-orange-800 font-bold ">20g</span>
              </li>
              <li className="py-2 flex justify-between px-8 ">
                <span className="text-sm">Fat</span>
                <span className=" text-sm text-orange-800 font-bold ">22g</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
