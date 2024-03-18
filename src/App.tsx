import Divider from './components/Divider';
import Image from './components/Image';
import InfoBox from './components/InfoBox';
import Instructions from './components/Instructions';
import Table from './components/Table';
import Title from './components/Title';

function App() {
  const nutritionalData = [
    { label: 'Calories', value: '277kcal' },
    { label: 'Carbs', value: '0g' },
    { label: 'Proteins', value: '20g' },
    { label: 'Fat', value: '22g' },
  ];

  return (
    <div className="bg-orange-50 flex justify-center ">
      <div className="bg-white w-full	md:max-w-3xl md:my-14 rounded-2xl">
        <div className="md:p-8">
          <Image src="https://assets.unileversolutions.com/recipes-v2/231048.jpg" />
        </div>

        <div className="p-8">
          <h1 className="text-4xl mb-4 font-serif">Simple Omelette Recipe</h1>

          <span className="text-sm ">
            And easy and quick dish,perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection,optionally filled with
            your choice of cheese, vegetable,or meats.
          </span>

          <InfoBox
            title="Preparation time"
            totalTime={10}
            preparationTime={5}
            cookingTime={5}
          />

          <Title>Ingredients</Title>

          <ul className="list-disc	mb-3 list-inside text-sm marker:text-orange-800">
            <li className="mb-2">2-3 large eggs</li>
            <li className="mb-2">Salt,to taste</li>
            <li className="mb-2">Pepper,to taste</li>
            <li className="mb-2">1 tablespoon of butter or oil</li>
            <li className="mb-2">
              Optional fillings:cheese,diced vegetable,cooked meats,herbs
            </li>
          </ul>

          <Divider/>

          <Title>Instructions</Title>
          <ul className="list-decimal	list-inside marker:text-orange-800 text-sm">
            <Instructions
              title="Beat the eggs"
              description="In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture"
            />
            <Instructions
              title="Heat the pan"
              description="Place a non-stick
              frying pan over medium heat and butter or oil"
            />
            <Instructions
              title="Cook the omelette"
              description="Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface"
            />
            <Instructions
              title="Add fillings (optional)"
              description="When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette"
            />
            <Instructions
              title="Fold and serve"
              description="As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate"
            />
            <Instructions
              title="Enjoy"
              description="Serve hot,with additional
              salt and pepper if needed."
            />
          </ul>

          <Divider/>

          <Title>Nutrition</Title>
          <span className="text-sm">
            The table below shows nutritional values per serving without the
            additional fillings.
          </span>

          <div className="my-3">
           <Table data={nutritionalData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
