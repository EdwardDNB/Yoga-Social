import {Field} from "redux-form";

export const CreateField=(placeholder,name,component,validators,props={})=>{
   return <div>
        <Field placeholder={placeholder} name={name}
               component={component} validate={validators} {...props}/>{props.text}
    </div>
}