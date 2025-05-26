import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";

function Product() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Product;

function HeroSection() {
  return (
    <div
      className="hero h-[450px]"
      style={{
        backgroundImage:
          "url(https://koinworks.com/wp-content/uploads/2021/06/shutterstock_1867923601.jpg)", // asumsi pakai public folder
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb- text-5xl font-bold ">Our Coffee Products</h1>
          <p className="mb-5 text-2xl font-semibold">
            Premium Arabica and Robusta beans from Indonesia's finest growing
            regions
          </p>
          <button className="btn bg-amber-800 border-amber-800 text-white shadow-none">
            Request Samples <IoIosArrowRoundForward />
          </button>
          <button className="btn bg-white border-amber-800 text-white shadow-none">
            Download Catalog <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <>
      <div className="hero bg-gray-300 min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center flex justify-center items-center flex-col w-2xl">
            <h1 className="font-bold text-4xl text-Black mt-4 mb-1.5">
              Product
            </h1>
          </div>

          {/* card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/736x/8f/0b/73/8f0b732c61df8d8dcfc3be2f80ef1924.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/736x/39/fb/91/39fb9137d258282587f28bc889c1fa87.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://down-id.img.susercontent.com/file/175d6cfe959e2cb375925ac5f762cde3@resize_w900_nl.webp"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/736x/b4/7d/65/b47d6558720dbc7daa90d0f48ea73826.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pinimg.com/736x/f1/c6/89/f1c68907fc855fdd9a031347774dcc8a.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
