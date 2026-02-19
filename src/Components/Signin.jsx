import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sigin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/split");
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />

        <select name="experience" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="fresher">Fresher</option>
          <option value="experienced">Experienced</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Sigin;

