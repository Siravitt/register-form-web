import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createUser } from "../apis/form-api";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await createUser(data);
      toast.success("Create success");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors);

  return (
    <>
      <div className="text-3xl font-bold text-white mt-10">Register Form</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#9ea1ad] w-[350px] p-4 flex flex-col gap-6 border border-black rounded-lg"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            {...register("firstName", { required: true, maxLength: 80 })}
            className="border rounded-lg px-4 py-2"
          />
           {errors.firstName?.type === 'required' && <p role="alert" className="text-sm text-red-500">First name is required</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            {...register("lastName", { required: true, maxLength: 100 })}
            className="border rounded-lg px-4 py-2"
          />
          {errors.lastName?.type === 'required' && <p role="alert" className="text-sm text-red-500">Last name is required</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="border rounded-lg px-4 py-2"
          />
          {errors.email?.type === 'required' && <p role="alert" className="text-sm text-red-500">E-mail is required</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Mobile number"
            {...register("phone", {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
            className="border rounded-lg px-4 py-2"
          />
        </div>
        <input
          type="submit"
          className="bg-blue-500 py-2 rounded-lg text-white font-bold hover:bg-blue-300 duration-150 cursor-pointer"
        />
      </form>
    </>
  );
}
