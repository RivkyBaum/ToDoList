import React, { useState } from 'react';
import service from './service';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    debugger
    event.preventDefault();
    console.log(username, password);
    await service.register({ username },{password});
    setUsername('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
// import React, { useState } from 'react';
// import service from './service';

// function RegistrationForm() {
//   const [user, setUser] = useState({ username: '', password: '' });

//   async function handleSubmit  (event)  {
//     event.preventDefault();
//         debugger
//     // כאן אתה יכול לבצע את הפעולות של ההרשמה, כמו שליחת הנתונים לשרת
//     console.log(user);

//     // setUser({ username: , password: '' });
//     await service.register(user)
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           name="username"
//           value={user.username}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default RegistrationForm;