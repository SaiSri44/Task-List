import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styled from "styled-components";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };
  // -----------CSS for styled Components-------------
  // const FormControl = styled.div`
  //   margin: 0.5rem 0;

  //   & label {
  //     font-weight: bold;
  //     display: block;
  //     margin-bottom: 0.5rem;
  //     color: ${(props) =>
  //       props.invalid
  //         ? "red"
  //         : "black"}; //changing styles dynamically using props
  //   }

  //   & input {
  //     display: block;
  //     width: 100%;
  //     border: 1px solid ${(props) => (props.invalid ? "red" : "black")}; //changing styles dynamically using props
  //     font: inherit;
  //     line-height: 1.5rem;
  //     padding: 0 0.25rem;
  //     background-color: ${(props) =>
  //       props.invalid ? "salmon" : "transparent"};
  //   }

  //   & input:focus {
  //     outline: none;
  //     background: #fad0ec;
  //     border-color: #8b005d;
  //   }
  // `;
  return (
    <form onSubmit={formSubmitHandler}>
      {/* 
        -------------------Dynamically addding styles by changing className dynamically--------------------

      Adding class name dynamically, here we are adding extra classname invalid whenver the input is invalid 
      We return the styles for the element with both the class name form-control and invalid in global css file
        
        Code :
        
        <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>

      */}

      {/* 
        -----------------------Dynamically Adding styles using the styled Components via props concepts------------------
        FormControl is the styled component,invalid is the props
      
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl> 
    
    */}
      {/*
       ------------Dynamic Adding styles via CSS Modules--------------
       */}
      {/* property can be acessed using the . notation or using the square brackets notation*/}
      <div
        // This is nothing but the adding the className dynamically but using the CSS Moudle syntax
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Task</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};
export default CourseInput;
/*In jSX style takes object,and the CSS property are the keys and values are values to keys. 
Remember this while using inline styling.
we know that inline styling is more dominat,this will overwrite the css properties defined in the global css file. 
This is not the desired behaviour. We would look at alternative way for styling the JSX elements.
*/

/*Adding styles dynamically
Styles can be added dynamically to the JSX elements,by modifying the classname i.e adding other classname to the existing the existing classname. The addition of the extra classname can be controlled dynamically. 
Add the whatever styles you need by taking the udpated class name in the css file. When the classname changed dynamically the changes would reflect automatically. 

Dynamically Adding styles using styled Components.
We can use the props concept to dynamically add the styles to the CSS. 
Pass the props through the styled Component,
 */
