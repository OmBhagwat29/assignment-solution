import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './container-right-panel.scss'

function ContainerRightPanel() {
    let navigate = useNavigate();
    const initialValues = {email: "", password: "", confirmPassword: "", fullName: "", mobileNum: "" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
    
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});


        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        
        if(!values.email){
            errors.email = "Email is required";
        }else if(!regex.test(values.email)){
            errors.email = "Email is not in proper format";
        }
        if(!values.password){
            errors.password = "Password is required";
        }
        if(!values.confirmPassword){
            errors.confirmPassword = "Confirm passwprd is required";
        }else if(values.password !== values.confirmPassword){
            errors.confirmPassword = "Confirm passwprd is not matching";
        }
        if(!values.fullName){
            errors.fullName = "Fullname is required";
        }
        if(!values.mobileNum){
            errors.mobileNum = "Mobile number is required";
        }else if(values.mobileNum.length !== 10){
            errors.mobileNum = "Enter valid mobile number";
        }
        return errors;
        
    }

    useEffect(() => {

        

      if(Object.keys(formErrors) == 0 && isSubmit){
        navigate("/chart");
      }
    
    
    }, [formErrors])
    


  return (
    <>
        <div className='registration-container__right'>
            <h2 className="container__heading">Create an account</h2>
            <form onSubmit={handleSubmit}>
            <div className="container__input-wrapper">
                <label className="container__label">Your email address</label>
                <input type="text" name="email" className="container__input" value={formValues.email} onChange={handleChange} />
                <p className="container__input-error">{formErrors.email}</p>
            </div>
            <div className="container__input-wrapper">
                <label className="container__label">Your password</label>
                <input type="password" name="password" className="container__input" value={formValues.password} onChange={handleChange} />
                <p className="container__input-error">{formErrors.password}</p>
            </div>
            <div className="container__input-wrapper">
                <label className="container__label">Confirm your password</label>
                <input type="password" name="confirmPassword" className="container__input" value={formValues.confirmPassword} onChange={handleChange} />
                <p className="container__input-error">{formErrors.confirmPassword}</p>
            </div>
            <div className="container__input-wrapper">
                <label className="container__label">Your full name</label>
                <input type="text" name="fullName" className="container__input" value={formValues.fullName} onChange={handleChange} />
                <p className="container__input-error">{formErrors.fullName}</p>
            </div>
            <div className="container__input-wrapper">
                <label className="container__label">Your phone number</label>
                <input type="number" name="mobileNum" className="container__input container__input--number" value={formValues.mobileNum} onChange={handleChange} />
                <p className="container__input-error">{formErrors.mobileNum}</p>
            </div>
            <div className="container__input-wrapper container__input-wrapper--check">
                <input type="checkbox" className="container__input" onChange={handleChange}/>
                <label className="container__label">I read and agree Terms and Conditions</label>
            </div>
            <button className='container__btn container__btn--submit'>Create Account</button>
            </form>
        </div>
    </>
  )
}

export default ContainerRightPanel