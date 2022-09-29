import { useState } from 'react';
import { AddCategory,GitGrid } from './components';
export const GitExpertApp = ()=>{
    const [categories, setCategories] = useState(['One Pounch']);
    const addCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return
        setCategories([newCategory, ...categories]);
    }
    console.log(categories);
    return <>
        <h1>
            GitExpertApp
        </h1>
        <AddCategory onNewCategory={(value)=>addCategory(value)} />
        <button onClick={addCategory}>Add</button>
        {categories.map((category) => (<GitGrid key={category} category={category}/>))}
    </>
}