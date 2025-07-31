import './App.css'
import { useForm } from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  async function onSubmit(data) {
    // Stimulating an API call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Submitting the form: ", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name : </label>
        <input
        className={errors.firstName ? "input-error" : ""}
        {...register("firstName",
          {
            required: true,
            minLength: {value: 3, message: "Min len atleast 3"},
            maxLength: {value: 6, message: "Max len atmost 6"}
          })}/>
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name : </label>
        <input
        className={errors.middleName ? "input-error" : ""}
        {...register("middleName",
          {
            required: {value: true, message: "Middle name is mandatory"}
          })}/>
        {errors.middleName && <p className='error-msg'>{errors.middleName.message}</p>}
      </div>
      <br />
      <div>
        <label>Last Name : </label>
        <input
        className={errors.lastName ? "input-error" : ""}
        {...register("lastName",
          {
            required: true,
            pattern: {value: /^[A-Za-z]+$/i, message: "Last name is not as per rules"}
          })}/>
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
    </form>
  )
}

export default App
