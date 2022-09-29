import { GitItem } from "./GitItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GitGrid = ({category})=>{
    const {images, isLoading} = useFetchGifs(category);
    console.log({images,isLoading});
    return <>
    <h3>{category}</h3>
    { isLoading && (<h2>Cargando...</h2>)}
    <div className="card-grid">
        {
            images.map((image) => (<GitItem {...image} key={image.id}/>))
        }
    </div>
    </>
}