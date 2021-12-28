import dynamic from "next/dynamic";
import Layout from "../../src/components/Layout";

const JenosizeLoading = dynamic(
  () => import("../../src/components/JenosizeLoading"),
  {
    ssr: false,
  }
);

const SearchPlaceModule = dynamic(
  () => import("../../src/modules/SearchModule"),
  {
    loading: () => <JenosizeLoading />,
  }
);

const SearchPlace = () => {
  return (
    <Layout>
      <SearchPlaceModule />
    </Layout>
  );
};

export default SearchPlace;
