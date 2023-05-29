import { useState, useEffect } from "react";

export function Form() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setContacts([...contacts, formData]);
    setFormData({ name: "", email: "", message: "" });
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <form className="form-contact" action="" method="post">
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter your e-mail address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        id=""
        cols={5}
        rows={10}
        placeholder="Go ahead, we are listening..."
        value={formData.message}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}
