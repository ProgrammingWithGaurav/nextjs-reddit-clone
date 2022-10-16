const style = {
  profilePic: "h-4 w-4 rounded-full",
  wrapper: "flex items-center space-x-1 text-xs text[#818284]",
  profilePicContainer: "flex items-center space-x-1",
  tag: "cursor-pointer text-xs font-semibold text-[#D7ADAC] hover:underline",
  postedBy: "flex items-center space-x-1",
};

const Info = ({author}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPl-XNdKphblRrGKXGp5tNX5maGQeNvFX7gQ&usqp=CAU"
          className={style.profilePic}
        />
      </div>
      <div className={style.tag}>r/cleverprogrammer</div>

      <span>•</span>

      <div className={style.postedBy}>
        <span>Posted by {author}</span>
        <span>•</span>

        <span>October 14</span>
      </div>
    </div>
  );
};

export default Info;
