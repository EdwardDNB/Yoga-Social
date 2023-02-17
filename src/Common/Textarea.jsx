import s from './Textarea.module.css'


const FormControl = ({input, meta:{touched,error}, children}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            <div>{children}</div>
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
}
export const Input = (props) => {
    const {input, meta,child, ...restProps}=props
    return <FormControl {...props}><input {...input} {...restProps}/> </FormControl>
}
export const Textarea = (props) => {
    const {input, meta,child, ...restProps}=props
    return <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
}