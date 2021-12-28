import { useEffect, useState } from "react";
import JenosizeLoading from "../../components/JenosizeLoading";
import { useAppSelector } from "../../redux/hook";
import axios from "axios";

export interface ILocation {
  lat: number;
  lng: number;
}

export interface INortheast {
  lat: number;
  lng: number;
}

export interface ISouthwest {
  lat: number;
  lng: number;
}

export interface IViewport {
  northeast: INortheast;
  southwest: ISouthwest;
}

export interface IGeometry {
  location: ILocation;
  viewport: IViewport;
}

export interface IOpeningHours {
  open_now: boolean;
}

export interface ICandidate {
  formatted_address: string;
  geometry: IGeometry;
  name: string;
  opening_hours: IOpeningHours;
  rating: number;
}

export interface IMessage {
  candidates: ICandidate[];
  status: string;
}

export interface IData {
  status: boolean;
  code: number;
  message: IMessage;
}

const SearchPlaceModule = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resData, setResData] = useState<any>();
  const [resPlaceId, setResPlaceId] = useState<any>();
  const [getPlaceId, setGetPlaceId] = useState<boolean>(false);

  var name = useAppSelector((state) => state.search.name);
  const dataArray: any = [];
  const placeId: any = [];

  useEffect(() => {
    console.log("name", name);
    if (name) {
      _getAllOfValue();
    }
  }, [name]);

  useEffect(() => {
    resData?.message.candidates.map((item: ICandidate, index: number) => {
      dataArray.push(
        `${item.geometry.location.lat},${item.geometry.location.lng}`
      );
      _getMoreDetail(
        `${item.geometry.location.lat},${item.geometry.location.lng}`
      );
    });
  }, [resData]);

  useEffect(() => {
    placeId.push(resPlaceId?.message.results[0].place_id);
  }, [resPlaceId]);

  const _getMoreDetail = async (location: string) => {
    const apiUrl = `http://localhost:5000/google/placeid?text=${name}&location=${location}`;
    try {
      const response: any = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (response.status === 200) {
        console.log("get more detail:", response);
        setResPlaceId(response.data);
      }
      return [response.status, null];
    } catch (error) {
      console.log(error);
    }
  };

  const _getAllOfValue = async () => {
    const apiUrl = `http://localhost:5000/googleplace?text=${name}`;
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (response.status === 200) {
        console.log("res:", response);
        setResData(response.data);
      }
      return [response.status, null];
    } catch (error) {
      console.log(error);
    }
  };

  const details = [
    {
      img: "https://networkingnerd.files.wordpress.com/2015/11/mossball1.jpg?w=584",
      title: "Mos",
      description: "Getting a new business off the ground is a lots",
      link: "/",
    },
    {
      img: "https://networkingnerd.files.wordpress.com/2015/11/mossball1.jpg?w=584",
      title: "Mos",
      description: "Getting a new business off the ground is a lots",
      link: "/",
    },
    {
      img: "https://networkingnerd.files.wordpress.com/2015/11/mossball1.jpg?w=584",
      title: "Mos",
      description: "Getting a new business off the ground is a lots",
      link: "/",
    },
  ];

  console.log("placeId", placeId, dataArray);
  return (
    <div className="text-center overflow-auto pb-20">
      {loading && <JenosizeLoading />}
      <div className="pb-4">search: {name}</div>
      {details.map((item, index) => {
        return (
          <div key={index} className="pb-4">
            <a href={item.link}>
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={item.img}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-left uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {item.title}
                    </div>
                    <a
                      href={item.link}
                      className="text-left block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      {item.description}
                    </a>
                    <p className="text-left mt-2 text-gray-500">
                      Getting a new business off the ground is a lot of hard
                      work. Here are five ideas you can use to find your first
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SearchPlaceModule;
