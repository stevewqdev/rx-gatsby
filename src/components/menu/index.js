import React from 'react';
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const MainMenu = (props) => {
  const data = useStaticQuery(graphql`
  query mainMenuQuery {
    allWordpressMenusMenusItems(filter: {slug: {eq: "main-menu"}}) {
      edges {
        node {
          id
          items {
            target
            title
            url
            classes
            attr_title
            wordpress_id
            child_items {
              attr_title
              classes
              title
              target
              url
              wordpress_id
            }
          }
        }
      }
    }
  }  
`)

  var menuItems = false; 
  var menuId = false; 

  if(data.allWordpressMenusMenusItems){
    menuItems = data.allWordpressMenusMenusItems.edges[0].node.items;
    menuId  = data.allWordpressMenusMenusItems.edges[0].node.id;
  }


  return (
    <div className={`${props.customClass}`} id={menuId}>
      {
        menuItems.map((menuItem,index) => 
          <p key={index}>
            <Link to={menuItem.url} key={`${index + 1}-${menuItems.length}`}>
              {menuItem.title}     
            </Link>
            {
              menuItem.child_items
              ? 
                menuItem.child_items.map((subItem, index) => 
                  <Link to={subItem.url} key={`${index + 1}-${subItem.length}`} className="menu__subitem">
                    {subItem.title} 
                  </Link>
                )
              : ""
            }
            {
              props.area === "footer"
              ? <>
                {
                  (index + 1 )< menuItems.length
                  ?<span> - </span>
                  :""
                }
                </>
              : ""
            }
          </p>
        )
      }
    </div>
  )
}
export default MainMenu

