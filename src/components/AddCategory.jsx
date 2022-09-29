import { useState } from "react";
export const AddCategory = ({onNewCategory})=>{
    const [category, setCategory] = useState('');
    const onChangeInput = (event)=>{
        setCategory(event.target.value);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        if(category.trim().length==0) return;
        onNewCategory(category.trim());
        //setCategories((elements) =>[category, ...elements]);
        console.log(category);
        setCategory('');
    }
    return <>
        <form onSubmit={(event)=>onSubmit(event)}>
            <input type="text" placeholder="Buscar Gif" value={category} onChange={(event)=>onChangeInput(event)}></input>
        </form>
    </>
}