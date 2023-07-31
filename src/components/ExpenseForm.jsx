import React from "react";
import { categories } from "../App";
import { useForm } from "react-hook-form";

const ExpenseForm = ({ handSubmit,handleDeleteAll }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  return (
    <div>
        <form
          onSubmit={handleSubmit((data) => {
            handSubmit(data);
            reset();
          })}
        >
          <div className="mb-3">
            <label className="form-lable">Description</label>
            <input
              {...register("description", { required: true, minLength: 3 })}
              type="text"
              className="form-control"
            />
            {errors.description?.type=='required' && 
              <p className="text-danger">This field is required</p>
            }
             {errors.description?.type=='minLength' && 
              <p className="text-danger">atleast 3 characters</p>
            }
          </div>
          <div className="mb-3">
            <label className="form-lable">Amount</label>
            <input
              {...register("amount", { required: true, valueAsNumber: true })}
              type="number"
              className="form-control"
            />
            {errors.amount?.type=='required' && 
              <p className="text-danger">This field is required</p>
            }
          </div>
          <div className="mb-5">
            <label className="mb-3" htmlFor="">
              Category
            </label>
            <select
              {...register("category", { required: true })}
              className="form-control"
            >
              <option></option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && 
              <p className="text-danger">This field is required</p>
            }
          </div>
          <button className=" mb-3 btn btn-outline-primary">Submit</button>
        </form>
        <button onClick={handleDeleteAll} className=" mb-3 btn btn-outline-danger">Delete All</button>
    </div>
  );
};
export default ExpenseForm;
