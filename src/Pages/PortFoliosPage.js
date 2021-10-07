import React,{useState} from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolios from '../Components/AllPortFolio.jsx';


const allCategories= ['All',...new Set(portfolios.map(item=>item.category))];

function PortFoliosPage() {
    const [categories,setCatogories]= useState(allCategories);
    const [menuItems,setMenuItems]= useState(portfolios);
    const filter = (category)=>{
        if(category==='All'){
            setMenuItems(portfolios)
            return ;
        }
        
        const filteredData= portfolios.filter((item)=>{
            return item.category===category
        })
        setMenuItems(filteredData)
    }
    return (
        
        <div className="PortfolioPage">
            <div className="title">
            <Title title ={'My PortFolio'} span= {'My PortFolio'}/>
            </div>

            <div className="portfolios-data">
                <Categories filter= {filter} categories={categories} />
                <MenuItems menuItem={menuItems}/>

            </div>
           
        </div>
    )
}

export default PortFoliosPage;
