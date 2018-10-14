import React, { Component } from "react";
import isEmpty from "../../../redux/utilities/isEmpty";
import facebook from "../../formComponents/socialmedia/facebook.png";
import instagram from "../../formComponents/socialmedia/instagram.png";
import twitter from "../../formComponents/socialmedia/twitter.png";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    console.log(profile);

    return (
      <div>
        <h1>{profile.user.name}</h1>
        <p>{profile.title}</p>
        <p>Living in {profile.location}</p>
        <div>
          {isEmpty(
            profile.social_media && profile.social_media.facebook
          ) ? null : (
            <div>
              <a href={profile.social_media.facebook}>
                <img src={facebook} alt="Facebook icon" />
              </a>
            </div>
          )}
          {isEmpty(
            profile.social_media && profile.social_media.instagram
          ) ? null : (
            <div>
              <a href={profile.social_media.instagram}>
                <img src={instagram} alt="Instagram icon" />
              </a>
            </div>
          )}
          {isEmpty(
            profile.social_media && profile.social_media.twitter
          ) ? null : (
            <div>
              <a href={profile.social_media.twitter}>
                <img src={twitter} alt="Twitter icon" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
