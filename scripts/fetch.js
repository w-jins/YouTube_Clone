let data = [];

const fetchYoutubeData = async () => {
  try {
    const res = await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=kr&maxResults=30&key=AIzaSyB6bBEgqhrS_OexJv53P7x3rQTrmdVVHsI");
    const resData = await res.json();
    data = resData.items;

    return data;
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
  }
};

const fetchYouTubeChannel = async (id) => {
  try {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${id}`);
  } catch (e) {
    console.log(e);
  }
};

export { fetchYoutubeData };
