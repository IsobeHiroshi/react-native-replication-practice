import {Image} from 'native-base';

const ProfileImage = (props)=>{
    return (
      <Image
        source={props.imgSrc}
        alt="profile image"
        height="10"
        width="10"
        rounded="10"
        mr={5}
      ></Image>
    );
}

export default ProfileImage;