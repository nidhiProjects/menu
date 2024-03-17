import React, { useState } from "react";
import menu from "./Data";

const App = () => {
  const [menuItem,setMenuItem]=useState(menu);
  const handleChange=(category)=>{
    if(category==="all"){
     return setMenuItem(menu);  
    }
    if(category==="lunch"){
      const filterMenu=menu.filter((item)=>
      item.category==="lunch")
     return setMenuItem(filterMenu);  
    }
    if(category==="breakfast"){
      const filterMenu=menu.filter((item)=>
      item.category==="breakfast")
     return setMenuItem(filterMenu);  
    }
    if(category==="shakes"){
      const filterMenu=menu.filter((item)=>
      item.category==="shakes")
     return setMenuItem(filterMenu);  
    }
  }
  return (
    <div>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
        <div className="btn-container">
          <button type="button" className="filter-btn" onClick={()=>handleChange("all")} >
            all
          </button>
          <button type="button" className="filter-btn" onClick={()=>handleChange("breakfast")}>
            breakfast
          </button>
          <button type="button" className="filter-btn" onClick={()=>handleChange("lunch")}>
            lunch
          </button>
          <button type="button" className="filter-btn" onClick={()=>handleChange("shakes")}>
            shakes
          </button>
        </div>
        <div className="section-center">
        {menuItem.map((items)=>{
          return(

          <article className="menu-item" key={items.id}>
            <img
              src={items.img}
              alt={items.title}
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>{items.title}</h4>
                <h4 className="price">${items.price}</h4>
              </header>
              <p className="item-text">
                {items.desc}
              </p>
            </div>
          </article>
          )
        })}
        </div>
      </section>
    </div>
  );
};

export default App;
