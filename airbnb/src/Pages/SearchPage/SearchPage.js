import React from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = () => {
  return (
    <div className="search-page">
      <div className="search-page-info">
        <p>15 stays - 19 August to 30 August - 3 Guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of places</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResults
        img="https://a0.muscache.com/im/pictures/miso/Hosting-922391321344014793/original/be9808b0-7062-4c64-9bab-8a081a68c958.jpeg?im_w=720"
        location="South Africa"
        title="Neat 2 bedroom unit with pool view"
        description="2 beds - wifi - kitchen"
        star={4.5}
        price="$50 / Night"
        total="$500"
      />

      <SearchResults
        img="https://a0.muscache.com/im/pictures/miso/Hosting-922391321344014793/original/be9808b0-7062-4c64-9bab-8a081a68c958.jpeg?im_w=720"
        location="South Africa"
        title="Neat 2 bedroom unit with pool view"
        description="2 beds - wifi - kitchen"
        star={4.5}
        price="$50 / Night"
        total="$500"
      />

      <SearchResults
        img="https://a0.muscache.com/im/pictures/miso/Hosting-922391321344014793/original/be9808b0-7062-4c64-9bab-8a081a68c958.jpeg?im_w=720"
        location="South Africa"
        title="Neat 2 bedroom unit with pool view"
        description="2 beds - wifi - kitchen"
        star={4.5}
        price="$50 / Night"
        total="$500"
      />
     
    </div>
  );
};

export default SearchPage;
