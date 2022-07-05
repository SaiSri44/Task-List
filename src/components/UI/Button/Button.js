import React from "react";
import styles from "./Button.module.css";
// -----------------styled Components-------------------
// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

/*styled Components :
1.styled components have many built in and commonly used html elements,like button,div,p etc.
2.styled is the object of the styled-components,we can call our desried function on this object. In this example we called the button fucntion.
3.styled.button returns the button component.
4.We can provide the custom css to this component,this will apply the Provied CSS to the component.
5.Provide the CSS code in the backticks.
6.syntax is styled.componentName` Css Code`
Internal Working of Styled Components :
1.styled component internally creates a component with the className. 
2.And makes the provided CSS as global
3.The style-components make sure that classNames are different for differnt components, so we don't want to bother about the clash of the styling.

NOTE : As the styled component library internally creates class name, so don't include the className in CSS code,when acess a children using the className or while using the pseduo selectors use &.like
&:focus  --------pseduo selector
& label----------childeren member
 */

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

/*CSS Modules
1.Css modules is another way of styling react components.
2.In this we do keep the CSS and JS files sepearetly only.
3.First we need to make the CSS modules to work, to do that rename the CSS files to file_name.module.css i.e add the module term after file_name. 
This tells that we wish to convert the CSS file to CSS module. 
CSS module converts this CSS file to CSS module, where each class name we defined  would become the property of this CSS module.
CSS module adds custom classname so that it would be unique, in this way without merging the CSS file with JS we are avoiding clashes.
To use the CSS module in Js file import object of this module. 
like import styles from './Button.module.css' 
Here styles is the object of the CSS module.
Whenever we need to specify the className specify it dynamically by accessing className as property of this object.
*/
export default Button;
