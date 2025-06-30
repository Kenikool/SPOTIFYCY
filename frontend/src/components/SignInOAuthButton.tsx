import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) {
    return null;
  }

  const signInWithgoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };
  return (
    <Button
      onClick={signInWithgoogle}
      variant={"secondary"}
      className="w-full text-white border-zonc-200 h-11"
    >
      Continue with Google
    </Button>
  );
};

export default SignInOAuthButton;
