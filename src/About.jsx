import React from "react";
import avo from "./assets/avo.png";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clients = [
    {
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      designation: "Marketing manager",
      image: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      designation: "Marketing manager",
      image: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      designation: "Marketing manager",
      image: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      designation: "Marketing manager",
      image: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      designation: "Marketing manager",
      image: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      designation: "Marketing manager",
      image: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      designation: "Marketing manager",
      image: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
    {
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Roger Scott",
      designation: "Marketing manager",
      image: "https://cdnstorage.sendbig.com/unreal/female.webp",
    },
  ];

  const team = [
    {
      name: "JOHN WELSION",
      work: "Web designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyM7DgD9zMidIgRmVrcV8BjAWq-fEGh7DlQ&s",
    },
    {
      name: "Robert Wills",
      work: "Web designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyM7DgD9zMidIgRmVrcV8BjAWq-fEGh7DlQ&s",
    },
    {
      name: "Adrian Henderson",
      work: "Web designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyM7DgD9zMidIgRmVrcV8BjAWq-fEGh7DlQ&s",
    },
    {
      name: "Mike Smith",
      work: "Web designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyM7DgD9zMidIgRmVrcV8BjAWq-fEGh7DlQ&s",
    },
    {
      name: "JOHN WELSION",
      work: "Web designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyM7DgD9zMidIgRmVrcV8BjAWq-fEGh7DlQ&s",
    },
    {
      name: "JOHN WELSION",
      work: "Web designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyM7DgD9zMidIgRmVrcV8BjAWq-fEGh7DlQ&s",
    },
    {
      name: "JOHN WELSION",
      work: "Web designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyM7DgD9zMidIgRmVrcV8BjAWq-fEGh7DlQ&s",
    },
    {
      name: "JOHN WELSION",
      work: "Web designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyM7DgD9zMidIgRmVrcV8BjAWq-fEGh7DlQ&s",
    },
  ];
  return (
    <>
      <div className="container mx-auto mt- text-center">
        <h1 className="text-4xl font-bold py-10">ABOUT US</h1>

        <div className="container mx-auto flex flex-col space-y-5 md:space-x-3 md:flex-row justify-around">
          <div className="inline-block text-xl w-full md:w-[18%] py-10  px-5 space-y-12">
            <div className="flex items-center justify-center">
              <img
                className="w-96"
                src="https://static.vecteezy.com/system/resources/previews/015/771/729/non_2x/ui-ux-designer-icon-design-free-vector.jpg"
                alt="image"
              />
            </div>
            <div>UI/UX Design</div>
          </div>
          <div className="inline-block text-xl w-full md:w-[18%] py-10  px-5 space-y-12">
            <div className="flex items-center justify-center">
              <img
                className="w-96"
                src="https://w7.pngwing.com/pngs/422/208/png-transparent-web-development-web-design-web-developer-computer-icons-developer-text-web-application-mobile-app-development-thumbnail.png"
                alt="image"
              />
            </div>
            <div>Web Development</div>
          </div>

          <div className="inline-block text-xl w-full md:w-[18%] py-10  px-5 space-y-12">
            <div className="flex items-center justify-center">
              <img
                className="w-96"
                src="https://static.thenounproject.com/png/995914-200.png"
                alt="image"
              />
            </div>
            <div>Mobile Apps</div>
          </div>
          <div className="inline-block text-xl w-full md:w-[18%] py-10  px-5 space-y-12">
            <div className="flex items-center justify-center">
              <img
                className="w-96"
                src="https://static.thenounproject.com/png/28689-200.png"
                alt="image"
              />
            </div>
            <div>SEO</div>
          </div>
        </div>

        <div className="container flex flex-col md:flex-row my-24 justify-around md:justify-center space-x-4">
          <div className="order-2 md:order-1 w-full md:w-[25%] mx-2">
            <h1 className="text-3xl font-semibold mb-4 mt-5">
              Welcome to AVO A Personal Porfolio Web Agency
            </h1>
            <p className="text-[#A0A0B4] text-xl mb-2">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It
              is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </p>
          </div>
          <div className="order-1 md:order-2 w-full md:w-[25%] mx-auto">
            <img src={avo} alt="image" className="w-auto" />
          </div>
          <div className="order-3 w-full md:order-3 md:w-[25%] mx-2">
            <p className="text-[#A0A0B4] text-xl">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <button className="text-white bg-red-600 py-3 rounded-md px-4 my-6">
              View All Projects
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-16 flex flex-col md:flex-row md:justify-around space-y-5">
        <div className="w-[90%] mx-2 md:w-[25%] text-center">
          <span className="border-b-2 text-red-500 text-xl md:text-5xl mr-3">
            01
          </span>
          <span className="text-2xl font-bold">Search Engine Optimization</span>
          <p className="text-[#A0A0B4] ml-16">
            Far far away, behind the word mountains
          </p>
        </div>
        <div className="w-[90%] mx-2 md:w-[25%] text-center">
          <span className="border-b-2 text-red-500 text-xl md:text-5xl mr-3">
            02
          </span>
          <span className="text-2xl font-bold">Search Engine Optimization</span>
          <p className="text-[#A0A0B4] ml-16">
            Far far away, behind the word mountains
          </p>
        </div>
        <div className="w-[90%] mx-2 md:w-[25%] text-center">
          <span className="border-b-2 text-red-500 text-xl md:text-5xl mr-3">
            03
          </span>
          <span className="text-2xl font-bold">Search Engine Optimization</span>
          <p className="text-[#A0A0B4] ml-16">
            Far far away, behind the word mountains
          </p>
        </div>
      </div>

      <div className="container w-[80%] mx-auto  rounded-md border bg-black px-12 py-12">
        <div className="w-full mx-3 md:w-[30%]">
          <h1 className="text-red-500">Get Started</h1>
          <h1 className="text-white text-3xl leading-7 mt-2">
            Fill in the brief and get the project estimate
          </h1>
          <p className="text-[#A0A0B4] leading-7 mt-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="bg-red-600 rounded-md text-white px-4 py-3 mt-7">
            Get Started
          </button>
        </div>
      </div>

      <div className=" container team my-24 text-center bg-[#F3F3F3]">
        <h1 className="py-14 font-bold text-4xl">Expert Team</h1>
        <div className="container text-center mx-3">
          {team.map((item) => {
            return (
              <Cards name={item.name} work={item.work} image={item.image} />
            );
          })}
        </div>
      </div>

      <div className="clients my-20 text-center">
        <h1 className="text-4xl font-bold my-10">Clients Says About Us?</h1>

        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
          <div>
            <Slider {...settings}>
              {clients.map((item) => (
                <div key={item.name} className="">
                  <div className="bg-[#F3F3F3] text-[#A0A0B4] py-6 px-4 mx-5 rounded-md space-y-5">
                    <p className="text-left leading-8 text-xl">
                      {item.description}
                    </p>
                    <div className="flex space-x-2">
                      <img src={item.image} className="w-28 rounded-full" />
                      <div className="space-y-3 mt-4">
                        <p className="text-black font-bold text-xl tracking-wide">
                          {item.name}
                        </p>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
