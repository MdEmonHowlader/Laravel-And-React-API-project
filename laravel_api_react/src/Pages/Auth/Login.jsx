export default function Login() {
    return(
        <>
        <h1 className="title">Login your Account</h1>
        <form className="w-1/2 mx-auto space-y-4">
            <div className="form-control">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="email" />
            </div>
            <div className="form-control">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            id="password"

            placeholder="Enter your password"
           
           
          />
         
        </div>
            <button type="submit" className="primary-btn">
          Login
        </button>
        </form>
        </>
    );
    
}