import Link from "next/link";

const ButtonLogin = ({isLoggedIn, name}) => {
  if (isLoggedIn) {
    return <Link href="/dashboard" className="btn btn-primary">you're logged in! {name}</Link>;
  } else {
    return <button>Login</button>
  }
};


export default ButtonLogin;
