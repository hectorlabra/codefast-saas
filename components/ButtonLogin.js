import Link from "next/link";

const ButtonLogin = ({isLoggedIn, name, extraStyle}) => {
  if (isLoggedIn) {
    return <Link href="/dashboard" className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}>you&apos;re logged in! {name}</Link>;
  } else {
    return <button>Login</button>
  }
};

export default ButtonLogin;