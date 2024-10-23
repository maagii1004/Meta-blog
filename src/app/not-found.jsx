"use client";

const NotFoundPage = () => {
  return (
    <div className="w-[642px] h-[208px] flex justify-between gap-9 items-center mx-auto my-[190px]">
      <div className="text-[72px] leading-[72px] font-sans">404</div>
      <div className="w-px h-[156px] bg-gray-300 mx-2" />
      <div>
        <h1 className="text-xl font-sans font-semibold">Page Not Found</h1>
        <p className="font-sans text-[#696A75] text-base leading-[26px] my-5">
          We are sorry. The page you are looking for is unknown or does not exist. Please check your request.
        </p>
        <a
          href="http://localhost:3000"
          className="font-sans font-medium text-sm border rounded-md bg-[#4B6BFB] text-white w-[130px] h-10 flex justify-center items-center"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
