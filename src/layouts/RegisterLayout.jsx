import { Outlet } from "react-router-dom";

function RegisterLayout() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/path-to-your-image.jpg')] bg-cover">
      <Outlet />
    </div>
  );
}

export default RegisterLayout;
