import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/userContext";
import { useToastContext } from "../context/toastContext";

const FormComponent: React.FC = () => {
  const { addPerson, flag, updatePerson, initialPerson} = useUserContext();
  const { openToast, message, state } = useToastContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: initialPerson,
    mode:"onBlur",
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    if (!flag) addPerson(data);
    else updatePerson(data);
    openToast("Form submitted successfully!", "safe");
    reset();
  };

  return (
    <div className="form-container">
      {message.length > 0 && (
        <div id="toast" className={`snackbar ${state === "safe" ? "safe" : "danger"}`}>
          {message}
        </div>
      )}
      <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullName">Name:</label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", {
              required: "Full name is required.",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Full name must contain only letters and spaces."
              }
            })}
          />
          <span className="error-message">{errors.fullName?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address."
              }
            })}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            {...register("phone", {
              required: "Phone number is required.",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits."
              }
            })}
          />
          <span className="error-message">{errors.phone?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required.",
              minLength: { value: 8, message: "Password must be at least 8 characters long." },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message: "Must contain uppercase, lowercase, and a number."
              }
            })}
          />
          <span className="error-message">{errors.password?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            {...register("gender", { required: "Gender is required." })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <span className="error-message">{errors.gender?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            {...register("address", {
              required: "Address is required."
            })}
          />
          <span className="error-message">{errors.address?.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            {...register("birthday", {
              required: "Birthday is required.",
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "Invalid date format (YYYY-MM-DD)"
              }
            })}
          />
          <span className="error-message">{errors.birthday?.message}</span>
        </div>

        <button type="submit" id="submit" className="btn">{flag ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default FormComponent;
