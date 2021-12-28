import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { setName } from "../../redux/reducers/searchNameSlice";
import {
  HomeIcon,
  MapIcon,
  SearchIcon,
  SettingIcon,
  ShareIcon,
} from "../Icons";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const [inputName, setInputName] = useState<string>("");

  const footerProps = [
    {
      icon: <ShareIcon htmlColor="#000000" />,
      label: "Home",
      link: "/",
    },
    {
      icon: <MapIcon htmlColor="#000000" />,
      label: "Search",
      link: "/search",
    },
    {
      icon: <SettingIcon htmlColor="#000000" />,
      label: "Setting",
      link: "",
    },
  ];

  const onChangeText = (data: string) => {
    setInputName(data);
  };

  const _setState = () => {
    dispatch(setName(inputName));
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <HomeIcon htmlColor="#FFF" />
          <span className="font-semibold text-xl tracking-tight pl-4">
            Jenosize
          </span>
        </div>
        {/* Search button */}
        <div className="sm:flex xs:pt-0 pt-2 items-center justify-center">
          <div className="flex item-center w-full lg:w-1/2 sm:pb-0 bg-white rounded-lg">
            <input
              onChange={(e) => onChangeText(e.target.value)}
              name="search"
              className="py-2 w-full focus:outline-none bg-text-search rounded-lg pl-4"
              placeholder="Search"
            />
            <button
              className="focus:outline-none bg-text-search mx-auto py-2 pr-2"
              onClick={() => _setState()}
            >
              <SearchIcon htmlColor="#3B82F6" />
            </button>
          </div>
        </div>
      </nav>
      {children}

      <div className="w-full fixed bottom-0">
        <hr />
        <div className="bg-white h-[72px] px-[12px]">
          <div className="grid grid-cols-3 gap-2 h-full md:max-w-[640px] mx-auto pt-4 justify-between">
            {footerProps.map((item, index) => {
              return (
                <div
                  className="flex flex-row justify-center my-auto"
                  key={index}
                >
                  <a href={`${item.link}`}>
                    <div className="text-center">{item.icon}</div>
                    <div className="text-black text-center font-light text-[12px]">
                      {item.label}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
