import React , {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card";
import{ listListing } from "../../actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector(state => state.listingList)
  const { loading, error, listings} = listingList

  useEffect(() => {
    dispatch(listListing())
  }, [dispatch])
  return (
    <div className="home">
      <Banner />
      <div className="home-section">
        <Card
          src="http://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?"
          alt=""
          title="McGregor, South Africa"
          description="1,183 kilometers away"
          price="R2,450 ZAR night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-922391321344014793/original/be9808b0-7062-4c64-9bab-8a081a68c958.jpeg?im_w=720"
          alt=""
          title="Randburg, South Africa"
          description="24 kilometers away"
          price="R2,277 ZAR night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-689791878132320331/original/0793b27c-c944-4d84-9eaa-741c8eb6e692.jpeg?"
          alt=""
          title="Santon, South Africa"
          description="19 kilometers away"
          price="R4,866 ZAR night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-1034668712443246387/original/b21459fa-2351-405b-b1ff-f718d03fa5f2.jpeg?im_w=720"
          alt=""
          title="Still Bay, South Africa"
          description="sep 4-9"
          price="R2,860 ZAR night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/43a6ee79-6685-4c3f-bb4d-8db164406006.jpg?im_w=720"
          alt=""
          title="Van Dyks Bay, South Africa"
          description="sep 1-6"
          price="R2,514 ZAR night"
        />
      </div>
    </div>
  );
};

export default Home;
