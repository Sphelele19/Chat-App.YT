import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });
  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs,gender});
  };
  const { signup, loading } = useSignup();
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={inputs.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
            
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700" 
              disabled={loading}
            >
              {loading ? <span className="loading-spinner"></span> : "Signup"}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;



//STERTER CODE FOR SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const signup = () => {
//   return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
//       <h1 className="text-3xl font-semibold text-center text-gray-300">Signup
//         <span className="text-blue-500">ChatApp</span>
//       </h1>

//       <form>
//         <div>
//           <label className="label p-2">
//             <span className="text-base label-text">Full Name</span>
//           </label>
//           <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10"/>
//         </div>

//         <div>
//           <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="input input-bordered w-full h-10"
//             />
//         </div>

//         <div>
//            <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="input input-bordered w-full h-10"
//             />
//         </div>

//         <div>
//           <label className="label">
//             <span className="text-base label-text">Confirm Password</span>
//           </label>
//           <input
//           type="password"
//           placeholder="Confirm Password"
//           className="w-full input input-bordered h-10"
//           />
//         </div>

//         <GenderCheckbox />
        
//         <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href='#'>
//           Already have an account?
//           </a>  

//         <div>
//           <button className="btn btn-block btn-sm mt-2 border border-slate-700">Signup</button>
//         </div>
//       </form>
//     </div>
//   </div>
// };

// export default signup