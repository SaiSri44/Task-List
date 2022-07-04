This is an simple Tasks Listing Application, build using react.

**Features of the Application :** 

1.Add the Task

2.Delete the Task. 

The application is built to understand the styling of the components in the react. 

There are three ways to style the components in the react.

1. Manipulating the CSS Code.

2.Using the styled Components

3.Using the CSS Modules 


**Adding the Styles dynamically by manipulating CSS Code :** 

Styles can be added dynamically to the JSX elements,by modifying the classname i.e adding other classname to the existing the existing classname. 

The addition of the extra classname can be controlled dynamically. 

Add the whatever styles you need by taking the udpated class name in the css file.

When the classname changed dynamically the changes would reflect automatically. 


**Styled Components**

1.styled components have many built in and commonly used html elements,like button,div,p etc.

2.styled is the object of the styled-components,we can call our desried function on this object. 

3.styled.button returns the button component.

4.We can provide the custom css to this component.

5.Provide the CSS code in the backticks.

6.syntax is styled.componentName` Css Code`


**Internal Working of Styled Components :**

1.styled component internally creates a component with the className,and makes the provided CSS as global

3.The style-components make sure that classNames are different for differnt components, so we don't want to bother about the clash of the styling.

**NOTE :** As the styled component library internally creates class name, so don't include the className in CSS code.

when acess a children using the className or while using the pseduo selectors use &.

like

&:focus  --------pseduo selector

& label----------childeren member


**Dynamically Adding styles using styled Components**

We can use the props concept to dynamically add the styles to the CSS.

Pass the props through the styled Component,




**CSS Modules :**

1.Css modules is another way of styling react components.

2.In this we do keep the CSS and JS files sepearetly.

3.First we need to make the CSS modules to work, to do that rename the CSS files to file_name.module.css i.e add the module term after file_name. 

This tells that we wish to convert the CSS file to CSS module. 

CSS module converts this CSS file to CSS module, where each class name we defined ,would become the property of this CSS module.

CSS module adds custom classname so that it would be unique, in this way without merging the CSS file with JS we are avoiding clashes.

To use CSS module in Js file import object of this module. 

like **import styles from './Button.module.css'**

Here styles is the object of the CSS module.

Whenever we need to specify the className specify it dynamically by accessing className as property of this object.

**Dynamically Adding styles :**

We can manipulate the className to add the styles dynamically 
 
