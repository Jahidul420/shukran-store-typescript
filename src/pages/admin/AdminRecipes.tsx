import "@splidejs/react-splide/css";
import { useState } from "react";
import recipeArr from "../../data/RecipeData";
import { Recipe } from "../../typs/plan";
const AdminRecipes = () => {
  const [recipes, setRecipe] = useState(recipeArr);
  const [recipesTitel, setRecipesTitel] = useState("THE ROYAL recipes");
  const [recipesSubTitel, setRecipesSubTitel] = useState(
    "There are many recipys and items that you can enjoy with SHUKRAN Rice"
  );
  const [recipeName, setRecipeName] = useState("White Polawo");
  const [recipeIngrediant, setRecipeIngrediant] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi necessitatibus animi officia corrupti laudantium nesciunt saepe rerum dolores corporis odio quae obcaecati doloribus magnam, praesentium aliquam cumque culpa! Iste modi quis totam excepturi? Dolore accusamus, incidunt error ducimus inventore sit eveniet iusto numquam exercitationem ipsam itaque at harum quibusdam nobis fugit beatae distinctio cumque molestias illum reiciendis quisquam enim dolorem. Ex assumenda tempore blanditiis beatae quidem repellat non quos ea, velit, et quo? Quo libero deserunt dolor atque dolore aperiam velit sapiente voluptatum veniam blanditiis? Atque qui iure quaerat rem quia suscipit esse incidunt possimus, quasi laudantium optio temporibus nulla ipsam laborum aliquam fugiat provident, deserunt, voluptas neque praesentium labore sequi. Aspernatur fugiat blanditiis dolorem assumenda debitis explicabo reprehenderit, laborum impedit dolor, modi alias illum dolorum quae culpa nisi corporis? Veniam provident nisi ab eos doloremque iure sequi, magnam cupiditate libero odit, tenetur iste consequatur accusantium, perferendis consectetur similique ipsam praesentium fugiat! Soluta, doloribus sequi! Suscipit magni esse cupiditate labore animi consequuntur dolorum iure quae sit, ullam omnis ad nesciunt nam! Tempore sunt ea temporibus rem pariatur dolor perspiciatis maiores adipisci magnam deserunt facere quibusdam sed impedit velit, reiciendis numquam fugiat delectus quaerat. Labore quas in eveniet earum autem."
  );
  return (
    <div className="h-auto w-full py-10 text-center bg-white px-10">
      <div className="w-[55%] m-auto font-austin space-y-5">
        <input
          type="text"
          className="text-5xl w-full text-center bg-transparent uppercase p-2 border-black border"
          value={recipesTitel}
          onChange={(e) => setRecipesTitel(e.target.value)}
        />
        <div>
          <input
            type="text"
            className="text-sm w-full text-center bg-transparent p-2 border-black border"
            value={recipesSubTitel}
            onChange={(e) => setRecipesSubTitel(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-20 ">
        <RecipeCard recipe={recipes[3]} />
      </div>
    </div>
  );
};

export default AdminRecipes;

const RecipeCard = (props: { recipe: Recipe }) => {
  const { recipe } = props;
  return (
    <div className="w-full h-72 flex items-center gap-8 bg-[#fafafa] drop-shadow-md">
      <div className="h-full w-[20%] overflow-hidden group rounded-md">
        <img
          src={`${recipe.image}`}
          alt=""
          className="h-full w-full object-covser group-hover:scale-110 duration-300 rounded-md "
        />
      </div>

      <div className=" text-left w-[80%] mx-auto font-austin ">
        <h2 className="text-3xl">{recipe.name}</h2>
        <div className="flex items-end gap-8">
          <div className="w-3/6">
            <p className="cutoffText">Instructions</p>
            <p className="recipytextCut">{recipe.discription}</p>
          </div>

          <div className="w-3/6">
            <p className="text ">ingredients</p>
            <ul className=" list-disc space-y-2 text-left recipytextCut">
              {recipe?.ingredients?.map((item: String, index: Number) => (
                <li key={index + ""}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
