// Profile section compoment. Using Font Awesome icons here.
const Profile = ({ profileInfo }) => {
    return <div>
        <img src={profileInfo.image} alt="Profile" />
        <h2>{profileInfo.name}</h2>
        <p>{profileInfo.label}</p>
        <hr style={{ "width": "90%" }} />
        <div className='profile-address'>
            <p><i className="fa fa-map-marker icon" aria-hidden="true"></i>{profileInfo.location.city}, {profileInfo.location.countryCode}</p>
            <i className="fa fa-envelope icon"></i><a href={`mailto:example@abc.com`}>{profileInfo.email}</a>
        </div>
        <hr style={{ "width": "90%" }} />
        <div>
            <p><a href={profileInfo.profiles[0].url}><i className="fa fa-linkedin icon"></i></a>
                <a href={profileInfo.profiles[1].url}><i className="fa fa-github icon"></i></a>
            </p>
        </div>
    </div>;
};

export default Profile;
